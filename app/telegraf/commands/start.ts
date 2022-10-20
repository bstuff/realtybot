import { Telegraf } from 'telegraf';
import { childLogger } from '~/logger';

const logger = childLogger({ category: 'tg.start' });

export function start(bot: Telegraf) {
  bot.start((ctx) => {
    logger.debug('start handler');

    if (ctx.chat.type !== 'private') {
      return;
    }

    ctx.reply('тут текст для ответа - поделись контактом', {
      reply_markup: {
        keyboard: [[{ text: 'тут текст для клавиатуры - поделись конактом', request_contact: true }]],
      },
    });
  });
}
