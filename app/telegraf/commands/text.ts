import { Telegraf } from 'telegraf';
import { childLogger } from '~/logger';

const logger = childLogger({ category: 'tg.text' });

export function text(bot: Telegraf) {
  bot.on('text', async (ctx) => {
    logger.debug('text handler');

    if (ctx.chat.type !== 'private') {
      return;
    }

    const { message } = ctx;

    if (message.text === 'Sign Up ✅') {
      ctx.reply('тут будет ссылка на TOC: https://telegra.ph/jkfdssd-05-15', {
        reply_markup: {
          remove_keyboard: true,
          keyboard: [
            [
              {
                text: 'web app',
                // TODO: add secret hash after userId
                web_app: { url: `${(ctx as any).hostname}/twapp/signup-form/${message.from.id}` },
              },
            ],
          ],
        },
      });
      return;
    }
  });
}
