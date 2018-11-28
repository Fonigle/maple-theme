import Vue from 'vue';
import MapleTheme from '../src/main';
import './styles.scss';

Vue.use(MapleTheme, {
    brightness: 'dark',
    color: 'deep-purple',
});

import App from './app.vue';

const vr = new Vue({
    el: '#app',
    render: h => h(App),
});
