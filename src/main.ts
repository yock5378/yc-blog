import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/plugins/fontawsome';
import '@/style/index.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
