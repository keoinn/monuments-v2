<script setup>
import { ref } from 'vue'

const open = ref(false)

function close() {
  open.value = false
}
</script>

<template>
  <header class="site-header">
    <a class="skip" href="#main">跳到主要內容</a>
    <div class="bar">
      <RouterLink class="logo" to="/" @click="close">萬選居</RouterLink>
      <button class="menu-btn" type="button" :aria-expanded="open" @click="open = !open">
        {{ open ? '關閉' : '選單' }}
      </button>
      <nav class="nav" :class="{ open }">
        <div class="drop">
          <RouterLink to="/history" @click="close">關於萬選居</RouterLink>
          <div class="drop-panel">
            <RouterLink to="/history" @click="close">歷史沿革</RouterLink>
            <RouterLink to="/organization" @click="close">組織架構</RouterLink>
          </div>
        </div>
        <RouterLink to="/directors" @click="close">委員會</RouterLink>
        <RouterLink to="/public-affairs" @click="close">公務資訊</RouterLink>
        <RouterLink to="/announcements" @click="close">最新公告</RouterLink>
        <RouterLink class="cta" to="/contact" @click="close">聯絡我們</RouterLink>
      </nav>
    </div>
  </header>
</template>
