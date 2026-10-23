<script setup>
import FacebookIcon from '@/components/FacebookIcon.vue'
import LocationMap from '@/components/LocationMap.vue'
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
        <article v-else class="gold-card contact-card">
          <div v-for="item in contact.data.value || []" :key="item.title" class="contact-block">
            <h3>{{ item.title }}</h3>
            <p v-if="item.label" class="gold">{{ item.label }}</p>
            <p v-if="item.icon === 'facebook'">
              <a class="with-icon" :href="item.href" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
                <span>{{ item.value }}</span>
              </a>
            </p>
            <p v-else-if="item.value"><a :href="item.href">{{ item.value }}</a></p>
            <LocationMap v-if="item.map" :src="item.map" :lat="item.lat" :lon="item.lon" />
            <p v-if="item.note" class="muted" style="margin-top: 8px;">{{ item.note }}</p>
            <p v-if="item.action" style="margin-top: 16px;">
              <a class="btn-fill" :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.action }}</a>
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
