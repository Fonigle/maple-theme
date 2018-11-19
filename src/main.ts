import './custom.scss';

import { PluginObject } from 'vue';
import ThemeDirective from './maple-theme-directive';
import ThemePlugin from './maple-theme-plugin';

declare class mapleThemeConfig {
    brightness: 'light' | 'dark';
    color: string;
}

const mapleTheme: PluginObject<mapleThemeConfig> = {
    install(Vue, config) {
        const brightness = (config && config!.brightness) || 'dark';
        const color = (config && config!.color) || 'default';

        document.body.classList.add(`mp-${brightness}`);
        document.body.classList.add(`mp-theme-${color}`);

        Vue.directive('theme', ThemeDirective);
        Vue.use(ThemePlugin);
    }
};

export default mapleTheme;
