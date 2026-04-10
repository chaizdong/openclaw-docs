<script setup>
import { NCard, NCode, NAlert, NGrid, NGridItem } from 'naive-ui'

const authMethods = `// Token 认证
OPENCLAW_GATEWAY_TOKEN=your-secret-token

// 密码认证
OPENCLAW_GATEWAY_PASSWORD=your-password`

const pairingFlow = `1. Gateway 发送挑战（随机 nonce）
2. 设备用私钥签名 nonce
3. Gateway 验证签名
4. 本机连接自动批准 / 非本机需手动批准
5. 批准后发放设备令牌`

const sandbox = `Docker 沙箱用于隔离 Agent 的代码执行：
- 网络出口控制
- 文件系统只读模式
- 独立工作空间
- 资源限制`

const secretManagement = `// 使用 SecretRef 类型引用凭据
{
  "api_key": { "$secret": "API_KEY" }
}

// 运行时从环境变量解析
// 永远不会出现在日志中`
</script>

<template>
  <div class="security">
    <n-alert title="安全设计原则" type="warning">
      安全是刻意的取舍：在不扼杀能力的前提下使用强默认值。
    </n-alert>

    <n-card title="认证体系" class="auth-card">
      <n-code :code="authMethods" language="bash" />
      <n-alert type="info" style="margin-top: 15px">
        注意：绑定到非本机地址（0.0.0.0）时必须启用认证。
      </n-alert>
    </n-card>

    <n-card title="设备配对流程" class="pairing-card">
      <n-code :code="pairingFlow" language="text" />
    </n-card>

    <n-card title="沙箱执行" class="sandbox-card">
      <n-code :code="sandbox" language="text" />
    </n-card>

    <n-card title="秘密管理" class="secret-card">
      <n-code :code="secretManagement" language="json" />
    </n-card>
  </div>
</template>

<style scoped>
.security {
  max-width: 1000px;
  margin: 0 auto;
}

.auth-card {
  margin-top: 20px;
}

.pairing-card {
  margin-top: 20px;
}

.sandbox-card {
  margin-top: 20px;
}

.secret-card {
  margin-top: 20px;
}
</style>
