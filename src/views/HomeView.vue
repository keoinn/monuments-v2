<script setup>
import { computed, ref } from 'vue'
import heroImage from '@/assets/img/landing-view.webp'
import HallLine from '@/components/HallLine.vue'
import ScrollSeal from '@/components/ScrollSeal.vue'
import SectionHead from '@/components/SectionHead.vue'
import { fetchAnnouncements, fetchHome, fetchMembers, fetchSignificance, fetchTimeline } from '@/api/content'
import { useAsync } from '@/composables/useAsync'

const home = useAsync(fetchHome)
const timeline = useAsync(fetchTimeline)
const significance = useAsync(fetchSignificance)
const members = useAsync(fetchMembers)
const news = useAsync(fetchAnnouncements)

const playing = ref(true)

const memberPreview = computed(() => (members.data.value || []).slice(0, 3))
</script>

<template>
  <div
    class="home-slider-wrap"
    @pointerenter="playing = false"
    @pointerleave="playing = true"
  >
  <v-carousel
    class="home-slider"
    :cycle="playing"
    :interval="10000"
    height="calc(100vh - 72px)"
    hide-delimiters
    hide-delimiter-background
    show-arrows
  >
    <template #prev="{ props }">
      <button class="slide-nav" type="button" aria-label="上一頁" @click="props.onClick">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 5.5 L8 12 l6.5 6.5" fill="none" stroke="currentColor" stroke-width="1.4" />
        </svg>
      </button>
    </template>
    <template #next="{ props }">
      <button class="slide-nav" type="button" aria-label="下一頁" @click="props.onClick">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9.5 5.5 L16 12 l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="1.4" />
        </svg>
      </button>
    </template>

    <v-window-item>
    <section class="hero" aria-label="萬選居">
      <img class="hero-photo" :src="heroImage" alt="" />
      <div class="hero-shade" />
      <div v-if="home.loading.value" class="hero-copy status">載入中</div>
      <div v-else-if="home.error.value" class="hero-copy status">
        {{ home.error.value }}
        <button class="btn-line" type="button" @click="home.reload">重試</button>
      </div>
      <div v-else class="hero-copy">
        <h1>{{ home.data.value.name }}</h1>
        <p class="motto">{{ home.data.value.title }}</p>
        <p>{{ home.data.value.lead }}</p>
      </div>
    </section>
    </v-window-item>

    <v-window-item>
    <section class="section">
      <div class="wrap">
        <SectionHead title="關於萬選居" />
        <div v-if="home.data.value" class="about-grid">
          <div class="seal"><ScrollSeal /></div>
          <div>
            <p>{{ home.data.value.aboutBody }}</p>
            <p class="quote">{{ home.data.value.aboutQuote }}</p>
          </div>
        </div>
        <div v-if="home.data.value" class="stats">
          <div v-for="item in home.data.value.statistics" :key="item.label">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>
    </v-window-item>

    <v-window-item>
    <section class="section alt">
      <div class="wrap">
        <SectionHead title="認識萬選居" />
        <div v-if="home.data.value" class="welfare">
          <div class="welfare-col">
            <RouterLink
              v-for="feature in home.data.value.features.slice(0, 2)"
              :key="feature.title"
              class="gold-card"
              :to="feature.to"
            >
              <div class="mark">{{ feature.mark }}</div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </RouterLink>
          </div>
          <div class="welfare-col shift">
            <RouterLink
              v-for="feature in home.data.value.features.slice(2)"
              :key="feature.title"
              class="gold-card"
              :to="feature.to"
            >
              <div class="mark">{{ feature.mark }}</div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </RouterLink>
          </div>
          <div class="gold-card" style="min-height: 280px; display: grid; place-items: center;">
            <HallLine />
          </div>
        </div>
      </div>
    </section>
    </v-window-item>

    <v-window-item>
    <section class="banner">
      <div class="hero-art"><HallLine /></div>
      <div class="banner-frame">
        <h2>沿革 · 自同治年間</h2>
        <p>張氏客家祖厝，2004 年登錄為歷史建築，2020 年修復完工。</p>
        <RouterLink class="btn-fill" to="/history">了解歷史沿革</RouterLink>
      </div>
    </section>
    </v-window-item>

    <v-window-item>
    <section class="section">
      <div class="wrap">
        <SectionHead title="委員會成員" />
        <p v-if="members.loading.value" class="status">載入中</p>
        <p v-else-if="!memberPreview.length" class="status">等待確認委員名單</p>
        <div v-else class="member-row">
          <article v-for="member in memberPreview" :key="member.name" class="gold-card">
            <h3>{{ member.name }}</h3>
            <div class="mark">{{ member.name.slice(0, 1) }}</div>
            <p>{{ member.title }}。{{ member.description }}</p>
          </article>
        </div>
        <p class="center" style="margin-top: 28px;">
          <RouterLink class="btn-line" to="/directors">查看全部委員</RouterLink>
        </p>
      </div>
    </section>
    </v-window-item>

    <v-window-item>
    <section class="section alt">
      <div class="wrap">
        <SectionHead title="歷史節點" />
        <ul v-if="timeline.data.value" class="rule-list">
          <li v-for="event in timeline.data.value" :key="event.year">
            <div>
              <strong>{{ event.title }}</strong>
              <p class="muted">{{ event.description }}</p>
            </div>
            <span class="gold">{{ event.year }}</span>
          </li>
        </ul>
      </div>
    </section>
    </v-window-item>

    <v-window-item>
    <section class="section">
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
    </v-window-item>

    <v-window-item>
    <section class="section">
      <div class="wrap narrow">
        <SectionHead title="最新公告" />
        <p v-if="news.loading.value" class="status">載入中</p>
        <ul v-else-if="news.data.value" class="rule-list">
          <li v-for="item in news.data.value" :key="item.id">
            <RouterLink :to="`/announcements/${item.id}`">{{ item.title }}</RouterLink>
            <span class="gold">{{ item.date }}</span>
          </li>
        </ul>
      </div>
    </section>
    </v-window-item>
  </v-carousel>
  </div>
</template>
