const rtlLanguages = ['ar', 'he'];
const basename = (value: string) => value.substring(value.lastIndexOf('/') + 1, value.lastIndexOf('.'));

export function buildLocales(locale = 'en', locales: string[]) {
    const translator = new Intl.DisplayNames([locale], { type: 'language' });

    return Object.fromEntries(
        locales.map(code => {
            const language = translator.of(code);

            return [code, { title: language, right: code }];
        })
    );
}

export default function (locale = 'en') {
    // @ts-ignore
    const importedLanguages = import.meta.glob('@/locale/*.ts', { eager: true });
    const locales = Object.keys(importedLanguages)
        .map(key => basename(key))
        .filter(code => code !== 'index');
    const messages = Object.fromEntries(
        Object.keys(importedLanguages)
            .map(key => {
                const code = basename(key);

                if (code === 'index') {
                    return null;
                }

                return [code, importedLanguages[key].default];
            })
            .filter(Boolean)
    );

    return {
        messages,
        locales: buildLocales(locale, locales),
    };
}

export const getDirectionOfLocale = (locale: string) => (rtlLanguages.includes(locale) ? 'rtl' : 'ltr');

export const setLocaleToRootDocument = (locale = 'en') => {
    document.documentElement?.setAttribute('lang', locale);
    document.dir = getDirectionOfLocale(locale);
};
