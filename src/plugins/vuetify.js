import { createVuetify } from 'vuetify'
import { VCarousel } from 'vuetify/components/VCarousel'
import { VWindowItem } from 'vuetify/components/VWindow'
import 'vuetify/styles'

export default createVuetify({
  components: {
    VCarousel,
    VWindowItem,
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#1A1A1A',
          surface: '#1A1A1A',
          primary: '#D4A843',
        },
      },
    },
  },
})
