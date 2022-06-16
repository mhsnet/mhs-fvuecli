import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  console.log(key);
  app.component(key, component)
}
app.mount('#app')
