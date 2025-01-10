import fs from 'node:fs';
import path from 'node:path';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

function generatePanelIcons() {
    const dir = path.join(path.dirname(require.resolve('@scayle/panel-icons')), 'icons');
    const icons: { [key: string]: string } = {};

    fs.readdirSync(dir).forEach(function(file) {
        const simpleName: string = file.replace('.svg', '');
        icons[simpleName] = fs.readFileSync(path.join(dir, file)).toString('utf8');
    });

    return icons;
}

export const ComponentsPlugin = () =>
    Components({
        resolvers: [
            IconsResolver({
                prefix: 'icon',
                customCollections: ['panel'],
            }),
        ],
    });

export const IconsPlugin = () =>
    Icons({
        compiler: 'vue3',
        defaultClass: 'icon',
        customCollections: {
            panel: generatePanelIcons(),
        },
    });
