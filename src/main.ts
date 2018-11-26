import './maple-theme.scss';

import { PluginObject } from 'vue';
import ThemeDirective from './maple-theme-directive';
import ThemePlugin from './maple-theme-plugin';

declare class mapleThemeConfig {
    brightness: 'light' | 'dark';
    themepack: string;
}

const mapleTheme: PluginObject<mapleThemeConfig> = {
    install(Vue, config) {
        const brightness = (config && config!.brightness) || 'light';
        const themepack = (config && config!.themepack) || 'default';

        document.body.classList.add(`mp-${brightness}`);
        document.body.classList.add(`mp-theme-${themepack}`);

        Vue.directive('theme', ThemeDirective);
        Vue.use(ThemePlugin);
    },
};

export default mapleTheme;
