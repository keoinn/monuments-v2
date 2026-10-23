<script setup>
import FacebookIcon from '@/components/FacebookIcon.vue'
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
        <p>豐原翁社的張氏客家宅院，2004 年登錄為臺中市歷史建築。</p>
      </div>
      <div>
        <h2>網站導覽</h2>
        <RouterLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
      </div>
      <div>
        <h2>聯絡資訊</h2>
        <template v-if="data">
          <p v-for="item in data" :key="item.title">
            <a
              :class="{ 'with-icon': item.icon === 'facebook' }"
              :href="item.href"
              :target="item.icon === 'facebook' ? '_blank' : undefined"
              :rel="item.icon === 'facebook' ? 'noopener noreferrer' : undefined"
            >
              <FacebookIcon v-if="item.icon === 'facebook'" />
              {{ item.value }}
            </a>
          </p>
        </template>
      </div>
    </div>
    <p class="legal">© {{ new Date().getFullYear() }} 青錢萬選 · 萬選居</p>
  </footer>
</template>
