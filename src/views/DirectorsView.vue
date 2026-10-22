<script setup>
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import { fetchBoardStructure, fetchMeetings, fetchMembers } from '@/api/content'
import { useAsync } from '@/composables/useAsync'

const members = useAsync(fetchMembers)
const structure = useAsync(fetchBoardStructure)
const meetings = useAsync(fetchMeetings)
</script>

<template>
  <div>
    <PageHero title="委員會" />
    <section class="section">
      <div class="wrap">
        <SectionHead title="理事會組成" />
        <div v-if="structure.data.value" class="card-grid" style="margin-bottom: 56px;">
          <article v-for="item in structure.data.value" :key="item.title" class="gold-card">
            <h3>{{ item.title }}</h3>
            <p class="gold">{{ item.count }} {{ item.unit }}</p>
            <p>{{ item.description }}</p>
          </article>
        </div>
        <SectionHead title="成員" />
        <p v-if="members.loading.value" class="status">載入中</p>
        <div v-else class="card-grid">
          <article v-for="member in members.data.value || []" :key="member.name" class="gold-card">
            <div class="mark">{{ member.name.slice(0, 1) }}</div>
            <h3>{{ member.name }}</h3>
            <p class="gold">{{ member.title }}</p>
            <p>{{ member.description }}</p>
            <p class="muted" style="margin-top: 8px;">{{ member.education }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="wrap narrow">
        <SectionHead title="理事會期程" />
        <ul v-if="meetings.data.value" class="rule-list">
          <li v-for="meeting in meetings.data.value" :key="meeting.date">
            <div>
              <strong>{{ meeting.title }}</strong>
              <p class="muted">{{ meeting.description }} · {{ meeting.time }} · {{ meeting.location }}</p>
            </div>
            <span class="gold">{{ meeting.date }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
