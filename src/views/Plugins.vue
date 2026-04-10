<script setup>
import { NCard, NGrid, NGridItem, NTabs, NTabPane, NCode } from 'naive-ui'

const pluginTypes = [
  { type: '频道插件', icon: '📱', examples: ['discord', 'telegram', 'slack', 'whatsapp'], desc: '聊天平台集成' },
  { type: '模型提供者', icon: '🤖', examples: ['anthropic', 'openai', 'google'], desc: 'AI 模型接入' },
  { type: '记忆后端', icon: '🧠', examples: ['memory-core', 'memory-lancedb'], desc: '记忆存储引擎' },
  { type: '语音引擎', icon: '🔊', examples: ['elevenlabs', 'microsoft-speech'], desc: '文字转语音' },
  { type: '特殊功能', icon: '⚡', examples: ['copilot-proxy', 'device-pair'], desc: '特定能力扩展' }
]

const hooks = [
  { hook: 'gateway:boot', when: 'Gateway 启动时', usage: '初始化资源' },
  { hook: 'agent:before-start', when: 'Agent 开始处理前', usage: '注入上下文' },
  { hook: 'llm:before-call', when: '调用 AI 模型前', usage: '修改提示词' },
  { hook: 'message:before-send', when: '发送消息前', usage: '过滤/转换内容' },
  { hook: 'tool:after-call', when: '工具执行后', usage: '记录日志' }
]

const skillExample = `---
name: weather-check
description: 查询天气预报
metadata:
  openclaw:
    requires:
      bins: ["curl"]
      env: ["WEATHER_API_KEY"]
---

# 天气查询技能
当用户询问天气时，调用天气 API 获取信息...
`
</script>

<template>
  <div class="plugins">
    <n-card title="插件系统概述">
      <p class="desc">
        OpenClaw 的大部分功能都是通过插件实现的，核心只提供框架。
        extensions/ 目录下有 76 个内置插件。
      </p>
    </n-card>

    <n-card title="插件类型" class="types-card">
      <n-grid :cols="5" :x-gap="15" :y-gap="15">
        <n-grid-item v-for="p in pluginTypes" :key="p.type">
          <div class="plugin-type-card">
            <div class="type-icon">{{ p.icon }}</div>
            <h4>{{ p.type }}</h4>
            <p class="type-desc">{{ p.desc }}</p>
            <div class="type-examples">
              <n-tag
                v-for="ex in p.examples"
                :key="ex"
                size="small"
                :bordered="false"
                style="margin-right: 4px; margin-bottom: 4px"
              >
                {{ ex }}
              </n-tag>
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>

    <n-card title="钩子系统" class="hooks-card">
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>钩子</th>
            <th>触发时机</th>
            <th>典型用途</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="h in hooks" :key="h.hook">
            <td><code>{{ h.hook }}</code></td>
            <td>{{ h.when }}</td>
            <td>{{ h.usage }}</td>
          </tr>
        </tbody>
      </n-table>
    </n-card>

    <n-card title="技能系统（Skills）" class="skills-card">
      <n-tabs type="card" animated>
        <n-tab-pane name="intro" tab="介绍">
          <p>
            技能是比插件更轻量的扩展方式，本质是一个带元数据的 Markdown 文件。
            目前有 50+ 技能可供选择。
          </p>
        </n-tab-pane>
        <n-tab-pane name="example" tab="示例">
          <n-code :code="skillExample" language="markdown" />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<style scoped>
.plugins {
  max-width: 1200px;
  margin: 0 auto;
}

.desc {
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
}

.types-card {
  margin-top: 20px;
}

.plugin-type-card {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  height: 100%;
}

.type-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.plugin-type-card h4 {
  color: #18a058;
  margin-bottom: 10px;
  font-size: 1rem;
}

.type-desc {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.type-examples {
  display: flex;
  flex-wrap: wrap;
}

.hooks-card {
  margin-top: 20px;
}

.hooks-card th {
  background: #f5f5f5;
  padding: 12px;
  font-weight: 600;
}

.hooks-card td {
  padding: 12px;
  vertical-align: middle;
  font-size: 0.9rem;
}

.hooks-card code {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.skills-card {
  margin-top: 20px;
}
</style>
