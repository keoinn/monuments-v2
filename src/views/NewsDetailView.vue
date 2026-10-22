<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/PageHero.vue'
import { fetchAnnouncement } from '@/api/content'

const route = useRoute()
const item = ref(null)
const loading = ref(true)
const error = ref('')

async function load(id) {
  loading.value = true
  error.value = ''
  item.value = null
  try {
    item.value = await fetchAnnouncement(id)
  } catch (err) {
    error.value = err?.message || '載入失敗'
  } finally {
    loading.value = false
  }
}

watch(() => route.params.id, (id) => load(id), { immediate: true })
</script>

<template>
  <div>
    <PageHero :title="item?.title || '最新公告'" />
    <section class="section">
      <div class="wrap narrow prose">
        <p v-if="loading" class="status">載入中</p>
        <p v-else-if="error" class="status">{{ error }}</p>
        <template v-else-if="item">
          <p class="gold center">{{ item.date }} · {{ item.author }} · {{ item.category }}</p>
          <p>{{ item.fullContent }}</p>
          <p class="center"><RouterLink class="btn-line" to="/announcements">返回公告列表</RouterLink></p>
        </template>
      </div>
    </section>
  </div>
</template>
