import Vue from 'vue'
import Router from 'vue-router'
import Mymusiclist from '@/components/mymusiclist/Mymusiclist'
import Yun from '@/components/yun/Yun'
import Movie from '@/components/movielist/Movielist'
import Movielise from '@/components/movielist/Moviedetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mymusiclist/Mymusiclist',
      name: 'Mymusiclist',
      component: Mymusiclist
    },
    {
      path:'/',
      redirect:'/mymusiclist/Mymusiclist'
    },
    {
      path: '/yun/Yun',
      name: 'Yun',
      component: Yun
    },
    {
      path: '/movielist/Movielist',
      name: 'Movie',
      component: Movie
    },
    {
      path:'/movielist/Moviedetails',
      name: 'Movielise',
      component: Movielise
    }
    // {
    //   path:'/common/Header',
    //   component:CommonHeader
    // }
  ]
})
