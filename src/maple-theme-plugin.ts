import { PluginObject } from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        /**
         * 初始化权限
         *
         * @memberof Vue
         */
        $theme: {
            brigthness: (brigthness: 'dark' | 'light' | 'toggle') => void;
            color: (color: string) => void;
        };
    }
}

const MapleThemePluigin: PluginObject<any> = {
    install(Vue) {
        Vue.prototype.$theme = {
            brigthness: (brigthness: 'dark' | 'light' | 'toggle') => {
                switch (brigthness) {
                    case 'dark': {
                        document.body.classList.replace('mp-light', 'mp-dark');
                        break;
                    }

                    case 'light': {
                        document.body.classList.replace('mp-dark', 'mp-light');
                        break;
                    }

                    case 'toggle': {
                        document.body.classList.contains('mp-light')
                            ? document.body.classList.replace('mp-light', 'mp-dark')
                            : document.body.classList.replace('mp-dark', 'mp-light');
                        break;
                    }

                    default:
                        break;
                }
            },
            color: (color: string) => {
                if (color) {
                    const mpThemeColors: string[] = [];
                    document.body.classList.forEach(item => {
                        if (/^mp-theme-/.test(item)) {
                            mpThemeColors.push(item);
                        }
                    });

                    document.body.classList.remove(...mpThemeColors);
                    document.body.classList.add(`mp-theme-${color}`);
                }
            }
        };
    }
};

export default MapleThemePluigin;
