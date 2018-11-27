import { VNodeDirective } from 'vue';

export interface MapleThemeDirective extends VNodeDirective {
    name: 'theme';
    value: number | string | undefined;
    arg: 'color' | 'background' | 'border' | 'shadow';
    modifiers: {
        hover: boolean;
        active: boolean;
        dashed: boolean;
        dotted: boolean;
        'not-last': boolean;
        filter: boolean;
    };
}
