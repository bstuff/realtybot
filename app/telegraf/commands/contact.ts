import { Telegraf } from 'telegraf';
import { childLogger } from '~/logger';
import { upsertTgUser } from '~/models/tgUser.server';

const logger = childLogger({ category: 'tg.contact' });

export function contact(bot: Telegraf) {
  bot.on('contact', async (ctx) => {
    logger.debug('contact handler');

    if (ctx.chat.type !== 'private') {
      return;
    }

    const {
      from,
      message: { contact },
    } = ctx;

    if (contact.user_id !== from.id) {
      // user send not his contact
      return;
    }

    const tgUser = await upsertTgUser({
      id: from.id,
      firstName: contact.first_name,
      username: from.username || null,
    });

    ctx.reply(
      JSON.stringify(tgUser, null, 2) +
        `\nБот благодарит за предоставленный номер.
И предлагает зарегистрироваться, чтобы начать оформление карты, отображается кнопка Sign Up.`,
      {
        reply_markup: {
          keyboard: [[{ text: 'Sign Up ✅' }]],
        },
      },
    );
  });
}
