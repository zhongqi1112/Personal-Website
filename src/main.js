import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueGtag from "vue-gtag"

Vue.config.productionTip = false
Vue.component('v-icon', Icon)

Vue.use(VueGtag, {
  config: { id: "UA-117830086-1" }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
