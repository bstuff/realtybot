import { useEffect } from 'react';
import { ActionFunction, Form, json, LoaderFunction, useActionData, useLoaderData, useTransition } from 'remix';
import { childLogger } from '~/logger';
import type { tg } from '~/telegraf';

interface LoaderData {
  userId: string;
}

export const loader: LoaderFunction = ({ params }): LoaderData => {
  return {
    userId: params.userId || '',
  };
};

interface ActionData {
  ok: boolean;
}

export const action: ActionFunction = async ({ params, context, request }) => {
  const logger = childLogger('app.twapp.signup-form');
  const telegram: typeof tg = context.tg;
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  let ok = false;

  try {
    await telegram.telegram.sendMessage(params.userId!, JSON.stringify(values, null, 2), {
      reply_markup: { remove_keyboard: true },
    });
    ok = true;
  } catch (err) {
    logger.error(err);
  }

  return json<ActionData>({ ok });
};

export default function () {
  const { userId } = useLoaderData<LoaderData>();
  const actionData = useActionData<ActionData>();
  const transition = useTransition();

  useEffect(() => {
    window.Telegram.WebApp.ready();
  }, []);

  useEffect(() => {
    if (actionData?.ok) {
      window.Telegram.WebApp.close();
    }
  }, [actionData?.ok]);

  return (
    <>
      <script src="https://telegram.org/js/telegram-web-app.js" />
      <main>
        <div>Hello from web app, user #{userId}!</div>
        <Form method="post">
          <fieldset disabled={transition.state === 'submitting'}>
            <input name="firstname" defaultValue={'firstName'} />
            <br />
            <input name="email" type="email" defaultValue="email@mai.com" />
            <br />
            <button type="submit">ok</button>
          </fieldset>
        </Form>
      </main>
    </>
  );
}
