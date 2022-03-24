import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/campaigns/_blank/App.vue'
import '@/assets/scss/main.scss';

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
