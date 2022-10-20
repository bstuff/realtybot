import { json, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { LinksFunction, MetaFunction, LoaderFunction } from 'remix';

export const links: LinksFunction = () => {
  return [];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Hello Remix',
  viewport: 'width=device-width,initial-scale=1',
});

type LoaderData = {
  user: null;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: null,
  });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
