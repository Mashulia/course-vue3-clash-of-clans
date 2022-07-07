import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import NotFound from './pages/404-page'

const routerHistory = createWebHashHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: HomePage,
      name: 'home'
    },
    {
      path: '/about',
      component: AboutPage,
      name: 'about'
    },
    {
      path: '/:CatchAll(.*)',
      component: NotFound,
      name: '404'
    }
  ]
})

export default routers;
