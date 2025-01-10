// @ts-ignore
import React, { useEffect } from 'react';
import { addons as addonsManager, types, useGlobals } from '@storybook/manager-api';

import { buildLocales, setLocaleToRootDocument } from './languages-loader';

const LocaleUpdater = () => {
    const [globals, updateGlobals] = useGlobals();
    const { locale, locales } = globals;

    useEffect(() => {
        if (!locale || !locales) {
            return;
        }

        updateGlobals({
            locales: buildLocales(locale, Object.keys(locales)),
        });
        setLocaleToRootDocument(locale);
    }, [locale, locales, updateGlobals]);

    return null;
};

addonsManager.register('locale-addon-updater', () => {
    addonsManager.add('locale-addon-updater-tool', {
        title: 'Storybook i18n',
        type: types.TOOL,
        render: LocaleUpdater,
        hidden: true,
    });
});
