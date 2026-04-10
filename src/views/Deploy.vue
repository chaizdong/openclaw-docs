<script setup>
import { NCard, NSteps, NStep, NCode, NGrid, NGridItem, NAlert } from 'naive-ui'

const installSteps = [
  {
    title: '环境准备',
    desc: '确保已安装 Node.js >= 22 和 pnpm',
    code: `node --version
pnpm --version`
  },
  {
    title: '克隆项目',
    desc: '从 GitHub 克隆 OpenClaw',
    code: `git clone https://github.com/openclaw/openclaw.git
cd openclaw`
  },
  {
    title: '安装依赖',
    desc: '使用 pnpm 安装依赖',
    code: `pnpm install
pnpm build`
  },
  {
    title: '交互式引导',
    desc: '运行 onboarding 向导',
    code: `openclaw onboard`
  },
  {
    title: '启动 Gateway',
    desc: '启动核心服务',
    code: `openclaw gateway`
  },
  {
    title: '登录频道',
    desc: '配置聊天平台账号',
    code: `openclaw channels login whatsapp`
  }
]

const cliCommands = [
  { category: '初始化', cmd: 'openclaw onboard', desc: '交互式引导' },
  { category: 'Gateway', cmd: 'openclaw gateway', desc: '启动服务' },
  { category: '诊断', cmd: 'openclaw doctor', desc: '诊断修复' },
  { category: '频道', cmd: 'openclaw channels status', desc: '查看状态' },
  { category: 'Agent', cmd: 'openclaw agent chat', desc: '开始聊天' },
  { category: '配置', cmd: 'openclaw config get key', desc: '读取配置' }
]
</script>

<template>
  <div class="deploy">
    <n-alert title="快速开始" type="success">
      推荐使用 <code>openclaw onboard</code> 交互式向导完成初始设置。
    </n-alert>

    <n-card title="安装步骤" class="install-card">
      <n-steps vertical>
        <n-step
          v-for="step in installSteps"
          :key="step.title"
          :title="step.title"
          :description="step.desc"
        >
          <template #icon>✓</template>
          <n-code :code="step.code" language="bash" />
        </n-step>
      </n-steps>
    </n-card>

    <n-card title="CLI 命令速查" class="cli-card">
      <n-grid :cols="2" :x-gap="20" :y-gap="20">
        <n-grid-item v-for="cmd in cliCommands" :key="cmd.cmd">
          <div class="command-item">
            <div class="command-category">{{ cmd.category }}</div>
            <code class="command-code">{{ cmd.cmd }}</code>
            <span class="command-desc">{{ cmd.desc }}</span>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>

    <n-card title="配置文件示例" class="config-card">
      <p class="card-desc">位置：~/.openclaw/openclaw.json</p>
      <pre class="config-example">{
  "gateway": { "port": 18789, "bind": "127.0.0.1" },
  "channels": { "whatsapp": { "enabled": true } },
  "models": { "default": "claude-opus-4-6" },
  "memory": { "embeddings": "local" }
}</pre>
    </n-card>
  </div>
</template>

<style scoped>
.deploy {
  max-width: 1000px;
  margin: 0 auto;
}

.install-card {
  margin-top: 20px;
}

.cli-card {
  margin-top: 20px;
}

.command-item {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  height: 100%;
}

.command-category {
  color: #18a058;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.command-code {
  display: block;
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 0.85rem;
}

.command-desc {
  color: #666;
  font-size: 0.85rem;
}

.config-card {
  margin-top: 20px;
}

.card-desc {
  color: #666;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.config-example {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.85rem;
  font-family: 'Consolas', monospace;
}
</style>
