import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,a as n,b as a,d as p,e as l}from"./app-19JvA6l1.js";const i={},u={href:"https://github.com/louislam/uptime-kuma",target:"_blank",rel:"noopener noreferrer"},r=l(`<p>虽然 Uptime Kuma 不能执行后续的自动化，但可以通过 webhook 触发其他操作。</p><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令" aria-hidden="true">#</a> 部署命令</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">uptime-kuma</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> louislam/uptime<span class="token punctuation">-</span>kuma<span class="token punctuation">:</span><span class="token number">1</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> uptime<span class="token punctuation">-</span>kuma
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/uptime<span class="token punctuation">-</span>kuma/data<span class="token punctuation">:</span>/app/data
      <span class="token comment"># 用于 Docker 容器监控</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3001:3001&quot;</span> <span class="token comment"># &lt;Host Port&gt;:&lt;Container Port&gt;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(d,k){const s=t("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[n("a",u,[a("Uptime Kuma"),p(s)]),a(" 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。对于检查特定关键词是否存在于网页中等轻量级监控是足够了。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。")]),r])}const _=e(i,[["render",m],["__file","uptime-kuma.html.vue"]]);export{_ as default};
