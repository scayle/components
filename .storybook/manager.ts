import { addons } from '@storybook/manager-api';
import ScayleTheme from './ScayleTheme';

export * from 'storybook-i18n/manager';
export * from './locale-addon-updater';

addons.setConfig({
    theme: ScayleTheme,
});
