import { createRequestHandler, GetLoadContextFunction } from '@remix-run/express';
import express from 'express';
import { createRequire } from 'module';
import morgan from 'morgan';
import path from 'path';
import { tg } from '~/telegraf';

// @ts-expect-error
const require = createRequire(import.meta.url);

const app = express();

app.use((req, res, next) => {
  // /clean-urls/ -> /clean-urls
  if (req.path.endsWith('/') && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    const safepath = req.path.slice(0, -1).replace(/\/+/g, '/');
    res.redirect(301, safepath + query);
    return;
  }
  next();
});

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

// Remix fingerprints its assets so we can cache forever.
app.use('/build', express.static('public/build', { immutable: true, maxAge: '1y' }));

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('public', { maxAge: '1h' }));

app.use(morgan('dev'));

const MODE = process.env.NODE_ENV;
const BUILD_DIR = path.join(process.cwd(), 'build');

const getLoadContext: GetLoadContextFunction = () => {
  return {
    tg,
  };
};

if (MODE === 'production') {
  app.all('*', createRequestHandler({ build: require(BUILD_DIR), getLoadContext }));
} else {
  app.all('*', (...args) => {
    purgeRequireCache();
    const requestHandler = createRequestHandler({
      build: require(BUILD_DIR),
      mode: MODE,
      getLoadContext,
    });

    return requestHandler(...args);
  });
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // require the built app so we're ready when the first request comes in
  require(`${BUILD_DIR}/index.js`);
  console.log(`✅ app ready: http://localhost:${port}`);
});

function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't const
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, we prefer the DX of this though, so we've included it
  // for you by default
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete require.cache[key];
    }
  }
}
