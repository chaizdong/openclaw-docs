# OpenClaw 原理文档前端项目

一个交互式文档网站，用于直观展示和解释 **OpenClaw（龙虾）** 的系统架构和运行原理。

## OpenClaw 是什么？

**OpenClaw** 是一个**自托管个人 AI 助手平台**：

| 特性 | 说明 |
|------|------|
| 🏠 自托管 | 运行在你自己的设备上，数据完全可控 |
| 💬 多平台 | 支持 WhatsApp、Telegram、Discord、Slack 等 20+ 聊天平台 |
| 🤖 多模型 | 可接入 Claude、GPT、Gemini 等 AI 模型 |
| 🧩 可扩展 | 76+ 插件 + 50+ 技能 |

## 页面结构

| 页面 | 路径 | 内容 |
|------|------|------|
| 首页 | `/` | OpenClaw 简介、核心特性、支持平台、消息流程概览 |
| 系统架构 | `/architecture` | 整体架构图（Gateway 为中心）、核心模块交互 |
| Gateway | `/gateway` | 网关核心功能、WebSocket 协议、客户端角色 |
| 频道系统 | `/channels` | 20+ 聊天平台接入方式、插件接口 |
| 插件与技能 | `/plugins` | 插件类型、生命周期、钩子系统、技能定义 |
| 记忆系统 | `/memory` | 向量嵌入、混合搜索（BM25 + 向量） |
| Agent | `/agent` | 智能体工作空间、人格定义、工具体系 |
| 安全模型 | `/security` | 认证体系、设备配对、沙箱执行 |
| 部署指南 | `/deploy` | 安装步骤、CLI 命令、配置示例 |

## 技术栈

- **Vue 3** - 前端框架
- **Vite** - 构建工具
- **Naive UI** - 组件库
- **Vue Router** - 路由管理

## 快速开始

```bash
# 克隆项目
git clone https://github.com/chaizdong/openclaw-docs.git

# 进入目录
cd openclaw-docs

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

启动后访问 http://localhost:5173 查看效果。

## 构建

```bash
npm run build
```

构建产物在 `dist/` 目录下。

## 项目价值

这个前端页面帮助开发者：

1. **快速理解** OpenClaw 的整体架构
2. **学习** 各模块的工作原理
3. **参考** 部署和配置方式
4. **可视化** 消息处理流程

## 相关链接

- [OpenClaw 官方仓库](https://github.com/openclaw/openclaw)
- [OpenClaw 官网](https://openclaw.ai/)

## License

MIT