<script setup>
import { NCard, NTable, NTag } from 'naive-ui'

const channels = [
  { name: 'WhatsApp', lib: 'Baileys', auth: '扫码配对' },
  { name: 'Telegram', lib: 'grammY', auth: 'Bot Token' },
  { name: 'Discord', lib: 'discord.js', auth: 'Bot Token' },
  { name: 'Slack', lib: '@slack/bolt', auth: 'OAuth / Token' },
  { name: 'Signal', lib: 'signal-cli', auth: '手机号' },
  { name: 'iMessage', lib: 'BlueBubbles', auth: 'macOS 桥接' },
  { name: '飞书', lib: 'Feishu SDK', auth: 'App ID' },
  { name: 'LINE', lib: 'LINE SDK', auth: 'Channel Token' }
]

const interfaceMethods = [
  { category: '连接管理', methods: ['connect()', 'disconnect()', 'reconnect()'] },
  { category: '消息入站', methods: ['onMessage()'] },
  { category: '消息出站', methods: ['send()'] },
  { category: '状态同步', methods: ['sendTyping()', 'markRead()', 'react()'] },
  { category: '媒体处理', methods: ['uploadMedia()', 'downloadMedia()'] }
]
</script>

<template>
  <div class="channels">
    <n-card title="什么是频道？">
      <p class="desc">
        "频道"是 OpenClaw 对聊天平台的抽象。每个频道代表一个聊天平台的连接。
        用户通过已有的聊天工具与 AI 交互，不需要新装 App。
      </p>
    </n-card>

    <n-card title="支持的聊天平台" class="platforms-card">
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>平台</th>
            <th>底层库</th>
            <th>认证方式</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ch in channels" :key="ch.name">
            <td>
              <n-tag type="success" size="large" :bordered="false">
                {{ ch.name }}
              </n-tag>
            </td>
            <td>{{ ch.lib }}</td>
            <td>{{ ch.auth }}</td>
          </tr>
        </tbody>
      </n-table>
    </n-card>

    <n-card title="频道插件接口" class="interface-card">
      <p class="card-desc">每个频道插件遵循统一的接口模式</p>
      <n-grid :cols="2" :x-gap="20" :y-gap="20">
        <n-grid-item v-for="iface in interfaceMethods" :key="iface.category">
          <div class="interface-item">
            <h4>{{ iface.category }}</h4>
            <ul>
              <li v-for="method in iface.methods" :key="method">
                <code>{{ method }}</code>
              </li>
            </ul>
          </div>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<style scoped>
.channels {
  max-width: 1000px;
  margin: 0 auto;
}

.desc {
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
}

.platforms-card {
  margin-top: 20px;
}

.platforms-card th {
  background: #f5f5f5;
  padding: 12px;
  font-weight: 600;
}

.platforms-card td {
  padding: 12px;
  vertical-align: middle;
}

.interface-card {
  margin-top: 20px;
}

.card-desc {
  color: #666;
  margin-bottom: 20px;
}

.interface-item {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  height: 100%;
}

.interface-item h4 {
  color: #18a058;
  margin-bottom: 15px;
  font-size: 1rem;
}

.interface-item ul {
  margin: 0;
  padding-left: 20px;
}

.interface-item li {
  margin-bottom: 10px;
  color: #666;
  font-size: 0.9rem;
}

.interface-item code {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-family: 'Consolas', monospace;
}
</style>
