<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
})
</script>

<template>
  <section class="page-hero" :class="{ 'is-single': !eyebrow }">
    <template v-if="eyebrow">
      <p class="eyebrow">{{ eyebrow }}</p>
      <div class="ornament" />
    </template>
    <h1>{{ title }}</h1>
    <div v-if="!eyebrow" class="ornament" />
  </section>
</template>
