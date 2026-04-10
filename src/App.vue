<script setup>
import { NConfigProvider, NLayout, NLayoutHeader, NLayoutContent, NLayoutSider, NMenu } from 'naive-ui'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()

const menuOptions = [
  { label: '首页', key: 'Home', icon: () => '🏠' },
  { label: '系统架构', key: 'Architecture', icon: () => '🏗️' },
  { label: 'Gateway', key: 'Gateway', icon: () => '🦞' },
  { label: '频道系统', key: 'Channels', icon: () => '📱' },
  { label: '插件与技能', key: 'Plugins', icon: () => '🧩' },
  { label: '记忆系统', key: 'Memory', icon: () => '🧠' },
  { label: 'Agent', key: 'Agent', icon: () => '🤖' },
  { label: '安全模型', key: 'Security', icon: () => '🔒' },
  { label: '部署指南', key: 'Deploy', icon: () => '📦' }
]

const selectedKey = ref(route.name || 'Home')

watch(() => route.name, (newName) => {
  if (newName) selectedKey.value = newName
})

const handleMenuClick = (key) => {
  const routeMap = {
    Home: '/',
    Architecture: '/architecture',
    Gateway: '/gateway',
    Channels: '/channels',
    Plugins: '/plugins',
    Memory: '/memory',
    Agent: '/agent',
    Security: '/security',
    Deploy: '/deploy'
  }
  router.push(routeMap[key])
}
</script>

<template>
  <n-config-provider>
    <n-layout has-sider class="app-layout">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="220"
        class="app-sider"
      >
        <div class="logo">
          <h2>🦞 OpenClaw</h2>
        </div>
        <n-menu
          v-model:value="selectedKey"
          :options="menuOptions"
          mode="vertical"
          @update:value="handleMenuClick"
        />
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered class="app-header">
          <h1>{{ route.meta?.title || 'OpenClaw' }}</h1>
          <a href="https://github.com/openclaw/openclaw" target="_blank" class="github-link">
            GitHub
          </a>
        </n-layout-header>
        <n-layout-content class="app-content">
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
}

.app-sider {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.logo {
  padding: 24px 20px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.logo h2 {
  margin: 0;
  font-size: 1.4rem;
  color: #18a058;
  font-weight: 600;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}

.app-header h1 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.github-link {
  color: #18a058;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #18a058;
  border-radius: 6px;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.github-link:hover {
  background: #18a058;
  color: white;
}

.app-content {
  padding: 24px;
  min-height: calc(100vh - 60px);
  background: #fafafa;
}
</style>
