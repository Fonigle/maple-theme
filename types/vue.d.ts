import Vue from 'vue';
import { MapleThemeBrightnessOptions } from './maple-theme-plugin';

declare module 'vue/types/vue' {
    interface Vue {
        $theme: {
            brightness(brigthness: MapleThemeBrightnessOptions): void;
            themepack(themepack: string): void;
        };
    }
}
