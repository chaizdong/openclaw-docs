<script setup>
import { NCard, NButton, NSlider } from 'naive-ui'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const isPlaying = ref(false)
const currentStep = ref(0)
const progress = ref(0)

const steps = [
  {
    name: 'URL 输入',
    icon: '📥',
    desc: '用户提交起始 URL 或 URL 列表',
    detail: 'URL 经过验证后被添加到待爬取队列中'
  },
  {
    name: '调度器处理',
    icon: '📋',
    desc: '调度器从队列中取出 URL 进行调度',
    detail: '进行 URL 去重、优先级排序、域名频率控制'
  },
  {
    name: '反爬处理',
    icon: '🛡️',
    desc: '根据目标网站特性选择反爬策略',
    detail: 'User-Agent 轮换、Cookie 管理、代理选择、JS 渲染准备'
  },
  {
    name: '发送请求',
    icon: '📡',
    desc: '下载器向目标服务器发送 HTTP 请求',
    detail: '支持 GET/POST 等多种请求方式，处理重定向和响应'
  },
  {
    name: '接收响应',
    icon: '📨',
    desc: '接收服务器返回的响应数据',
    detail: 'HTML 内容、状态码、响应头等信息'
  },
  {
    name: '解析数据',
    icon: '🔍',
    desc: '解析器从 HTML 中提取目标数据',
    detail: '使用 CSS 选择器、XPath、正则等方式提取结构化数据'
  },
  {
    name: '提取新链接',
    icon: '🔗',
    desc: '从页面中提取新的 URL 链接',
    detail: '提取的链接经过过滤后重新加入调度队列'
  },
  {
    name: '存储数据',
    icon: '💾',
    desc: '将提取的数据持久化存储',
    detail: '支持数据库、文件等多种存储方式，进行数据去重和清洗'
  }
]

const runAnimation = () => {
  if (isPlaying.value) return

  isPlaying.value = true
  currentStep.value = 0

  const timeline = gsap.timeline({
    onComplete: () => {
      isPlaying.value = false
    },
    onUpdate: () => {
      progress.value = timeline.progress() * 100
    }
  })

  steps.forEach((_, index) => {
    timeline.to({}, {
      duration: 1.5,
      onUpdate: () => {
        currentStep.value = index
      }
    })
  })
}

const resetAnimation = () => {
  isPlaying.value = false
  currentStep.value = 0
  progress.value = 0
}

const handleSliderChange = (value) => {
  currentStep.value = Math.floor((value / 100) * steps.length)
}
</script>

<template>
  <div class="flow">
    <n-card title="数据流程演示">
      <template #header-extra>
        <n-button @click="runAnimation" :disabled="isPlaying">
          播放动画
        </n-button>
        <n-button @click="resetAnimation" style="margin-left: 10px">
          重置
        </n-button>
      </template>

      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>

      <div class="flow-container">
        <div
          v-for="(step, index) in steps"
          :key="step.name"
          class="flow-step"
          :class="{
            active: index === currentStep,
            completed: index < currentStep
          }"
        >
          <div class="step-icon">{{ step.icon }}</div>
          <div class="step-name">{{ step.name }}</div>
          <div class="step-desc">{{ step.desc }}</div>
        </div>

        <div class="flow-arrow" v-for="i in steps.length - 1" :key="i">▼</div>
      </div>

      <div class="step-detail">
        <h3>{{ steps[currentStep]?.name }}</h3>
        <p>{{ steps[currentStep]?.detail }}</p>
      </div>

      <div class="manual-control">
        <label>手动控制进度：</label>
        <n-slider
          v-model:value="progress"
          :min="0"
          :max="100"
          :step="100 / steps.length"
          @update:value="handleSliderChange"
        />
      </div>
    </n-card>

    <!-- 完整流程概览 -->
    <n-card title="完整数据流程图" class="overview-card">
      <div class="full-flow">
        <pre>
┌───────────────┐
│   URL 输入    │  用户提供起始 URL 或 URL 列表
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  调度器处理   │  URL 去重、优先级排序、频率控制
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  反爬处理     │  User-Agent、Cookie、代理、JS 渲染
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  发送请求     │  HTTP 请求、处理重定向
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  接收响应     │  获取 HTML 内容
└───────┬───────┘
        │
        ▼
┌───────────────┐     ┌───────────────┐
│  解析数据     │────▶│ 提取新链接    │  新 URL 返回调度队列
└───────┬───────┘     └───────────────┘
        │
        ▼
┌───────────────┐
│  存储数据     │  持久化存储到数据库/文件
└───────────────┘
        </pre>
      </div>
    </n-card>
  </div>
</template>

<style scoped>
.flow {
  max-width: 1000px;
  margin: 0 auto;
}

.progress-bar {
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 30px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #18a058, #36ad93);
  transition: width 0.3s;
}

.flow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: #f5f5f5;
  border-radius: 8px;
  width: 100%;
  opacity: 0.5;
  transition: all 0.3s;
}

.flow-step.active {
  opacity: 1;
  background: #e8f5e9;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(24, 160, 88, 0.2);
}

.flow-step.completed {
  opacity: 0.8;
  background: #c8e6c9;
}

.flow-arrow {
  font-size: 20px;
  color: #18a058;
}

.step-icon {
  font-size: 2rem;
  width: 50px;
  text-align: center;
}

.step-name {
  font-weight: bold;
  min-width: 120px;
}

.step-desc {
  flex: 1;
  color: #666;
}

.step-detail {
  margin-top: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 4px solid #18a058;
}

.step-detail h3 {
  margin-bottom: 10px;
  color: #18a058;
}

.manual-control {
  margin-top: 20px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
}

.manual-control label {
  display: block;
  margin-bottom: 10px;
}

.overview-card {
  margin-top: 20px;
}

.full-flow {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  overflow-x: auto;
}

.full-flow pre {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
  line-height: 2;
  margin: 0;
  color: #333;
}
</style>
