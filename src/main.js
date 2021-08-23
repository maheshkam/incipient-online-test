import Vue from 'vue'
import App from './App.vue'
import DataTable from 'v-data-table'

Vue.config.productionTip = false
Vue.use(DataTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
