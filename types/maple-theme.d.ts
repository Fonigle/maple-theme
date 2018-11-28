import Vue, { PluginObject, PluginFunction } from 'vue';

export declare interface MapleThemeOptions {
    brightness?: 'light' | 'dark';
    themepack?: string;
}

export declare class MapleTheme {
    static install: PluginFunction<MapleThemeOptions>;
}
