<script setup>
import { NCard, NAlert } from 'naive-ui'

const coreFunctions = [
  { name: '频道管理', icon: '📱', desc: '管理所有聊天平台的连接，接收和发送消息' },
  { name: '路由引擎', icon: '🧭', desc: '解析消息来源，决定交给哪个 Agent 处理' },
  { name: 'Agent 运行', icon: '🤖', desc: '运行 AI Agent，调用模型和工具' },
  { name: '记忆搜索', icon: '🧠', desc: '向量嵌入与语义搜索，提供上下文' },
  { name: '插件系统', icon: '🧩', desc: '加载和管理 76+ 插件' },
  { name: 'WebSocket', icon: '🔌', desc: '与 CLI、Web UI、macOS 客户端通信' }
]

const handshakeSteps = [
  { from: 'Gateway', action: 'connect.challenge', to: '客户端', desc: '发送随机 nonce' },
  { from: '客户端', action: 'connect(签名)', to: 'Gateway', desc: '用设备密钥签名 nonce' },
  { from: 'Gateway', action: 'hello-ok', to: '客户端', desc: '认证成功' }
]
</script>

<template>
  <div class="gateway">
    <n-alert title="Gateway 是 OpenClaw 的心脏" type="success">
      Gateway（网关）是一个长期运行的 Node.js 进程，负责管理所有聊天平台的连接、运行 AI Agent、处理插件、记忆、工具调用。
    </n-alert>

    <n-card title="Gateway 核心功能" class="functions-card">
      <n-grid :cols="3" :x-gap="20" :y-gap="20">
        <n-grid-item v-for="func in coreFunctions" :key="func.name">
          <div class="function-card">
            <div class="func-icon">{{ func.icon }}</div>
            <h3>{{ func.name }}</h3>
            <p>{{ func.desc }}</p>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>

    <n-card title="WebSocket 连接握手" class="handshake-card">
      <div class="handshake-flow">
        <div class="handshake-step" v-for="(step, i) in handshakeSteps" :key="i">
          <span class="party">{{ step.from }}</span>
          <span class="action">{{ step.action }}</span>
          <span class="party">{{ step.to }}</span>
        </div>
      </div>
      <div class="handshake-desc">
        <p>认证成功后，客户端与 Gateway 之间可以正常通信。</p>
      </div>
    </n-card>

    <n-card title="WebSocket 客户端角色" class="roles-card">
      <n-grid :cols="2" :x-gap="20" :y-gap="20">
        <n-grid-item>
          <div class="role-card">
            <h3>🎛️ operator</h3>
            <p class="role-subtitle">控制面板客户端</p>
            <ul>
              <li>CLI 命令行工具</li>
              <li>Web UI 网页端</li>
              <li>自动化脚本</li>
            </ul>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="role-card">
            <h3>📦 node</h3>
            <p class="role-subtitle">能力提供节点</p>
            <ul>
              <li>iOS 设备（提供摄像头）</li>
              <li>macOS（提供 Canvas）</li>
              <li>其他能力节点</li>
            </ul>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<style scoped>
.gateway {
  max-width: 1000px;
  margin: 0 auto;
}

.functions-card {
  margin-top: 20px;
}

.function-card {
  padding: 20px;
  text-align: center;
  height: 100%;
  background: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.3s;
}

.function-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.func-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.function-card h3 {
  color: #18a058;
  margin-bottom: 10px;
  font-size: 1rem;
}

.function-card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.85rem;
}

.handshake-card {
  margin-top: 20px;
}

.handshake-flow {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
}

.handshake-step {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

.party {
  min-width: 60px;
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.action {
  flex: 1;
  background: #18a058;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
  text-align: center;
  font-family: monospace;
}

.handshake-desc {
  margin-top: 15px;
  padding: 15px;
  background: #e8f5e9;
  border-radius: 8px;
}

.handshake-desc p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.roles-card {
  margin-top: 20px;
}

.role-card {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  height: 100%;
}

.role-card h3 {
  color: #18a058;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.role-subtitle {
  color: #666;
  font-size: 0.85rem;
  margin-bottom: 15px;
}

.role-card ul {
  margin: 0;
  padding-left: 20px;
  color: #666;
  font-size: 0.9rem;
}

.role-card li {
  margin-bottom: 8px;
  line-height: 1.5;
}
</style>
