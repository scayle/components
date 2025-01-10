import 'vitest-canvas-mock';
import Storage from 'dom-storage';
import { config } from '@vue/test-utils';

import ComponentLibraryPlugin from '../src/plugin';

global.localStorage = new Storage(null, { strict: true });
global.sessionStorage = new Storage(null, { strict: true });

config.global.plugins = [ComponentLibraryPlugin];
