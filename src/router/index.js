import { createRouter, createWebHistory } from 'vue-router'
import LandingApp from '../views/LandingApp.vue'
import JobTracker from '../views/JobTracker.vue'

const routes = [
    { path: '/', name: 'Landing', component: LandingApp },
    { path: '/app', name: 'JobTracker', component: JobTracker }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
