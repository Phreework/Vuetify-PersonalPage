import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import config from './config'
import heading from "./components/Heading.vue";
Vue.use(config)
Vue.config.productionTip = false
Vue.component("heading",heading)
//全局注册自定义指令
Vue.directive('exchangeHtml',{      
  bind: function(el,foo){
    console.log(el,foo)
    el.innerHTML += foo.value
}
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
