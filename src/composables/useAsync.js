import { onMounted, ref } from 'vue'

export function useAsync(loader) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref('')

  async function reload() {
    loading.value = true
    error.value = ''
    try {
      data.value = await loader()
    } catch (err) {
      error.value = err?.message || '載入資料時發生錯誤'
    } finally {
      loading.value = false
    }
  }

  onMounted(reload)

  return { data, loading, error, reload }
}
