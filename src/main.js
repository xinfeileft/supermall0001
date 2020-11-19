import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

//commonjs导入
const { name, age, height } = require('./common/utils')
//es6导入
import { sum } from './common/const'

   console.log(name + " " + age + " " + height)

 
   const total = sum(5, 20)
   console.log(total)  
