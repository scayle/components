import { computed } from 'vue';

import useConfig from './useConfig';
import type { MessageSchema } from '@/locale';


type TranslationKey = keyof MessageSchema;

export default function useTranslation() {
    const config = useConfig();

    const currentLocale = computed(() => {
        const messages = config.messages[config.locale];

        if (!messages) {
            console.warn(`locale '${config.locale}' was not registered, defaulting to 'en'`);
            return config.messages.en;
        }

        return messages;
    });

    const htmlTranslation = (key: TranslationKey, params?: Record<string, string>) => {
        const translation = currentLocale.value[key];

        // eslint-disable-next-line no-unsanitized/method
        const fragment = document.createRange().createContextualFragment(translation);
        const iterator = document.createNodeIterator(fragment, NodeFilter.SHOW_TEXT);

        let node;
        while ((node = iterator.nextNode())) {
            for (const key in params) {
                if (node.textContent?.includes(':' + key)) {
                    node.textContent = node.textContent.replace(':' + key, params[key]);
                }
            }
        }

        return fragment;
    };

    const stringTranslation = (key: TranslationKey, params?: Record<string, string>) => {
        let translation = currentLocale.value[key];

        for (const replaceKey in params) {
            translation = translation.replace(':' + replaceKey, params[replaceKey]);
        }

        return translation;
    };

    return {
        t: stringTranslation,
        th: htmlTranslation,
    };
}
