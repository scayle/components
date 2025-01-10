import './../src/index.css';
import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { addons } from '@storybook/preview-api';
// @ts-ignore
import i18n from 'storybook-i18n/preview';
import ComponentsPlugin from '../src/plugin';
import languagesLoader, { setLocaleToRootDocument } from './languages-loader';

import { page } from './docs/page.jsx';
import './css/main.css';

const defaultLanguage = 'en';
const { locales, messages } = languagesLoader(defaultLanguage);

setup((app, context) => {
    const locale = context.globals.locale;

    app.use(ComponentsPlugin, { locale, messages });

    setLocaleToRootDocument(locale);
    app.config.globalProperties.$panel.config.locale = locale;

    addons.getChannel().on('LOCALE_CHANGED', newLocale => {
        app.config.globalProperties.$panel.config.locale = newLocale;

        setLocaleToRootDocument(newLocale);
    });

    // Close language selection dropdown in case it is opened (hook "onStoryChange" is no longer available in Storybook 7)
    document.getElementById('storybook-docs')?.click();
});

const preview: Preview = {
    ...i18n,
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            source: {
                type: 'code',
            },
            page,
        },
    },

    globals: {
        locale: defaultLanguage,
        locales,
    },
};

export default preview;
