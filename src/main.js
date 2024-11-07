import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import BootstrapVue 3 CSS
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import BootstrapVue 3 and IconsPlugin
import { BootstrapVue3, IconsPlugin } from 'bootstrap-vue-3';

// Create the Vue app and use BootstrapVue 3 and IconsPlugin
const app = createApp(App);
app.use(BootstrapVue3);
app.use(IconsPlugin);

// Mount the app
app.mount('#app');
