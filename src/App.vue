<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script>
import { defineComponent } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: "App",
  components: {
  },
  setup() {
    return {
      // zIndex: 3000,
      // size: 'small',
      // locale: zhCn,
    }
  },
})
</script>
<style>
html body {
  margin: 0px;
  padding: 0px;
}
</style>