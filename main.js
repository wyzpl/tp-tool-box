
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'

import layout from './components/layout.vue';


export function createApp() {
  const app = createSSRApp(App)
  /* 全局根组件 */
  app.component('layout', layout)
  return {
    app
  }
}
// #endif