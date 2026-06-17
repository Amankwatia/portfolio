// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Home | Bright Osei Amankwatia' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About | Bright Osei Amankwatia' },
  },
  {
    path: '/teaching',
    name: 'Teaching',
    component: () => import('../views/TeachingView.vue'),
    meta: { title: 'Teaching & Leadership | Bright Osei Amankwatia' },
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/ResearchView.vue'),
    meta: { title: 'Research & Publications | Bright Osei Amankwatia' },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { title: 'Projects & Portfolio | Bright Osei Amankwatia' },
  },
  {
    path: '/software-solutions',
    name: 'SoftwareSolutions',
    component: () => import('../views/SoftwareSolutionsView.vue'),
    meta: { title: 'Software Solutions | Bright Osei Amankwatia' },
  },
  {
    path: '/programs-events',
    name: 'ProgramsEvents',
    component: () => import('../views/ProgramsEventsView.vue'),
    meta: { title: 'Programs & Events | Bright Osei Amankwatia' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact | Bright Osei Amankwatia' },
  },
]

const router = createRouter({
  // Using hash history for GitHub Pages compatibility without server config
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

// Update page title on route change
router.afterEach((to) => {
  document.title = to.meta.title || 'Bright Osei Amankwatia'
})

export default router
