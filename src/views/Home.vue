<script setup>
import { NCard, NGrid, NGridItem, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

const features = [
  { icon: '🏠', title: '完全自托管', desc: '运行在你自己的设备上，数据完全可控' },
  { icon: '💬', title: '20+ 聊天平台', desc: 'WhatsApp、Telegram、Discord、Slack、飞书等' },
  { icon: '🤖', title: '多 AI 模型', desc: 'Claude、GPT、Gemini 等主流模型支持' },
  { icon: '🧩', title: '插件化架构', desc: '76+ 插件，功能无限扩展' },
  { icon: '⚡', title: '50+ 技能', desc: '轻量级技能系统，快速添加新能力' },
  { icon: '🧠', title: '记忆系统', desc: '向量嵌入 + 混合搜索，记住每次对话' }
]

const platforms = [
  'WhatsApp', 'Telegram', 'Discord', 'Slack', 'Signal',
  'iMessage', 'Google Chat', 'Matrix', 'Teams', 'IRC',
  '飞书', 'LINE'
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>🦞 OpenClaw</h1>
        <p class="subtitle">自托管个人 AI 助手平台</p>
        <p class="description">
          OpenClaw（龙虾）是一个运行在你自己设备上的 AI 管家，
          它能通过 WhatsApp、Telegram、Discord 等你日常使用的聊天软件跟你对话。
          完全自托管，数据在你自己的设备上。
        </p>
        <div class="hero-actions">
          <n-button size="large" type="primary" @click="router.push('/architecture')">
            了解架构
          </n-button>
          <n-button size="large" @click="router.push('/deploy')">
            快速开始
          </n-button>
        </div>
      </div>
    </section>

    <section class="features">
      <h2>核心特性</h2>
      <n-grid :cols="3" :x-gap="20" :y-gap="20">
        <n-grid-item v-for="feature in features" :key="feature.title">
          <n-card class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </n-card>
        </n-grid-item>
      </n-grid>
    </section>

    <section class="platforms">
      <h2>支持的聊天平台</h2>
      <p class="section-desc">通过已有的聊天工具与 AI 交互，不需要新装 App</p>
      <div class="platform-grid">
        <div class="platform-tag" v-for="platform in platforms" :key="platform">
          {{ platform }}
        </div>
      </div>
    </section>

    <section class="flow-section">
      <h2>消息处理流程</h2>
      <div class="flow-steps">
        <div class="flow-step" v-for="step in 5" :key="step">
          <div class="step-number">{{ step }}</div>
          <div class="step-title">
            <span v-if="step === 1">频道接收</span>
            <span v-else-if="step === 2">Gateway 路由</span>
            <span v-else-if="step === 3">加载上下文</span>
            <span v-else-if="step === 4">AI 处理</span>
            <span v-else>发送回复</span>
          </div>
          <div class="step-desc">
            <span v-if="step === 1">用户在 WhatsApp 等平台发送消息</span>
            <span v-else-if="step === 2">解析发送者、频道、会话，生成会话键</span>
            <span v-else-if="step === 3">注入 AGENTS.md、SOUL.md、记忆等</span>
            <span v-else-if="step === 4">调用 AI 模型，可能调用工具</span>
            <span v-else>将回复转为平台特定格式发送</span>
          </div>
        </div>
      </div>
    </section>

    <n-card title="技术栈" class="tech-card">
      <n-grid :cols="4" :x-gap="20" :y-gap="20">
        <div class="tech-item">
          <strong>主语言</strong>
          <span>TypeScript / Node.js (>=22)</span>
        </div>
        <div class="tech-item">
          <strong>包管理</strong>
          <span>pnpm (monorepo)</span>
        </div>
        <div class="tech-item">
          <strong>通信协议</strong>
          <span>WebSocket</span>
        </div>
        <div class="tech-item">
          <strong>数据存储</strong>
          <span>SQLite + sqlite-vec</span>
        </div>
        <div class="tech-item">
          <strong>验证</strong>
          <span>TypeBox (JSON Schema)</span>
        </div>
        <div class="tech-item">
          <strong>沙箱</strong>
          <span>Docker (可选)</span>
        </div>
        <div class="tech-item">
          <strong>测试</strong>
          <span>Vitest</span>
        </div>
        <div class="tech-item">
          <strong>协议</strong>
          <span>MIT 开源</span>
        </div>
      </n-grid>
    </n-card>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #18a058 0%, #36ad93 100%);
  border-radius: 16px;
  margin-bottom: 40px;
  color: white;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.3rem;
  margin-bottom: 20px;
  opacity: 0.95;
}

.description {
  font-size: 1rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 30px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.features h2,
.platforms h2,
.flow-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.8rem;
  color: #18a058;
}

.features {
  margin-bottom: 60px;
}

.feature-card {
  height: 100%;
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #18a058;
}

.feature-card p {
  color: #666;
  font-size: 0.9rem;
}

.platforms {
  margin-bottom: 60px;
}

.section-desc {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.platform-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
}

.platform-tag {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  color: #2e7d32;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
}

.flow-section {
  margin-bottom: 60px;
}

.flow-steps {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 15px;
  padding: 30px 0;
  background: #f5f5f5;
  border-radius: 12px;
  flex-wrap: wrap;
}

.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  background: white;
  border-radius: 12px;
  min-width: 140px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  flex: 1;
  max-width: 180px;
}

.step-number {
  width: 32px;
  height: 32px;
  background: #18a058;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 10px;
  flex-shrink: 0;
}

.step-title {
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  text-align: center;
  font-size: 0.95rem;
}

.step-desc {
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  line-height: 1.5;
}

.tech-card {
  margin-top: 40px;
}

.tech-item {
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
}

.tech-item strong {
  display: block;
  color: #18a058;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.tech-item span {
  color: #666;
  font-size: 0.85rem;
}
</style>
