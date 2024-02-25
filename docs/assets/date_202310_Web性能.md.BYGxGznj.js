import{_ as s,c as i,o as a,a2 as l}from"./chunks/framework.CMXJQQMW.js";const c=JSON.parse('{"title":"概述","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"date/202310/Web性能.md","filePath":"date/202310/Web性能.md","lastUpdated":null}'),t={name:"date/202310/Web性能.md"},p=l(`<h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h2><ul><li>css 简写，减少字节数</li><li>css 浅选择器，大幅减少样式表的大小</li><li>uncss 移除多余的属性</li><li>避免@import。会造成延迟渲染</li><li>过渡</li><li>will-change</li><li>关键 css 及其解决的问题 <ul><li>关键 css。用户立即看到的内容</li><li>非关键 css</li></ul></li><li>loadcss 库，使用 perload 语法加载首屏以外的内容</li><li>cssrelpreload</li><li>mydevice.io 枚举各种设备的分辨率</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preload&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css/styles.min.css&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;stylesheet&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">source</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    srcset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/media/cc0-images/surfer-240-200.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(orientation: portrait)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/media/cc0-images/painted-hand-298-332.jpg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>主流图像类型：</p><ol><li>光栅（位图）。JPEG、PNG、GIF <ul><li>有损。JPEG、WebP（有损）</li><li>无损。GIF、PNG、WebP（无损）</li></ul></li><li>SVG。矢量图，任意缩放不会任何视觉效果</li></ol><p>自适应图片</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image-small.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  srcset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image-medium.jpg 640w, image-large.jpg 1280w&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image-small.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  srcset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image-medium.jpg 640w, image-large.jpg 1280w&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sizes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(min-width: 704px) 50vw, 100vw&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="图像的进一步处理" tabindex="-1">图像的进一步处理 <a class="header-anchor" href="#图像的进一步处理" aria-label="Permalink to &quot;图像的进一步处理&quot;">​</a></h2><ul><li>雪碧图</li><li>压缩图片</li><li>webp</li><li>延迟加载</li></ul><p>雪碧图</p><ul><li>npm i -g svg-sprite</li></ul><p>图片优化</p><ul><li>imagemin</li><li>svgo</li></ul><h2 id="第-9-章-使用-service-worker-提升性能" tabindex="-1">第 9 章 使用 Service Worker 提升性能 <a class="header-anchor" href="#第-9-章-使用-service-worker-提升性能" aria-label="Permalink to &quot;第 9 章 使用 Service Worker 提升性能&quot;">​</a></h2><h2 id="第-10-章-微调资源传输" tabindex="-1">第 10 章 微调资源传输 <a class="header-anchor" href="#第-10-章-微调资源传输" aria-label="Permalink to &quot;第 10 章 微调资源传输&quot;">​</a></h2><h2 id="第-11-章-http2" tabindex="-1">第 11 章 http2 <a class="header-anchor" href="#第-11-章-http2" aria-label="Permalink to &quot;第 11 章 http2&quot;">​</a></h2><p>http1</p><ul><li>问题： <ul><li>对首阻塞。通常一次最大处理六个请求</li><li>未压缩的头部</li><li>缺少 HTTPS 的授权</li></ul></li></ul><p>http2</p><ul><li>提供成本更低的请求 <ul><li>一套新的传输体系。连接-&gt;流-&gt;消息-&gt;帧</li><li>http2，一个连接，处理多个请求</li></ul></li><li>头部压缩。 <ul><li>采用索引的思路，对相同的 header 值只用引用</li></ul></li><li>服务器推送</li></ul><p>关于 Http1 的思考：</p><p>Q1：http1，性能优化时，通常都会去竭力去减少请求数量，根本原因是什么？</p><p>A1：因为队首阻塞的原因，同一批次的 6 个请求若是未完成，则后续的请求会一直处于等待状态。</p><p>Q2：域名分片，可用，但麻烦，不值得</p><p>A2：通过不用的域名，绕过最大的并发请求限制。</p><p>Q3：为何要压缩头部</p><p>A4：1. 现代请求通常在 headers 添加很多信息，如跨域、Token、Cookie 等，头部越来越大。在传输时，压缩头部是还很有必要的。</p><p>Q4：服务器压缩了什么？</p><p>A4：服务器仅仅压缩传输的 Body，不压缩 headers</p><p>Q5：内联资源的优劣势</p><p>A5：劣势：不能使用缓存；加快页面的渲染速度，因为内联资源不会单独开发起请求获取数据。</p><p>关于 Http2 的思考：</p><p>Q1：服务器的压力增加了？</p><p>A2：从测试来看，当大批量请求发起时。http1 时，请求的瓶颈压力在前端，使用瀑布图查看时，请求的排队时间过长；http2 时，请求的响应时间过长。所以，从请求发起到请求结束，孰优孰劣？这是个问题。</p><p>资源压缩</p><h3 id="http2-服务器推送" tabindex="-1">HTTP2 服务器推送 <a class="header-anchor" href="#http2-服务器推送" aria-label="Permalink to &quot;HTTP2 服务器推送&quot;">​</a></h3><p>服务器推送静态资源，在相应头中添加 header：</p><blockquote><p>link: &lt;./css/index.css&gt;; rel=preload; as=style</p></blockquote><p>服务器推送，不会考虑缓存问题，无论用户代理是否存在缓存，都会推送全量数据</p><h3 id="http-1-http-2-优化时的差异点" tabindex="-1">HTTP 1 / HTTP 2 优化时的差异点： <a class="header-anchor" href="#http-1-http-2-优化时的差异点" aria-label="Permalink to &quot;HTTP 1 / HTTP 2 优化时的差异点：&quot;">​</a></h3><ol><li>HTTP 1 优化时更多的考虑资源捆绑，如雪碧图，减少请求数量</li><li>HTTP 2 优化时，更多考虑的是颗粒度。因为连接的代价更低，优先利用 HTTP 缓存的特性进行优化</li></ol><h2 id="gulp" tabindex="-1">gulp <a class="header-anchor" href="#gulp" aria-label="Permalink to &quot;gulp&quot;">​</a></h2><p>gulp 是一个流式构建系统。流从磁盘上的源读取数据，并进行处理和转换，然后将结果写回磁盘。常见的任务能力：</p><ul><li>缩小 HTML</li><li>JS 处理。丑化 JS</li><li>CSS 处理。编译 less、scss 等</li><li>图片处理。压缩图片、转 WebP 等</li></ul><p>生态很好</p><p>思考：</p><ul><li>gulp 与 webpack 之间的区别，优劣势</li></ul><h2 id="插件" tabindex="-1">插件： <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件：&quot;">​</a></h2><ol><li>提供网格条线</li></ol>`,52),e=[p];function h(n,k,r,d,o,E){return a(),i("div",null,e)}const u=s(t,[["render",h]]);export{c as __pageData,u as default};
