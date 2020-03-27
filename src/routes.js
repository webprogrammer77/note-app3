import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//pages
import Home from '@/pages/Home'
import NoteApp from '@/pages/NoteApp'
import NotePage from '@/pages/NotePage'
import Notfound from '@/pages/404'

//routing
export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/noteApp',
      name: 'noteApp',
      component: NoteApp
    },
    {
      path: '/note/:id',
      name: 'notePage',
      component: NotePage
    },
    {
      path: '*',
      name: 'notFound',
      component: Notfound
    },
  ]

})
