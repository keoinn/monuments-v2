<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
})
</script>

<template>
  <div class="center" :class="{ 'is-single': !eyebrow }">
    <template v-if="eyebrow">
      <p class="eyebrow">{{ eyebrow }}</p>
      <div class="ornament" />
    </template>
    <h2 class="block-title">{{ title }}</h2>
    <div v-if="!eyebrow" class="ornament" />
  </div>
</template>
