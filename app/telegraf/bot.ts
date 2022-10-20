import { Telegraf } from 'telegraf';
import { TG_TOKEN } from '~/config';
import { childLogger } from '~/logger';

import * as commands from './commands';

export const bot = new Telegraf(TG_TOKEN);

const logger = childLogger({ category: 'tg.bot' });

bot.use((ctx, next) => {
  logger.debug(ctx.update);
  next();
})

for (const key in commands) {
  // @ts-ignore
  commands[key](bot);
}

bot.help((ctx) => {
  ctx.reply('hello world');
});

