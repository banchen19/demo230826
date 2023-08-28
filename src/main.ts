import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import MainPage from "./components/MainPage.vue";
import Login from "./components/Login.vue";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css';
 
const app = createApp(App);


const vuetify = createVuetify({
  components,
  directives,
  
})

app.use(VueVideoPlayer,{
  lang: 'zh-CN'
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Login,
    },
    {
      path: "/main",
      component: MainPage,
    },
  ],
});


app.use(router);

app.use(vuetify)




app.mount("#app");
