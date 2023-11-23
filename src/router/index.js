import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/ExerciseOne.vue'

const routes = [
  {
    path: '/',
    name: 'ExcerciseOne',
    component: HomeView
  },
  {
    path: '/exercise-two',
    name: 'ExerciseTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExerciseTwo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
