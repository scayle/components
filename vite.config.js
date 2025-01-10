import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { ComponentsPlugin, IconsPlugin } from './panel-icons.vite';

export const alias = {
    '@': path.join(__dirname, 'src'),
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), ComponentsPlugin(), IconsPlugin()],
    resolve: {
        alias,
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: '@scayle/components',
            fileName: format => `components.${format}.js`,
        },
        commonjsOptions: {
            requireReturnsDefault: id => {
                if (id === 'vue') {
                    return false;
                }

                return 'auto';
            },
            esmExternals: id => id === 'vue',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue', 'chart.js'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                    'chart.js': 'Chart',
                    'chart.js/helpers': 'Chart.helpers',
                },
            },
        },
    },
    test: {
        environment: 'jsdom',
        mockReset: true,
        include: ['**/*.unit.{js,ts}'],
        coverage: {
            reporter: ['cobertura', 'text'],
            reportsDirectory: 'coverage',
            exclude: ['**/*.unit.{js,ts}'],
        },
        setupFiles: path.resolve(__dirname, 'tests/setup.js'),
    },
});
