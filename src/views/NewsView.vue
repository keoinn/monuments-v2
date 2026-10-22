<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import { fetchAnnouncements } from '@/api/content'
import { useAsync } from '@/composables/useAsync'

const news = useAsync(fetchAnnouncements)
const category = ref('全部')

const categories = computed(() => {
  const list = news.data.value || []
  return ['全部', ...new Set(list.map((item) => item.category))]
})

const visible = computed(() => {
  const list = news.data.value || []
  if (category.value === '全部') return list
  return list.filter((item) => item.category === category.value)
})
</script>

<template>
  <div>
    <PageHero title="最新公告" />
    <section class="section">
      <div class="wrap narrow">
        <SectionHead title="消息" />
        <p v-if="news.loading.value" class="status">載入中</p>
        <p v-else-if="news.error.value" class="status">{{ news.error.value }}</p>
        <template v-else>
          <div class="filters">
            <button
              v-for="item in categories"
              :key="item"
              type="button"
              :class="{ active: category === item }"
              @click="category = item"
            >
              {{ item }}
            </button>
          </div>
          <ul class="rule-list">
            <li v-for="item in visible" :key="item.id">
              <RouterLink :to="`/announcements/${item.id}`">
                {{ item.title }}
                <span v-if="item.isImportant" class="gold"> · 重要</span>
              </RouterLink>
              <span class="gold">{{ item.date }}</span>
            </li>
          </ul>
        </template>
      </div>
    </section>
  </div>
</template>
