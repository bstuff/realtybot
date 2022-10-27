import type { ActionFunction } from 'remix';
import { TG_ADMIN_SECRET } from '~/config';

export const action: ActionFunction = async (data) => {
  const { request, context } = data;
  const req = await request.json();

  const { secret } = req;

  if (!secret) {
    throw new Error('no secret provided');
  }

  if (secret !== TG_ADMIN_SECRET) {
    throw new Error('wrong secret provided');
  }
  const webhookUrl = request.url.replace(/^http/, 'https').replace(/\/set-webhook.*/, '');
  const telegram = context.tg;

  try {
    const whInfoBefore = await telegram.telegram.getWebhookInfo();
    await telegram.telegram.setWebhook(webhookUrl, { drop_pending_updates: true });
    const whInfoAfter = await telegram.telegram.getWebhookInfo();
    const me = await telegram.telegram.getMe();

    return new Response(
      `OK: ` +
        JSON.stringify(whInfoBefore, null, 2) +
        JSON.stringify(whInfoAfter, null, 2) +
        JSON.stringify(me, null, 2),
    );
  } catch (error: any) {
    console.error(error);

    return new Response(`ERROR: ${error.message}`, { status: 500 });
  }
};

export function loader() {
  return new Response(`Not implemented`, { status: 405 });
}
