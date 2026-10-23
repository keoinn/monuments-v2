<script setup>
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import { fetchDepartments, fetchOrgChart } from '@/api/content'
import { useAsync } from '@/composables/useAsync'

const chart = useAsync(fetchOrgChart)
const departments = useAsync(fetchDepartments)
</script>

<template>
  <div>
    <PageHero title="組織架構" />
    <section class="section">
      <div class="wrap">
        <SectionHead title="領導" />
        <div v-if="chart.data.value" class="card-grid two" style="max-width: 720px; margin: 0 auto 48px;">
          <article v-for="leader in chart.data.value.leaders" :key="leader.name" class="gold-card">
            <h3>{{ leader.name }}</h3>
            <p>{{ leader.title }}</p>
          </article>
        </div>
        <SectionHead title="部門" />
        <p v-if="departments.loading.value" class="status">載入中</p>
        <div v-else class="card-grid">
          <article v-for="dept in departments.data.value || []" :key="dept.name" class="gold-card">
            <h3>{{ dept.name }}</h3>
            <p>{{ dept.manager }}</p>
            <p>{{ dept.description }}</p>
            <p class="muted" style="margin-top: 12px;">{{ dept.responsibilities.join('、') }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
