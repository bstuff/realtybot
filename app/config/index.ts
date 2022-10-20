import invariant from 'tiny-invariant';

const _TG_TOKEN = process.env.TG_BOT_TOKEN;
invariant(_TG_TOKEN, 'bot token is undefined');

export const TG_TOKEN = _TG_TOKEN;