import './maple-theme.scss';

import { PluginObject } from 'vue';
import MapleThemeDirective from './maple-theme-directive';
import MapleThemePlugin from './maple-theme-plugin';

class MapleThemeOptions {
    brightness!: 'light' | 'dark';
    themepack!: string;
}

const MapleTheme: PluginObject<MapleThemeOptions> = {
    install(Vue, config) {
        const brightness = (config && config!.brightness) || 'light';
        const themepack = (config && config!.themepack) || 'default';

        document.body.classList.add(`mp-${brightness}`);
        document.body.classList.add(`mp-theme-${themepack}`);

        Vue.directive('theme', MapleThemeDirective);
        Vue.use(MapleThemePlugin);
    },
};

export default MapleTheme;
