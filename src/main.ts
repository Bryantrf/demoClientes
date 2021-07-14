import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueSweetalert2 from "vue-sweetalert2";
import Multiselect from 'vue-multiselect'



import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {

  faPlus,
  faEdit,
  faUser,
  faSave,

} from "@fortawesome/free-solid-svg-icons";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('multiselect', Multiselect)

Vue.use(VueSweetalert2);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;



library.add(
  faPlus,
  faEdit, 
  faUser,
  faSave,
);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
