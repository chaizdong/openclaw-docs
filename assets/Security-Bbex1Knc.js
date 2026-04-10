import{Ft as e,It as t,Lt as n,en as r,ln as i,qt as a,t as o}from"./_plugin-vue_export-helper-CtX_x4q1.js";import{t as s}from"./Code-DkMOxQr-.js";import{t as c}from"./Card-BKFf-BiJ.js";import{t as l}from"./Alert-CXX1PKM1.js";var u={class:`security`},d=`// Token 认证
OPENCLAW_GATEWAY_TOKEN=your-secret-token

// 密码认证
OPENCLAW_GATEWAY_PASSWORD=your-password`,f=`1. Gateway 发送挑战（随机 nonce）
2. 设备用私钥签名 nonce
3. Gateway 验证签名
4. 本机连接自动批准 / 非本机需手动批准
5. 批准后发放设备令牌`,p=`Docker 沙箱用于隔离 Agent 的代码执行：
- 网络出口控制
- 文件系统只读模式
- 独立工作空间
- 资源限制`,m=`// 使用 SecretRef 类型引用凭据
{
  "api_key": { "$secret": "API_KEY" }
}

// 运行时从环境变量解析
// 永远不会出现在日志中`,h=o({__name:`Security`,setup(o){return(o,h)=>(a(),e(`div`,u,[n(i(l),{title:`安全设计原则`,type:`warning`},{default:r(()=>[...h[0]||=[t(` 安全是刻意的取舍：在不扼杀能力的前提下使用强默认值。 `,-1)]]),_:1}),n(i(c),{title:`认证体系`,class:`auth-card`},{default:r(()=>[n(i(s),{code:d,language:`bash`}),n(i(l),{type:`info`,style:{"margin-top":`15px`}},{default:r(()=>[...h[1]||=[t(` 注意：绑定到非本机地址（0.0.0.0）时必须启用认证。 `,-1)]]),_:1})]),_:1}),n(i(c),{title:`设备配对流程`,class:`pairing-card`},{default:r(()=>[n(i(s),{code:f,language:`text`})]),_:1}),n(i(c),{title:`沙箱执行`,class:`sandbox-card`},{default:r(()=>[n(i(s),{code:p,language:`text`})]),_:1}),n(i(c),{title:`秘密管理`,class:`secret-card`},{default:r(()=>[n(i(s),{code:m,language:`json`})]),_:1})]))}},[[`__scopeId`,`data-v-c43757ef`]]);export{h as default};