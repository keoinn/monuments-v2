import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HistoryView from '@/views/HistoryView.vue'
import OrganizationView from '@/views/OrganizationView.vue'
import DirectorsView from '@/views/DirectorsView.vue'
import AffairsView from '@/views/AffairsView.vue'
import NewsView from '@/views/NewsView.vue'
import NewsDetailView from '@/views/NewsDetailView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/history', name: 'history', component: HistoryView },
    { path: '/organization', name: 'organization', component: OrganizationView },
    { path: '/directors', name: 'directors', component: DirectorsView },
    { path: '/public-affairs', name: 'affairs', component: AffairsView },
    { path: '/announcements', name: 'news', component: NewsView },
    { path: '/announcements/:id', name: 'news-detail', component: NewsDetailView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

export default router
