import { boolean } from 'boolean';
import invariant from 'tiny-invariant';

const _TG_TOKEN = process.env.TG_BOT_TOKEN;
invariant(_TG_TOKEN, 'bot token is undefined');

export const TG_TOKEN = _TG_TOKEN;
export const TG_ADMIN_SECRET = process.env.TG_ADMIN_SECRET;
export const TG_IS_TEST_ENV = boolean(process.env.TG_IS_TEST_ENV);
