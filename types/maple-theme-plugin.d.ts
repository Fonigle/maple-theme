import { PluginObject, PluginFunction } from 'vue';

export interface MapleThemePlugin extends PluginObject<never> {
    install: PluginFunction<never>;
}

export type MapleThemeBrightnessOptions = 'light' | 'dark' | 'toggle';
