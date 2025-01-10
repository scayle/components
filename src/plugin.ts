import { reactive } from 'vue';
import type { Plugin } from 'vue';

import { configSymbol, defaultConfig, type Config } from './composables/useConfig';

const plugin: Plugin = {
    install: (app, options?: Partial<Config>) => {
        const configOptions: Config = options ? { ...defaultConfig, ...options } : { ...defaultConfig };

        const config = reactive(configOptions);

        app.provide(configSymbol, config);

        // TODO: A better name for this property
        app.config.globalProperties.$panel = {
            config,
        };
    },
};

export default plugin;
