import '@remix-run/server-runtime/dist/data';

import type { tg } from '~/telegraf';

declare module '@remix-run/server-runtime/dist/data' {
  export interface AppLoadContext {
    tg: typeof tg;
  }
}
