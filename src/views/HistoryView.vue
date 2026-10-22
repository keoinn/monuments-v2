<script setup>
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import { fetchSignificance, fetchTimeline } from '@/api/content'
import { useAsync } from '@/composables/useAsync'

const timeline = useAsync(fetchTimeline)
const significance = useAsync(fetchSignificance)
</script>

<template>
  <div>
    <PageHero title="歷史沿革" />
    <section class="section">
      <div class="wrap narrow">
        <SectionHead title="大事紀" />
        <p v-if="timeline.loading.value" class="status">載入中</p>
        <p v-else-if="timeline.error.value" class="status">{{ timeline.error.value }}</p>
        <article v-for="event in timeline.data.value || []" :key="event.year" class="chapter">
          <p class="eyebrow center">{{ event.year }}</p>
          <div class="ornament" />
          <h2>{{ event.title }}</h2>
          <p>{{ event.description }}</p>
        </article>
      </div>
    </section>
    <section class="section alt">
      <div class="wrap">
        <SectionHead title="歷史意義" />
        <div v-if="significance.data.value" class="card-grid">
          <article v-for="item in significance.data.value" :key="item.title" class="gold-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
