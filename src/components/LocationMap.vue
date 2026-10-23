<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
})

const frame = ref(null)
const showGoogle = ref(false)
let timer = 0

function googleReady() {
  const el = frame.value
  if (!el) return false
  try {
    return el.contentWindow.location.href !== 'about:blank'
  } catch {
    return true
  }
}

onMounted(() => {
  const started = Date.now()
  timer = window.setInterval(() => {
    if (googleReady() || Date.now() - started > 4000) {
      showGoogle.value = googleReady()
      window.clearInterval(timer)
    }
  }, 400)
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
})

const zoom = 16
const layout = computed(() => {
  const n = 2 ** zoom
  const xFloat = ((props.lon + 180) / 360) * n
  const latRad = (props.lat * Math.PI) / 180
  const yFloat = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n
  const x0 = Math.floor(xFloat) - 2
  const y0 = Math.floor(yFloat) - 1
  const tiles = []
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 5; col += 1) {
      const x = x0 + col
      const y = y0 + row
      tiles.push({
        src: `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`,
        style: { left: `${col * 256}px`, top: `${row * 256}px` },
      })
    }
  }
  return {
    tiles,
    style: {
      left: `calc(50% - ${(xFloat - x0) * 256}px)`,
      top: `calc(50% - ${(yFloat - y0) * 256}px)`,
    },
  }
})
</script>

<template>
  <div class="contact-map">
    <div v-show="!showGoogle" class="contact-map-canvas">
      <div class="contact-map-tiles" :style="layout.style">
        <img v-for="tile in layout.tiles" :key="tile.src" :src="tile.src" alt="" :style="tile.style" />
      </div>
      <span class="contact-pin" aria-hidden="true" />
      <a
        class="contact-map-credit"
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
      >© OpenStreetMap</a>
    </div>
    <iframe
      ref="frame"
      class="contact-map-frame"
      :class="{ 'is-hidden': !showGoogle }"
      :src="src"
      title="萬選居 Google 地圖"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>
