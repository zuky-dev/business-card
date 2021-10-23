import { createApp } from 'vue';

import App from '../vue/App.vue';
import router from './router';
//import store from './store';
//import cookie from './cookie';

createApp(App)
    .use(router)
//    .use(store)
//    .use(cookie)
    .mount('#app');