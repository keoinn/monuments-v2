<script setup>
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import { fetchContact } from '@/api/content'
import { useAsync } from '@/composables/useAsync'

const contact = useAsync(fetchContact)
</script>

<template>
  <div>
    <PageHero title="聯絡我們" />
    <section class="section">
      <div class="wrap" style="max-width: 760px;">
        <SectionHead title="聯絡方式" />
        <p v-if="contact.loading.value" class="status">載入中</p>
        <div v-else class="stack">
          <article v-for="item in contact.data.value || []" :key="item.title" class="gold-card" style="text-align: left; margin-bottom: 18px;">
            <h3>{{ item.title }}</h3>
            <p class="gold">{{ item.label }}</p>
            <p><a :href="item.href">{{ item.value }}</a></p>
            <p v-if="item.note" class="muted" style="margin-top: 8px;">{{ item.note }}</p>
            <p v-if="item.action" style="margin-top: 16px;">
              <a class="btn-fill" :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.action }}</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
