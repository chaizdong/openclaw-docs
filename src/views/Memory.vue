<script setup>
import { NCard, NGrid, NGridItem, NCode, NAlert } from 'naive-ui'

const embeddingProviders = [
  { name: '本地', model: 'Embedding Gemma 300M', feature: '完全离线，无需 API' },
  { name: 'OpenAI', model: 'text-embedding-3-small', feature: '高质量，需付费' },
  { name: 'Gemini', model: 'embedding-001', feature: '支持多模态' },
  { name: 'Mistral', model: 'mistral-embed', feature: '多语言支持好' },
  { name: 'Voyage', model: 'voyage-2', feature: '高质量' },
  { name: 'Ollama', model: '本地运行', feature: '自托管' }
]

const memoryStructure = `~/.openclaw/workspace/
  ├── MEMORY.md              ← 长期记忆（主索引）
  └── memory/
      ├── 2026-04-01.md      ← 每日记录
      ├── 2026-04-02.md
      └── 2026-04-03.md      ← 今天的记录`

const vectorSearch = `用户查询："上次我们讨论的部署方案"
     │
     ▼
  文本 → 向量嵌入 → 余弦相似度匹配 → 返回最相关的记忆片段`

const hybridSearch = `查询 ─┬─► BM25 关键词匹配 ──┐
     │                      ├──► 加权合并 ──► 最终结果
     └─► 向量语义搜索 ────┘
     默认权重：向量 70% + BM25 30%`
</script>

<template>
  <div class="memory">
    <n-alert title="为什么需要记忆？" type="info">
      AI 模型有上下文窗口限制，无法记住所有对话。记忆系统让 Agent 可以记住用户偏好和历史信息，
      跨会话保持一致性，并进行语义搜索相关记忆。
    </n-alert>

    <n-card title="记忆存储结构" class="structure-card">
      <n-code :code="memoryStructure" language="text" />
    </n-card>

    <n-card title="向量嵌入提供者" class="providers-card">
      <n-grid :cols="3" :x-gap="20" :y-gap="20">
        <n-grid-item v-for="p in embeddingProviders" :key="p.name">
          <div class="provider-card">
            <h4>{{ p.name }}</h4>
            <p class="model">{{ p.model }}</p>
            <p class="feature">{{ p.feature }}</p>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>

    <n-card title="搜索模式" class="search-card">
      <n-grid :cols="2" :x-gap="20" :y-gap="20">
        <n-grid-item>
          <h4>标准向量搜索</h4>
          <n-code :code="vectorSearch" language="text" />
        </n-grid-item>
        <n-grid-item>
          <h4>混合搜索</h4>
          <n-code :code="hybridSearch" language="text" />
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<style scoped>
.memory {
  max-width: 1000px;
  margin: 0 auto;
}

.structure-card {
  margin-top: 20px;
}

.providers-card {
  margin-top: 20px;
}

.provider-card {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  height: 100%;
}

.provider-card h4 {
  color: #18a058;
  margin-bottom: 10px;
  font-size: 1rem;
}

.provider-card .model {
  font-family: monospace;
  color: #666;
  margin-bottom: 8px;
  font-size: 0.85rem;
}

.provider-card .feature {
  color: #333;
  line-height: 1.6;
  font-size: 0.9rem;
}

.search-card {
  margin-top: 20px;
}

.search-card h4 {
  color: #18a058;
  margin-bottom: 15px;
}
</style>
