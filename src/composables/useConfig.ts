import { provide, inject, reactive } from 'vue';

import en from '@/locale/en';

import type { MessageSchema } from '@/locale';

export const configSymbol = Symbol();

export interface Config {
    locale: string;
    messages: Record<string, MessageSchema>;
}

export const defaultConfig: Config = {
    locale: 'en',
    messages: {
        en,
    },
};

export default function useConfig(override?: Partial<Config>): Config {
    const config = inject<Config>(configSymbol);

    if (!config) {
        throw new Error('Config not found! Did you install the plugin?');
    }

    if (override) {
        const newConfig = reactive({ ...config, ...override });

        provide(configSymbol, newConfig);

        return newConfig;
    }

    return config;
}
