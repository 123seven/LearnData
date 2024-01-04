import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as t,c as p,a,b as e,d as h,e as i}from"./app-19JvA6l1.js";const d={},c=i('<p>飞书曾经展现出极大的开放性，然而在一次改版后，它取消了对免费用户的支持，限制越来越多，促使我将各项内容从飞书迁移出来。以下是我的飞书迁移记录和替代方案。</p><h2 id="飞书文档" tabindex="-1"><a class="header-anchor" href="#飞书文档" aria-hidden="true">#</a> 飞书文档</h2><h3 id="知识库" tabindex="-1"><a class="header-anchor" href="#知识库" aria-hidden="true">#</a> 知识库</h3><p>我的早期笔记都保存在为知笔记，而随着飞书的出现，我将大多数存档性资料迁移到飞书知识库。尽管我原本计划完全弃用飞书，但由于时间和精力的有限，我并没有再次进行一次全面的迁移。幸运的是，我并没有将重要知识点笔记存放在飞书上，所以剩余的说明书等次要文档将继续保留在这个平台上。</p><figure><img src="https://img.newzone.top/2023-12-11-10-56-52.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3><p>相较于 Excel，飞书表格更加方便实用，同时在线文档编辑也更为便捷。例如，我的作息时间表就采用了飞书表格，并不时地进行更新。</p><figure><img src="https://img.newzone.top/2023-12-11-10-52-56.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="收集表" tabindex="-1"><a class="header-anchor" href="#收集表" aria-hidden="true">#</a> 收集表</h3><p>在数据收集方面，飞书多维表格非常方便，而且支持嵌入网页，每月还提供 200 次的自定义推送通知。我打算继续在飞书上使用这一功能，不过机器人通知会转移到 Discord 客户端。</p><figure><img src="https://img.newzone.top/2023-12-11-10-55-18.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="飞书邮箱" tabindex="-1"><a class="header-anchor" href="#飞书邮箱" aria-hidden="true">#</a> 飞书邮箱</h2><p>飞书邮箱简单易用且功能强大，支持设置多个别名邮箱，还能为第三方邮箱客户端生成专用密码，并统计创建和最后使用的时间。</p><figure><img src="https://img.newzone.top/2023-12-10-15-45-44.png?imageMogr2/format/webp" alt="飞书邮箱设置" tabindex="0" loading="lazy"><figcaption>飞书邮箱设置</figcaption></figure><p>目前，我的飞书邮箱是博客和自托管服务的联系邮箱。因为这部分的使用频率较低，我设置了邮件自动转发到主力邮箱，避免需要登录查看。需要注意的是，自动转发功能需要在管理后台进行设置开启，否则该选项将不可见。</p><p>如果你的域名邮箱不需要大量发送邮件，我仍然推荐使用飞书邮箱。毕竟，大多数国外域名邮箱需要付费，而国内其他邮箱的体验也相当一般。</p><h2 id="飞书捷径" tabindex="-1"><a class="header-anchor" href="#飞书捷径" aria-hidden="true">#</a> 飞书捷径</h2><p>打开飞书捷径，却发现名称显示「飞书机器人助手」，不清楚两者到底是什么关系。改版后，飞书捷径不再支持海外链接，同时对第三方服务的支持也减少了。</p><figure><img src="https://img.newzone.top/2023-12-11-14-10-37.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不过，飞书捷径仍然支持个人免费使用。与之前的流程不同的是，你需要先建立机器人应用并发布，然后才能创建机器人指令。务必确保应用已发布，否则相关指令将无法触发。</p><p>原计划中，我打算通过飞书捷径将国内服务的通知转发到 Discord，以实现统一的通知管理。然而，在测试中发现，飞书捷径机器人无法将群消息作为触发节点。虽然飞书群组机器人能接收通知，但捷径机器人却无法读取这些通知，从而无法继续转发。</p><p>目前，我只能将飞书捷径用于轻量表格记录，例如，在接收通知消息后，通过触发飞书捷径的 webhook，将消息添加到飞书表格中。然而，添加这个功能时发现，只有企业版才能修改表格内容，并需要企业版管理员开通“飞书机器人助手”应用。但飞书捷径的名称不是显示为“飞书机器人助手”吗？对于个人用户来说，这个逻辑相当奇怪。</p><figure><img src="https://img.newzone.top/2023-12-11-14-03-25.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>未开通机器人助手会提示错误</figcaption></figure><h2 id="webhook-通知" tabindex="-1"><a class="header-anchor" href="#webhook-通知" aria-hidden="true">#</a> Webhook 通知</h2><p>我之前的 Webhook 通知是通过飞书群组机器人实现的。替代方法非常简单，只需将飞书的 webhook 替换为其他服务的链接即可。大多数通知机器人都支持 webhook，如 Telegram、Slack、Discord 等。</p><p>以 Discord 通知为例，只需将链接 <code>https://open.feishu.cn/open-apis/bot/v2/hook/*******</code> 替换为 <code>https://discord.com/api/webhooks/***/******</code>。</p>',26),g={href:"https://newzone.top/services/dockers-on-nas/n8n.html",target:"_blank",rel:"noopener noreferrer"},s=i('<figure><img src="https://img.newzone.top/2023-12-10-15-11-15.png?imageMogr2/format/webp?imageMogr2/format/webp/thumbnail/400x" alt="n8n 转接 webhook 消息" tabindex="0" loading="lazy"><figcaption>n8n 转接 webhook 消息</figcaption></figure><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ul><li>飞书 OKR：由于我之前使用较少，直接放弃。</li><li>飞书妙记：妙计用于音视频转文字，而妙记在桌面端已经被 Whisper 替代，我偶尔还会在手机端使用它进行语音转文字。</li></ul><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2><p>飞书在产品设计和体验方面表现相当不错。然而，飞书的改版使其产品逻辑全面向企业用户，要求所有接口都由企业管理员授权，导致免费和轻度企业用户流失严重。</p><p>飞书初期是以免费和轻度企业用户的口碑打响了名声，很难说改版会大幅改良它的营收状况。我最初完全投入飞书，是从少数派社群开始的。然而，社群停止后，我对飞书的使用频率也在下降。</p><p>当然，个人认为少数派飞书社群的关闭是一个双输。虽然飞书节省了免费用户的开销，但流失了大量早期用户和口碑。而自从少数派迁移到内部社群后，少数派的会员对我来说变得不那么重要，会员社区的访问也大大减少了。少数派会员的价值只剩每周一次的会员社区通讯。</p>',7);function f(l,m){const o=r("ExternalLinkIcon");return t(),p("div",null,[c,a("p",null,[e("如果你的服务器或容器不支持发送海外链接，可以使用部署在海外服务器上的 "),a("a",g,[e("n8n"),h(o)]),e(" 来转接 webhook 消息。")]),s])}const w=n(d,[["render",f],["__file","feishu.html.vue"]]);export{w as default};
