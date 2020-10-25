import Vue from "vue";
import {
  BootstrapVue,
  BootstrapVueIcons
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader

import axios from "axios";
import VueAxios from "vue-axios";

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


import VueScrollReveal from 'vue-scroll-reveal';


import {
  library,
  dom
} from '@fortawesome/fontawesome-svg-core'
import {
  fas
} from '@fortawesome/free-solid-svg-icons'
import {
  fab
} from '@fortawesome/free-brands-svg-icons'

import {
  far
} from '@fortawesome/free-regular-svg-icons'


dom.watch()

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(fas, fab, far)


Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.use(VueSidebarMenu)
Vue.use(VueScrollReveal, {
  duration: 1000,
  distance: '100px',
  delay: 200

});

Vue.use(VueAxios, axios);

Vue.use(VueLayers);

import App from "@/App.vue";
import store from "@/store";
import router from "@/router";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");