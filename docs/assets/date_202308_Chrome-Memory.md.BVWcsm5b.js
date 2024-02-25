import{_ as a,c as e,o,a2 as i}from"./chunks/framework.CMXJQQMW.js";const b=JSON.parse('{"title":"Chrome Devtools 之 Memory","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"date/202308/Chrome-Memory.md","filePath":"date/202308/Chrome-Memory.md","lastUpdated":null}'),t={name:"date/202308/Chrome-Memory.md"},r=i('<h1 id="chrome-devtools-之-memory" tabindex="-1">Chrome Devtools 之 Memory <a class="header-anchor" href="#chrome-devtools-之-memory" aria-label="Permalink to &quot;Chrome Devtools 之 Memory&quot;">​</a></h1><h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>Chrome 开发者工具的“内存”面板提供了有关网页如何使用内存的信息。如果您注意到您的网站变慢了，则应将内存泄漏视为可能的原因。Chrome Memory 标签页旨在解决内存问题，包括调试 JavaScript 内存泄漏。</p><h1 id="memory-面板" tabindex="-1">Memory 面板 <a class="header-anchor" href="#memory-面板" aria-label="Permalink to &quot;Memory 面板&quot;">​</a></h1><p>Memory 面板用于查找内存问题，例如内存泄漏、膨胀和垃圾回收，这些问题都会影响页面性能。通过录制快照，可以详细的查看当前页面使用情况。</p><p>支持快照类型：</p><ul><li>heap snapshot 堆快照</li><li>Allocation instrumentation on timeline 时间表上的分配工具</li><li>Allocation sampling 分配抽样</li></ul><h2 id="heap-snapshot" tabindex="-1">Heap Snapshot <a class="header-anchor" href="#heap-snapshot" aria-label="Permalink to &quot;Heap Snapshot&quot;">​</a></h2><h3 id="录制快照" tabindex="-1">录制快照 <a class="header-anchor" href="#录制快照" aria-label="Permalink to &quot;录制快照&quot;">​</a></h3><p>路径：Chrome DevTools --&gt; Memory --&gt; Heap Snapshot --&gt; Take Snapshot</p><p>通过上述的步骤可以录制一份当前的内存快照，开发者工具支持将已录制的快照数据存储到本地文件，同时也支持将数据导入到开发者工具。</p><p>小技巧：通过导出、导入功能，分析不同时刻下当前站点的内存使用状态，辅助内存使用分析。</p><h3 id="面板内容" tabindex="-1">面板内容 <a class="header-anchor" href="#面板内容" aria-label="Permalink to &quot;面板内容&quot;">​</a></h3><p>加载快照后，可以进一步检查 JavaScript 对象和 DOM 节点的内存分布（在拍摄快照时）。</p><p>分析数据可以从多个视图查看：</p><h4 id="概要视图-summary-view" tabindex="-1">概要视图（Summary View） <a class="header-anchor" href="#概要视图-summary-view" aria-label="Permalink to &quot;概要视图（Summary View）&quot;">​</a></h4><p>可以看到一个表，其中包含从它们派生的构造函数和对象（按大小、距离和保留的对象数分组）。表字段解释：</p><ul><li>Constructor：用于构造对象的 JavaScript 函数。</li><li>Distance：与根的距离。距离越远，物体加载和处理所需的时间就越长。</li><li>Shallow Size：通过特定构造函数创建的每个对象的阴影大小。</li><li>Retained Size：一组对象中最大的保留大小</li></ul><h4 id="包含视图-containment-view" tabindex="-1">包含视图（Containment View） <a class="header-anchor" href="#包含视图-containment-view" aria-label="Permalink to &quot;包含视图（Containment View）&quot;">​</a></h4><p>可以看到一张表，从对象（JavaScript 对象或 DOM 节点）的维度查看堆信息，表字段解释：</p><ul><li>Object：特定的 JavaScript 对象或 DOM 节点。</li><li>Distance：一组节点中距离根节点最短的路径</li><li>Shallow Size：通过特定构造函数创建的每个对象的 Shallow Size 之和</li><li>Retained Size：一组对象的最大保留大小</li></ul><h4 id="统计视图-statistics-view" tabindex="-1">统计视图（Statistics View） <a class="header-anchor" href="#统计视图-statistics-view" aria-label="Permalink to &quot;统计视图（Statistics View）&quot;">​</a></h4><p>环形图，显示存在的每种类型的对象总体占用的内存量。</p><h2 id="allocation-instrumentation-on-timeline" tabindex="-1">Allocation instrumentation on timeline <a class="header-anchor" href="#allocation-instrumentation-on-timeline" aria-label="Permalink to &quot;Allocation instrumentation on timeline&quot;">​</a></h2><p>录制操作期间新分配的内容</p><h2 id="allocation-sampling" tabindex="-1">Allocation sampling <a class="header-anchor" href="#allocation-sampling" aria-label="Permalink to &quot;Allocation sampling&quot;">​</a></h2><p>Record memory allocation using sampling method. this profile type has minimal performance overhead and can be used for long running operations. it provide good approximation of allocations broken down by javascript execution stack.</p><p>使用采样方法记录内存分配。这种配置文件类型的性能开销最小，可以用于长时间运行的操作。它提供了 javascript 执行堆栈分解的分配的良好近似。</p><p>表字段解释：</p><ul><li>Self Size: 函数本身使用的内存。</li><li>Total Size: 函数所属集合使用的内存。</li><li>Function: 在操作中被记录的函数。</li></ul><h1 id="何时会出现内存泄漏" tabindex="-1">何时会出现内存泄漏 <a class="header-anchor" href="#何时会出现内存泄漏" aria-label="Permalink to &quot;何时会出现内存泄漏&quot;">​</a></h1><ul><li>意外的全局变量</li><li>Detached DOM Nodes 分离的 DOM 节点</li><li>闭包</li></ul><h1 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h1><h1 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h1><ul><li>[^1]<a href="https://www.bitdegree.org/learn/chrome-memory-tab#chrome-memory-tab-main-tips" target="_blank" rel="noreferrer">Chrome Memory Tab: Learn to Find JavaScript Memory Leaks</a></li><li>[^2]<a href="https://github.com/GoogleChrome/devtools-docs/blob/master/docs/javascript-memory-profiling.md" target="_blank" rel="noreferrer">JavaScript Memory Profiling</a></li><li>[^3]<a href="https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/" target="_blank" rel="noreferrer">Record heap snapshots</a></li><li>[^4]<a href="https://developer.chrome.com/docs/devtools/memory-problems/allocation-profiler/" target="_blank" rel="noreferrer">How to Use the Allocation Profiler Tool</a></li></ul>',35),l=[r];function n(h,s,m,c,p,d){return o(),e("div",null,l)}const f=a(t,[["render",n]]);export{b as __pageData,f as default};
