import { createRouter, createWebHistory } from 'vue-router'
import FunctionalTestsView from '@/views/FunctionalTestsView.vue'
import PullsView from '@/views/PullsView.vue'
import ListPulls from '@/views/ListPulls.vue'
import SourceCodeView from '@/views/SourceCodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/functional'
      //name: 'home',
      //component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/functional',
      name: 'functional tests',
      component: FunctionalTestsView
    },
    {
      path: '/pulls/list',
      name: 'Pull requests',
      component: ListPulls
    },
    {
      path: '/pulls/:pr',
      name: 'pulls',
      component: PullsView,
      props: true
    },
    {
      path: '/source',
      name: 'source',
      component: SourceCodeView,
    }
  ]
})

export default router
