import { Telegraf } from 'telegraf';
import { childLogger } from '~/logger';

const logger = childLogger({ category: 'tg.start' });

export function start(bot: Telegraf) {
  bot.start((ctx) => {
    logger.debug('start handler');

    if (ctx.chat.type !== 'private' || ctx.from.is_bot === true) {
      return;
    }

    ctx.reply('Задам всего три вопроса и пришлю подборку подходящих квартир 🙌', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Ясно, давай',
              web_app: { url: `${(ctx as any).hostname}/first-question` },
            },
          ],
        ],
      },
    });

    return;
  });
}
