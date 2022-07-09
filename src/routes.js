import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import NotFound from './pages/not-found'
import Item from './pages/item-alias'

const routerHistory = createWebHashHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item,
    },
    {
      path: '/:CatchAll(.*)',
      name: 'notFound',
      component: NotFound,
    }
  ]
})

export default routers;
