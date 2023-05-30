import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import router from './core/router';
import App from './App.vue';
// eslint-disable-next-line import/no-unresolved
import 'uno.css';
import './core/assets/main.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(VueQueryPlugin);
