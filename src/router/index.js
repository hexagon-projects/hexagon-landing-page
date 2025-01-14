import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '@/views/ServiceView.vue'
import PortolioView from '@/views/PortofolioView.vue'
import AboutUsViewVue from '@/views/AboutUsView.vue'
import CareerView from '@/views/CareerView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsViewVue,
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortolioView,
    },
    {
      path: '/news',
      name: 'news',
      component: HomeView,
    },
    {
      path: '/career',
      name: 'career',
      component: CareerView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
