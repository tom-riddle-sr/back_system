import { createApp } from 'vue'
import App from './App.vue'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

//icon
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

//router
import { createRouter, createWebHistory } from 'vue-router';
import login from "./components/login/login.vue"
import register from "./components/login/register.vue"
import front_page1 from "./components/front_page/front_page1.vue"

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
  { path: '/front_page1', component: front_page1 },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});



const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');