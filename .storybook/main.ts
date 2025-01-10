import type { StorybookConfig } from '@storybook/vue3-vite';
import svgLoader from 'vite-svg-loader';
import markdownRawPlugin from 'vite-raw-plugin';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
        {
            name: '@storybook/addon-styling',
            options: {
                postCss: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    docs: {
        autodocs: true,
    },

    viteFinal: (config, options) => {
        config.plugins = [
            ...(config.plugins || []),
            markdownRawPlugin({
                fileRegex: /\.md$/,
            }),
            svgLoader(),
        ];

        return config;
    },
};
export default config;
