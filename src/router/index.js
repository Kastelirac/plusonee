import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../views/Home.vue'
import ponudi from '../components/ponudi.vue'


Vue.use(VueRouter)


export default new VueRouter({
  routes :
  [
    {
      path:'/pronadi',
      name:'pronadi',
      component: pronadi
    },
    {
      path:'/ponudi',
      name:'ponudi',
      component: ponudi
    },
    {
      path:'/registrirajse',
      name:'registrirajse',
      component: registrirajse
    },
    {
      path:'/prijava',
      name:'prijava',
      component: prijava
    }
  ]
})


