import type { LoaderFunction } from 'remix';
import { tg } from '~/telegraf';

export const action: LoaderFunction = async (data) => {
  const { request, context } = data;

  const telegram: typeof tg = context.tg;

  const url = new URL(request.url);
  // @ts-expect-error
  telegram.context.hostname = url.origin.replace(/^http/, 'https');

  try {
    await telegram.handleUpdate(await request.json());

    return new Response('OK');
  } catch (error: unknown) {
    console.log('tg-webhook ❌', { error });

    return new Response('ERROR', { status: 500 });
  }
};
