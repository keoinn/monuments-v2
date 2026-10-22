<script setup>
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import { fetchAffairs } from '@/api/content'
import { useAsync } from '@/composables/useAsync'

const affairs = useAsync(fetchAffairs)
</script>

<template>
  <div>
    <PageHero title="公務資訊" />
    <section class="section">
      <div class="wrap">
        <SectionHead title="文件類別" />
        <p v-if="affairs.loading.value" class="status">載入中</p>
        <div v-else-if="affairs.data.value" class="card-grid">
          <article v-for="item in affairs.data.value.categories" :key="item.title" class="gold-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <p class="muted" style="margin-top: 12px;">{{ item.items.join('、') }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="wrap narrow">
        <SectionHead title="文件清單" />
        <ul v-if="affairs.data.value" class="rule-list">
          <li v-for="doc in affairs.data.value.documents" :key="doc.title">
            <div>
              <strong>{{ doc.title }}</strong>
              <p class="muted">{{ doc.description }} · {{ doc.author }} · {{ doc.type }}</p>
            </div>
            <span class="gold">{{ doc.date }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
