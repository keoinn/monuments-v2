<script setup>
import { fetchContact } from '@/api/content'
import { useAsync } from '@/composables/useAsync'

const { data } = useAsync(fetchContact)

const links = [
  { label: '歷史沿革', to: '/history' },
  { label: '組織架構', to: '/organization' },
  { label: '委員會', to: '/directors' },
  { label: '公務資訊', to: '/public-affairs' },
  { label: '最新公告', to: '/announcements' },
  { label: '聯絡我們', to: '/contact' },
]
</script>

<template>
  <footer id="footer" class="site-footer">
    <div class="footer-grid">
      <div>
        <h2>青錢萬選 · 萬選居</h2>
        <p>深入了解這座珍貴古蹟的歷史沿革、組織架構與文化價值。</p>
      </div>
      <div>
        <h2>網站導覽</h2>
        <RouterLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
      </div>
      <div>
        <h2>聯絡資訊</h2>
        <template v-if="data">
          <p v-for="item in data" :key="item.title">
            <a :href="item.href">{{ item.value }}</a>
          </p>
        </template>
      </div>
    </div>
    <p class="legal">© {{ new Date().getFullYear() }} 青錢萬選 · 萬選居</p>
  </footer>
</template>
