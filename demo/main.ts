import Vue from 'vue';
import MapleTheme from '../src/main';

Vue.use(MapleTheme);

import App from './app.vue';

const vr = new Vue({
    el: '#app',
    render: h => h(App)
});
