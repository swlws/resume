import{_ as e,c as a,o as l,a2 as t}from"./chunks/framework.CMXJQQMW.js";const H=JSON.parse('{"title":"HTTP 发展史","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"date/202211/HTTP发展史.md","filePath":"date/202211/HTTP发展史.md","lastUpdated":null}'),i={name:"date/202211/HTTP发展史.md"},T=t('<h1 id="http-发展史" tabindex="-1">HTTP 发展史 <a class="header-anchor" href="#http-发展史" aria-label="Permalink to &quot;HTTP 发展史&quot;">​</a></h1><h2 id="http-0-9" tabindex="-1">HTTP/0.9 <a class="header-anchor" href="#http-0-9" aria-label="Permalink to &quot;HTTP/0.9&quot;">​</a></h2><p><code>HTTP/0.9</code>，有时也叫做<code>单行（one-line）协议</code>。它是在现有的 TCP 和 IP 协议基础之上建立，协议由四个部分组成：</p><ul><li>一个用来表示超文本文档的文本格式，超文本标记语言（HTML）。</li><li>一个用来交换超文本文档的简单协议，超文本传输协议（HTTP）。</li><li>一个显示（以及编辑）超文本文档的客户端，即网络浏览器。第一个网络浏览器被称为 WorldWideWeb。</li><li>一个服务器用于提供可访问的文档，即 httpd 的前身。</li></ul><p>HTTP/0.9 极其简单：请求由单行指令构成，没有版本号。示例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /example.html</span></span></code></pre></div><h2 id="http-1-0" tabindex="-1">HTTP/1.0 <a class="header-anchor" href="#http-1-0" aria-label="Permalink to &quot;HTTP/1.0&quot;">​</a></h2><p>在<code>HTTP/0.9</code>的基础上进行扩展：</p><ul><li>每个请求中携带协议版本号（<code>GET /example.html HTTP/1.0</code>）</li><li>状态码会在响应开始时发送，使浏览器能了解请求执行成功或失败，并相应调整行为（如更新或使用本地缓存）。</li><li>引入了<code>HTTP headers</code>的概念，无论是对于请求还是响应，允许传输元数据，使协议变得非常灵活，更具扩展性。</li><li>在新<code>HTTP headers</code>的帮助下，具备了传输除纯文本 HTML 文件以外其他类型文档的能力（凭借 Content-Type 头）。</li></ul><h2 id="http-1-1" tabindex="-1">HTTP/1.1 <a class="header-anchor" href="#http-1-1" aria-label="Permalink to &quot;HTTP/1.1&quot;">​</a></h2><p><code>HTTP/1.0</code> 多种不同的实现方式在实际运用中显得有些混乱，<code>HTTP/1.1</code> 消除了大量歧义内容并引入了多项改进：</p><ul><li>连接可以复用，节省了多次打开 TCP 连接加载网页文档资源的时间。</li><li>增加管线化技术，允许在第一个应答被完全发送之前就发送第二个请求，以降低通信延迟。</li><li>支持响应分块。</li><li>引入额外的缓存控制机制。</li><li>引入内容协商机制，包括语言，编码，类型等，并允许客户端和服务器之间约定以最合适的内容进行交换。</li><li>凭借 Host 头，能够使不同域名配置在同一个 IP 地址的服务器上。</li></ul><h2 id="http-2" tabindex="-1">HTTP/2 <a class="header-anchor" href="#http-2" aria-label="Permalink to &quot;HTTP/2&quot;">​</a></h2><p>HTTP/2 在 HTTP/1.1 有几处基本的不同：</p><ul><li>HTTP/2 是二进制协议而不是文本协议。不再可读，也不可无障碍的手动创建，改善的优化技术现在可被实施。</li><li>这是一个复用协议。并行的请求能在同一个链接中处理，移除了 HTTP/1.x 中顺序和阻塞的约束。</li><li>压缩了 headers。因为 headers 在一系列请求中常常是相似的，其移除了重复和传输重复数据的成本。</li><li>其允许服务器在客户端缓存中填充数据，通过一个叫服务器推送的机制来提前请求。</li></ul><h2 id="http3" tabindex="-1">HTTP3 <a class="header-anchor" href="#http3" aria-label="Permalink to &quot;HTTP3&quot;">​</a></h2><p>HTTP3 本质不是对 HTTP 协议本身的改进，它主要是集中在如何提高传输效率。</p><ul><li>HTTP3 使用 stream 进一步扩展了 HTTP2 的多路复用。在 HTTP3 模式下，一般传输多少个文件就会产生对应数量的 stream。当这些文件中的其中一个发生丢包时，你只需要重传丢包文件的对应 stream 即可。</li><li>HTTP3 不再是基于 TCP 建立的，而是通过 UDP 建立，在用户空间保证传输的可靠性，相比 TCP，UDP 之上的 QUIC 协议提高了连接建立的速度，降低了延迟。</li><li>通过引入 Connection ID，使得 HTTP3 支持连接迁移以及 NAT 的重绑定。</li><li>HTTP3 含有一个包括验证、加密、数据及负载的 built-in 的 TLS 安全机制。</li><li>拥塞控制。TCP 是在内核区实现的，而 HTTP3 将拥塞控制移出了内核，通过用户空间来实现。这样做的好处就是不再需要等待内核更新可以实现很方便的进行快速迭代。</li><li>头部压缩。HTTP2 使用的 HPACK，HTTP3 更换成了兼容 HPACK 的 QPACK 压缩方案。QPACK 优化了对乱序发送的支持，也优化了压缩率。</li></ul>',18),o=[T];function s(d,h,P,r,n,c){return l(),a("div",null,o)}const u=e(i,[["render",s]]);export{H as __pageData,u as default};
