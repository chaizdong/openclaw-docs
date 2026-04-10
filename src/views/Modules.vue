<script setup>
import { NCard, NTabs, NTabPane, NDescriptions, NDescriptionsItem, NTag } from 'naive-ui'

const modules = [
  {
    name: '核心引擎 (Core Engine)',
    icon: '⚙️',
    description: 'OpenClaw 的大脑，负责整体协调和调度',
    responsibilities: [
      '初始化各个模块',
      '协调整体爬取流程',
      '处理异常和错误',
      '性能监控和优化'
    ],
    tech: ['Python', 'AsyncIO', '事件驱动']
  },
  {
    name: '调度器 (Scheduler)',
    icon: '📋',
    description: '管理 URL 队列，决定爬取顺序和优先级',
    responsibilities: [
      '维护 URL 队列',
      'URL 去重过滤',
      '优先级排序',
      '爬取深度控制',
      '域名访问频率限制'
    ],
    tech: ['优先队列', 'Bloom 过滤器', 'Redis']
  },
  {
    name: '下载器 (Downloader)',
    icon: '📥',
    description: '发送 HTTP 请求，获取网页内容',
    responsibilities: [
      '构建 HTTP 请求',
      '发送网络请求',
      '处理响应',
      '管理连接池',
      '支持代理和 IP 轮换'
    ],
    tech: ['aiohttp', 'httpx', 'requests']
  },
  {
    name: '解析器 (Parser)',
    icon: '🔍',
    description: '从 HTML 中提取结构化数据',
    responsibilities: [
      'HTML DOM 解析',
      'CSS/XPath 选择器',
      '数据提取和清洗',
      '链接提取',
      '结构化数据生成'
    ],
    tech: ['BeautifulSoup', 'lxml', 'parsel', 're']
  },
  {
    name: '存储引擎 (Storage)',
    icon: '💾',
    description: '持久化存储抓取的数据',
    responsibilities: [
      '数据格式化',
      '批量写入优化',
      '数据去重',
      '支持多种后端',
      '数据备份'
    ],
    tech: ['MySQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch']
  },
  {
    name: '反爬模块 (Anti-Crawl)',
    icon: '🛡️',
    description: '突破网站反爬机制',
    responsibilities: [
      'User-Agent 轮换',
      'Cookie 管理',
      'JavaScript 渲染',
      '验证码处理',
      'Cloudflare 绕过'
    ],
    tech: ['Selenium', 'Playwright', 'Scrapling']
  }
]
</script>

<template>
  <div class="modules">
    <n-tabs type="card" animated>
      <n-tab-pane
        v-for="(module, index) in modules"
        :key="module.name"
        :name="`module-${index}`"
        :tab="`${module.icon} ${module.name.split(' ')[0]}`"
      >
        <div class="module-detail">
          <div class="module-header">
            <h2>{{ module.name }}</h2>
            <p class="module-description">{{ module.description }}</p>
          </div>

          <n-descriptions title="主要职责" bordered :columns="1">
            <n-descriptions-item
              v-for="resp in module.responsibilities"
              :key="resp"
              label=""
            >
              {{ resp }}
            </n-descriptions-item>
          </n-descriptions>

          <div class="tech-stack">
            <h4>技术栈</h4>
            <div class="tags">
              <n-tag
                v-for="tech in module.tech"
                :key="tech"
                type="info"
                size="large"
                bordered
              >
                {{ tech }}
              </n-tag>
            </div>
          </div>
        </div>
      </n-tab-pane>
    </n-tabs>

    <!-- 模块交互说明 -->
    <n-card title="模块间交互" class="interaction-card">
      <div class="interaction-diagram">
        <pre>
┌─────────────┐     ┌─────────────┐
│  调度器     │────▶│  下载器     │
│ Scheduler   │     │ Downloader  │
└─────────────┘     └─────────────┘
       │                    │
       │                    ▼
       │            ┌─────────────┐
       │            │   解析器    │
       │            │   Parser    │
       │            └─────────────┘
       │                    │
       ▼                    ▼
┌─────────────┐     ┌─────────────┐
│  核心引擎   │◀───▶│   存储引擎  │
│Core Engine  │     │   Storage   │
└─────────────┘     └─────────────┘
       │
       ▼
┌─────────────┐
│  反爬模块   │
│Anti-Crawl   │
└─────────────┘
        </pre>
      </div>
      <p class="interaction-desc">
        核心引擎作为中央协调者，调度器负责 URL 管理和分发，
        下载器获取网页内容，解析器提取数据，最终由存储引擎持久化。
        反爬模块为下载器提供支持，确保请求能够成功获取响应。
      </p>
    </n-card>
  </div>
</template>

<style scoped>
.modules {
  max-width: 1000px;
  margin: 0 auto;
}

.module-detail {
  padding: 20px;
}

.module-header {
  margin-bottom: 30px;
}

.module-header h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #18a058;
}

.module-description {
  font-size: 1.1rem;
  color: #666;
}

.interaction-card {
  margin-top: 20px;
}

.interaction-diagram {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  overflow-x: auto;
}

.interaction-diagram pre {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  color: #333;
}

.interaction-desc {
  margin-top: 20px;
  padding: 15px;
  background: #e8f5e9;
  border-radius: 8px;
  line-height: 1.8;
}
</style>
