<script setup>
import { NCard, NInput, NGrid, NGridItem, NTag, NButton } from 'naive-ui'
import { ref, computed } from 'vue'

const searchQuery = ref('')

// 示例技能列表
const skills = [
  {
    name: 'web_search',
    category: '搜索',
    desc: '执行网络搜索，获取相关信息',
    tags: ['搜索', '网络'],
    usage: 'claw.web_search(query="OpenClaw 教程")'
  },
  {
    name: 'web_scrape',
    category: '抓取',
    desc: '抓取网页内容，提取数据',
    tags: ['抓取', 'HTML'],
    usage: 'claw.web_scrape(url="https://example.com")'
  },
  {
    name: 'code_execute',
    category: '执行',
    desc: '执行 Python 代码',
    tags: ['代码', '执行'],
    usage: 'claw.code_execute(code="print(\'Hello\')")'
  },
  {
    name: 'file_read',
    category: '文件',
    desc: '读取本地文件内容',
    tags: ['文件', '读取'],
    usage: 'claw.file_read(path="./data.txt")'
  },
  {
    name: 'file_write',
    category: '文件',
    desc: '写入内容到本地文件',
    tags: ['文件', '写入'],
    usage: 'claw.file_write(path="./output.txt", content="data")'
  },
  {
    name: 'email_send',
    category: '通讯',
    desc: '发送电子邮件',
    tags: ['邮件', '通讯'],
    usage: 'claw.email_send(to="user@example.com", subject="Hello")'
  },
  {
    name: 'github_pr_create',
    category: 'GitHub',
    desc: '创建 GitHub Pull Request',
    tags: ['GitHub', 'PR'],
    usage: 'claw.github_pr_create(repo="user/repo", title="Fix bug")'
  },
  {
    name: 'calendar_add',
    category: '日程',
    desc: '添加日程到日历',
    tags: ['日历', '日程'],
    usage: 'claw.calendar_add(title="Meeting", time="2024-01-01 10:00")'
  },
  {
    name: 'image_generate',
    category: 'AI',
    desc: '生成图片',
    tags: ['AI', '图片'],
    usage: 'claw.image_generate(prompt="a cat")'
  },
  {
    name: 'translate',
    category: 'AI',
    desc: '翻译文本',
    tags: ['AI', '翻译'],
    usage: 'claw.translate(text="Hello", to="zh")'
  },
  {
    name: 'database_query',
    category: '数据库',
    desc: '执行数据库查询',
    tags: ['数据库', 'SQL'],
    usage: 'claw.database_query(sql="SELECT * FROM users")'
  },
  {
    name: 'api_request',
    category: '网络',
    desc: '发送 API 请求',
    tags: ['API', 'HTTP'],
    usage: 'claw.api_request(url="https://api.example.com", method="GET")'
  }
]

const categories = ['全部', '搜索', '抓取', '执行', '文件', '通讯', 'GitHub', '日程', 'AI', '数据库', '网络']
const selectedCategory = ref('全部')

const filteredSkills = computed(() => {
  return skills.filter(skill => {
    const matchSearch = skill.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                       skill.desc.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchCategory = selectedCategory.value === '全部' || skill.category === selectedCategory.value
    return matchSearch && matchCategory
  })
})
</script>

<template>
  <div class="skills">
    <!-- 搜索和筛选 -->
    <n-card class="filter-card">
      <div class="filter-header">
        <n-input
          v-model:value="searchQuery"
          placeholder="搜索技能..."
          clearable
          style="width: 300px"
        />
        <div class="category-tags">
          <n-tag
            v-for="cat in categories"
            :key="cat"
            :type="selectedCategory === cat ? 'primary' : 'default'"
            :bordered="false"
            style="cursor: pointer; margin-right: 8px"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </n-tag>
        </div>
      </div>
    </n-card>

    <!-- 技能列表 -->
    <n-grid :cols="2" :x-gap="20" :y-gap="20">
      <n-grid-item v-for="skill in filteredSkills" :key="skill.name">
        <n-card :title="skill.name" class="skill-card">
          <template #header-extra>
            <n-tag :bordered="false">{{ skill.category }}</n-tag>
          </template>
          <p class="skill-desc">{{ skill.desc }}</p>
          <div class="skill-tags">
            <n-tag
              v-for="tag in skill.tags"
              :key="tag"
              size="small"
              :bordered="false"
            >
              {{ tag }}
            </n-tag>
          </div>
          <div class="skill-usage">
            <h4>使用方法：</h4>
            <pre><code>{{ skill.usage }}</code></pre>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>

    <!-- 空状态 -->
    <div v-if="filteredSkills.length === 0" class="empty-state">
      <p>没有找到匹配的技能</p>
    </div>

    <!-- 说明信息 -->
    <n-card title="关于技能系统" class="info-card">
      <p>
        OpenClaw 拥有 <strong>2868+</strong> 个技能，涵盖搜索、抓取、执行、文件操作、通讯、AI 等多个领域。
        技能是 OpenClaw 执行具体任务的能力单元，用户可以根据需要组合使用不同的技能。
      </p>
      <h4>技能分类：</h4>
      <ul>
        <li><strong>搜索类</strong>：网络搜索、信息检索</li>
        <li><strong>抓取类</strong>：网页爬取、数据提取</li>
        <li><strong>执行类</strong>：代码执行、命令运行</li>
        <li><strong>文件类</strong>：文件读写、目录操作</li>
        <li><strong>通讯类</strong>：邮件发送、消息推送</li>
        <li><strong>AI 类</strong>：图片生成、文本翻译</li>
        <li><strong>其他</strong>：数据库操作、API 请求等</li>
      </ul>
    </n-card>
  </div>
</template>

<style scoped>
.skills {
  max-width: 1200px;
  margin: 0 auto;
}

.filter-card {
  margin-bottom: 20px;
}

.filter-header {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-card {
  height: 100%;
}

.skill-desc {
  margin-bottom: 15px;
  color: #666;
}

.skill-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}

.skill-usage {
  background: #f5f5f5;
  border-radius: 6px;
  padding: 10px;
}

.skill-usage h4 {
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #666;
}

.skill-usage pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.85rem;
}

.skill-usage code {
  font-family: 'Consolas', 'Monaco', monospace;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.info-card {
  margin-top: 20px;
}

.info-card h4 {
  margin-top: 15px;
  margin-bottom: 10px;
}

.info-card ul {
  line-height: 2;
  color: #666;
}
</style>
