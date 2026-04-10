import{Dt as e,Ft as t,It as n,Lt as r,Mt as i,Yt as a,dn as o,en as s,ln as c,qt as l,t as u}from"./_plugin-vue_export-helper-CtX_x4q1.js";import{n as d,t as f}from"./Grid-B6PsY0lQ.js";import{t as p}from"./Code-DkMOxQr-.js";import{t as m}from"./Card-BKFf-BiJ.js";import{t as h}from"./Alert-CXX1PKM1.js";var g={class:`memory`},_={class:`provider-card`},v={class:`model`},y={class:`feature`},b=`~/.openclaw/workspace/
  ├── MEMORY.md              ← 长期记忆（主索引）
  └── memory/
      ├── 2026-04-01.md      ← 每日记录
      ├── 2026-04-02.md
      └── 2026-04-03.md      ← 今天的记录`,x=`用户查询："上次我们讨论的部署方案"
     │
     ▼
  文本 → 向量嵌入 → 余弦相似度匹配 → 返回最相关的记忆片段`,S=`查询 ─┬─► BM25 关键词匹配 ──┐
     │                      ├──► 加权合并 ──► 最终结果
     └─► 向量语义搜索 ────┘
     默认权重：向量 70% + BM25 30%`,C=u({__name:`Memory`,setup(u){let C=[{name:`本地`,model:`Embedding Gemma 300M`,feature:`完全离线，无需 API`},{name:`OpenAI`,model:`text-embedding-3-small`,feature:`高质量，需付费`},{name:`Gemini`,model:`embedding-001`,feature:`支持多模态`},{name:`Mistral`,model:`mistral-embed`,feature:`多语言支持好`},{name:`Voyage`,model:`voyage-2`,feature:`高质量`},{name:`Ollama`,model:`本地运行`,feature:`自托管`}];return(u,w)=>(l(),t(`div`,g,[r(c(h),{title:`为什么需要记忆？`,type:`info`},{default:s(()=>[...w[0]||=[n(` AI 模型有上下文窗口限制，无法记住所有对话。记忆系统让 Agent 可以记住用户偏好和历史信息， 跨会话保持一致性，并进行语义搜索相关记忆。 `,-1)]]),_:1}),r(c(m),{title:`记忆存储结构`,class:`structure-card`},{default:s(()=>[r(c(p),{code:b,language:`text`})]),_:1}),r(c(m),{title:`向量嵌入提供者`,class:`providers-card`},{default:s(()=>[r(c(f),{cols:3,"x-gap":20,"y-gap":20},{default:s(()=>[(l(),t(e,null,a(C,e=>r(c(d),{key:e.name},{default:s(()=>[i(`div`,_,[i(`h4`,null,o(e.name),1),i(`p`,v,o(e.model),1),i(`p`,y,o(e.feature),1)])]),_:2},1024)),64))]),_:1})]),_:1}),r(c(m),{title:`搜索模式`,class:`search-card`},{default:s(()=>[r(c(f),{cols:2,"x-gap":20,"y-gap":20},{default:s(()=>[r(c(d),null,{default:s(()=>[w[1]||=i(`h4`,null,`标准向量搜索`,-1),r(c(p),{code:x,language:`text`})]),_:1}),r(c(d),null,{default:s(()=>[w[2]||=i(`h4`,null,`混合搜索`,-1),r(c(p),{code:S,language:`text`})]),_:1})]),_:1})]),_:1})]))}},[[`__scopeId`,`data-v-5adbe358`]]);export{C as default};