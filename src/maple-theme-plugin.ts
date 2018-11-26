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
            themepack: (themepack: string) => void;
        };
    }
}

const MapleThemePluigin: PluginObject<any> = {
    install(Vue) {
        Vue.prototype.$theme = {
            brightness: (brigthness: 'dark' | 'light' | 'toggle') => {
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
            themepack: (themepack: string) => {
                if (themepack) {
                    const mpThemeColors: string[] = [];
                    document.body.classList.forEach(item => {
                        if (/^mp-theme-/.test(item)) {
                            mpThemeColors.push(item);
                        }
                    });

                    document.body.classList.remove(...mpThemeColors);
                    document.body.classList.add(`mp-theme-${themepack}`);
                }
            },
        };
    },
};

export default MapleThemePluigin;
