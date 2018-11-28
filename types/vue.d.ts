import Vue from 'vue';
import { MapleThemeBrightnessOptions } from './maple-theme-plugin';

declare module 'vue/types/vue' {
    interface Vue {
        $theme: {
            brightness(brightness: MapleThemeBrightnessOptions): void;
            themepack(themepack: string): void;
        };
    }
}
