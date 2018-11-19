import { PluginObject } from 'vue';
import Theme from './maple-theme';

const mapleTheme: PluginObject<any> = {
    install(Vue) {
        Vue.directive('theme', Theme);
    }
};

export default mapleTheme;
