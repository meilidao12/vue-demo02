import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Shot from '@/components/Shot'
import News from '@/components/News'
import Home1 from '@/components/Wsn/Home1'
import Home2 from '@/components/Wsn/Home2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path:'/news',
      name:'news',
      component:News
    },
    {
      path:'/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'home1',
          name:'home1',
          component : Home1
        },
        {
          path:'home2',
          name: 'home2',
          component: Home2
        }
      ]
    },
    {
      path:'/shot',
      name: 'shot',
      component: Shot,
    }
  ]
})
