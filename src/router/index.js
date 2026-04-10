import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/architecture',
    name: 'Architecture',
    component: () => import('../views/Architecture.vue'),
    meta: { title: '系统架构' }
  },
  {
    path: '/gateway',
    name: 'Gateway',
    component: () => import('../views/Gateway.vue'),
    meta: { title: 'Gateway 网关' }
  },
  {
    path: '/channels',
    name: 'Channels',
    component: () => import('../views/Channels.vue'),
    meta: { title: '频道系统' }
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import('../views/Plugins.vue'),
    meta: { title: '插件与技能' }
  },
  {
    path: '/memory',
    name: 'Memory',
    component: () => import('../views/Memory.vue'),
    meta: { title: '记忆系统' }
  },
  {
    path: '/agent',
    name: 'Agent',
    component: () => import('../views/Agent.vue'),
    meta: { title: 'Agent 智能体' }
  },
  {
    path: '/security',
    name: 'Security',
    component: () => import('../views/Security.vue'),
    meta: { title: '安全模型' }
  },
  {
    path: '/deploy',
    name: 'Deploy',
    component: () => import('../views/Deploy.vue'),
    meta: { title: '部署指南' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
