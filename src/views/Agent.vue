<script setup>
import { NCard, NGrid, NGridItem, NCode, NAlert, NTable } from 'naive-ui'

const agentFiles = [
  { file: 'AGENTS.md', role: '操作指令', when: '每次会话', desc: '告诉 Agent 如何行为' },
  { file: 'SOUL.md', role: '人格定义', when: '每次会话', desc: '语气、边界、风格' },
  { file: 'IDENTITY.md', role: '身份信息', when: '每次会话', desc: '名字、表情、调性' },
  { file: 'USER.md', role: '用户资料', when: '每次会话', desc: '如何称呼、偏好' },
  { file: 'TOOLS.md', role: '工具说明', when: '每次会话', desc: '工具使用笔记' },
  { file: 'BOOTSTRAP.md', role: '首次运行', when: '仅首次', desc: '初始化仪式' }
]

const coreTools = [
  { name: 'read', desc: '读取文件' },
  { name: 'write', desc: '写入文件' },
  { name: 'edit', desc: '编辑文件' },
  { name: 'exec', desc: '执行命令' },
  { name: 'apply_patch', desc: '应用补丁' }
]

const builtInTools = [
  { name: 'memory_search', desc: '语义记忆搜索' },
  { name: 'memory_get', desc: '精确读取记忆文件' },
  { name: 'session', desc: '查询会话历史' },
  { name: 'browser', desc: '浏览器自动化' },
  { name: 'canvas', desc: '控制可视化画布' },
  { name: 'send', desc: '发送消息' }
]

const agentWorkspace = `~/.openclaw/agents/
  ├── main/                ← 默认 Agent
  │   ├── AGENTS.md        ← 操作指令
  │   ├── SOUL.md          ← 人格定义
  │   ├── IDENTITY.md      ← 身份信息
  │   └── memory/          ← Agent 记忆
  └── work/                ← 工作 Agent
      └── ...`
</script>

<template>
  <div class="agent">
    <n-alert title="什么是 Agent？" type="success">
      Agent 是 OpenClaw 中的"智能体"——一个具有特定人格、记忆和能力的 AI 实体。
    </n-alert>

    <n-card title="Agent 工作空间" class="workspace-card">
      <n-code :code="agentWorkspace" language="text" />
    </n-card>

    <n-card title="Agent 引导文件" class="files-card">
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>文件</th>
            <th>作用</th>
            <th>何时注入</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="f in agentFiles" :key="f.file">
            <td><code>{{ f.file }}</code></td>
            <td>{{ f.role }}</td>
            <td>{{ f.when }}</td>
            <td>{{ f.desc }}</td>
          </tr>
        </tbody>
      </n-table>
    </n-card>

    <n-card title="Agent 工具体系" class="tools-card">
      <n-grid :cols="2" :x-gap="20" :y-gap="20">
        <n-grid-item>
          <h4>核心系统工具</h4>
          <ul class="tool-list">
            <li v-for="tool in coreTools" :key="tool.name">
              <code>{{ tool.name }}</code> - {{ tool.desc }}
            </li>
          </ul>
        </n-grid-item>
        <n-grid-item>
          <h4>内置 Agent 工具</h4>
          <ul class="tool-list">
            <li v-for="tool in builtInTools" :key="tool.name">
              <code>{{ tool.name }}</code> - {{ tool.desc }}
            </li>
          </ul>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<style scoped>
.agent {
  max-width: 1000px;
  margin: 0 auto;
}

.workspace-card {
  margin-top: 20px;
}

.files-card {
  margin-top: 20px;
}

.files-card th {
  background: #f5f5f5;
  padding: 12px;
  font-weight: 600;
}

.files-card td {
  padding: 12px;
  vertical-align: middle;
  font-size: 0.9rem;
}

.files-card code {
  background: #f0f0f0;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.tools-card {
  margin-top: 20px;
}

.tools-card h4 {
  color: #18a058;
  margin-bottom: 15px;
}

.tool-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.tool-list li {
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.tool-list code {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 0.85rem;
}
</style>
