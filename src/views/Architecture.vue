<script setup>
import { NCard, NGrid, NGridItem } from 'naive-ui'
import { ref } from 'vue'

const activeModule = ref(null)

const gatewayModules = [
  { id: 'channel', name: '频道管理', icon: '📱', desc: '管理所有聊天平台的连接', details: ['WhatsApp、Telegram、Discord 等 20+ 平台', '连接建立与维护', '消息接收与发送', '状态同步（输入指示、已读回执）'] },
  { id: 'routing', name: '路由引擎', icon: '🧭', desc: '决定消息应该交给哪个 Agent 处理', details: ['解析发送者、频道、会话', '生成会话键', '会话隔离与路由', '多 Agent 场景的路由策略'] },
  { id: 'agent', name: 'Agent 运行', icon: '🤖', desc: '运行 AI Agent 智能体', details: ['加载 Agent 上下文', '调用 AI 模型', '工具调用管理', '多 Agent 支持'] },
  { id: 'memory', name: '记忆搜索', icon: '🧠', desc: '向量嵌入与语义搜索', details: ['本地向量嵌入', '混合搜索（BM25 + 向量）', '时间衰减与 MMR 多样性', '记忆搜索工具'] },
  { id: 'plugin', name: '插件系统', icon: '🧩', desc: '76+ 内置插件', details: ['频道插件', '模型提供者', '记忆后端', '语音引擎'] },
  { id: 'websocket', name: 'WebSocket', icon: '🔌', desc: '与客户端的通信协议', details: ['Challenge-Response 认证', '三种帧类型', '客户端角色', '心跳与重连机制'] }
]
</script>

<template>
  <div class="architecture">
    <n-card title="OpenClaw 整体架构">
      <div class="architecture-diagram">
        <div class="platforms-row">
          <span class="platforms-label">💬 聊天平台</span>
          <div class="platforms-list">
            <span class="platform-badge" v-for="p in ['WhatsApp', 'Telegram', 'Discord', 'Slack']" :key="p">
              {{ p }}
            </span>
          </div>
        </div>

        <div class="arrow-down">↓ 消息收发</div>

        <div class="gateway-box">
          <div class="gateway-title">🦞 Gateway 网关（核心进程）</div>
          <div class="gateway-modules">
            <div class="gw-module" v-for="mod in gatewayModules" :key="mod.id">
              <span class="gw-icon">{{ mod.icon }}</span>
              <span class="gw-name">{{ mod.name }}</span>
            </div>
          </div>
        </div>

        <div class="arrow-down">↓ WebSocket</div>

        <div class="clients-row">
          <div class="client-box">
            <div>🖥️ CLI</div>
            <div class="client-sub">命令行</div>
          </div>
          <div class="client-box">
            <div>🌐 Web UI</div>
            <div class="client-sub">网页端</div>
          </div>
          <div class="client-box">
            <div>🍎 macOS</div>
            <div class="client-sub">桌面端</div>
          </div>
        </div>
      </div>
    </n-card>

    <n-card title="Gateway 核心模块" class="modules-card">
      <n-grid :cols="2" :x-gap="20" :y-gap="20">
        <n-grid-item
          v-for="mod in gatewayModules"
          :key="mod.id"
          class="module-item"
          :class="{ active: activeModule === mod.id }"
          @click="activeModule = activeModule === mod.id ? null : mod.id"
        >
          <div class="module-header">
            <span class="module-icon">{{ mod.icon }}</span>
            <h3>{{ mod.name }}</h3>
          </div>
          <p class="module-desc">{{ mod.desc }}</p>

          <div v-if="activeModule === mod.id" class="module-details">
            <h4>主要功能：</h4>
            <ul>
              <li v-for="detail in mod.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </n-grid-item>
      </n-grid>
      <p class="hint">点击模块查看详情</p>
    </n-card>

    <n-card title="WebSocket 协议 - 连接握手" class="protocol-card">
      <div class="protocol-flow">
        <div class="flow-row">
          <span class="party">Gateway</span>
          <span class="action">connect.challenge (随机 nonce)</span>
          <span class="party">客户端</span>
        </div>
        <div class="flow-row">
          <span class="party">客户端</span>
          <span class="action">connect (签名 nonce)</span>
          <span class="party">Gateway</span>
        </div>
        <div class="flow-row">
          <span class="party">Gateway</span>
          <span class="action">hello-ok (认证成功)</span>
          <span class="party">客户端</span>
        </div>
      </div>
    </n-card>

    <n-card title="频道集成" class="channels-card">
      <n-grid :cols="4" :x-gap="15" :y-gap="15">
        <n-grid-item v-for="ch in ['WhatsApp', 'Telegram', 'Discord', 'Slack', 'Signal', 'iMessage', '飞书', 'LINE']" :key="ch">
          <div class="channel-card">
            <span class="channel-name">{{ ch }}</span>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<style scoped>
.architecture {
  max-width: 1200px;
  margin: 0 auto;
}

.architecture-diagram {
  padding: 20px;
}

.platforms-row {
  text-align: center;
  padding: 15px;
  background: #f0f0f0;
  border-radius: 8px;
}

.platforms-label {
  font-weight: 600;
  margin-bottom: 10px;
  display: block;
  color: #555;
}

.platforms-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.platform-badge {
  background: #18a058;
  color: white;
  padding: 6px 14px;
  border-radius: 15px;
  font-size: 0.85rem;
}

.arrow-down {
  text-align: center;
  font-size: 1.2rem;
  color: #18a058;
  padding: 10px;
  font-weight: bold;
}

.gateway-box {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border: 2px solid #18a058;
  border-radius: 12px;
  padding: 20px;
  margin: 10px 0;
}

.gateway-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #18a058;
  text-align: center;
  margin-bottom: 15px;
}

.gateway-modules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}

.gw-module {
  background: white;
  border: 1px solid #18a058;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.gw-icon {
  font-size: 1.8rem;
  display: block;
}

.gw-name {
  font-size: 0.8rem;
  color: #333;
  display: block;
}

.clients-row {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 15px;
}

.client-box {
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px 20px;
  text-align: center;
  line-height: 1.4;
}

.client-sub {
  font-size: 0.85rem;
  color: #666;
}

.modules-card {
  margin-top: 20px;
}

.module-item {
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.module-item:hover {
  background: #f5f5f5;
}

.module-item.active {
  border-color: #18a058;
  background: #e8f5e9;
}

.module-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.module-icon {
  font-size: 1.8rem;
}

.module-header h3 {
  margin: 0;
  color: #18a058;
  font-size: 1rem;
}

.module-desc {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.module-details {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
}

.module-details h4 {
  margin-bottom: 10px;
  color: #333;
  font-size: 0.95rem;
}

.module-details ul {
  margin: 0;
  padding-left: 18px;
}

.module-details li {
  color: #666;
  margin-bottom: 6px;
  line-height: 1.4;
  font-size: 0.85rem;
}

.hint {
  text-align: center;
  color: #999;
  margin-top: 15px;
  font-size: 0.85rem;
}

.protocol-card {
  margin-top: 20px;
}

.protocol-flow {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 15px;
}

.flow-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  margin-bottom: 8px;
}

.party {
  min-width: 70px;
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.action {
  flex: 1;
  background: #18a058;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  text-align: center;
  font-family: monospace;
}

.channels-card {
  margin-top: 20px;
}

.channel-card {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  height: 100%;
}

.channel-name {
  font-weight: 600;
  color: #18a058;
  font-size: 0.9rem;
}
</style>
