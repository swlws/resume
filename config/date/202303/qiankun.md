---
outline: deep
---

# 【微前端】qiankun

专栏：

- [【微前端】什么是微前端](https://blog.csdn.net/swl979623074/article/details/129648756)
- [【微前端】qiankun](https://blog.csdn.net/swl979623074/article/details/129649129)
- [【微前端】qiankun + vite + vue](https://blog.csdn.net/swl979623074/article/details/129651079)

目录：

- [一、qiankun 是什么](#一、qiankun 是什么)
- [二、qiankun 的设计思路](#二、qiankun 的设计思路)
- [三、qiankun 的子应用切换原理](#三、qiankun 的子应用切换原理)
- [四、沙箱机制](#四、沙箱机制)
- [五、优劣点](#五、优劣点)

## 一、qiankun 是什么

`qiankun`是一种前端微服务架构，旨在解决大型复杂应用的拆分和管理问题。

## 二、qiankun 的设计思路

`qiankun`的设计思路是基于“微服务”架构和“大前端”思想的，通过拆分前端应用、动态加载、状态共享、兼容性和稳定性等特性，帮助开发者构建复杂的前端应用，并实现快速、稳定、可扩展的部署和管理。

它的设计思路主要包括以下几个方面：

### 2.1 从大前端角度出发

`qiankun`从`大前端`的角度出发，将前端应用分为多个子应用，每个子应用相对独立，可以单独部署、独立运行。

这种方式类似于`微服务`架构，将前端应用拆分成多个小块，降低了整个应用的耦合度和复杂度。

### 2.2 基于路由的动态加载

`qiankun`的路由系统可以实现根据路由动态加载子应用。

在用户访问不同的页面时，`qiankun`会根据当前页面的路由信息动态加载相应的子应用，从而实现多个子应用的集成。

### 2.3 统一状态管理

`qiankun`通过提供一个全局状态管理器来实现多个子应用之间的状态共享。

子应用可以将自己的状态注册到全局状态管理器中，并在需要的时候获取全局状态，从而实现子应用之间的数据交换和共享。

### 2.4 兼容性和稳定性

`qiankun`采用了“双向通信”技术来实现子应用之间的通信，同时也提供了多种兼容性解决方案，可以在不同的浏览器和环境中运行，从而保证了整个应用的稳定性和兼容性。

## 三、qiankun 的子应用切换原理

`qiankun`的应用切换原理是通过`动态加载`、`应用卸载`和`挂载`、以及`全局状态共享`等机制来实现的。这些机制保证了多个子应用之间的隔离和独立性，同时又实现了数据和状态的共享，从而为用户提供了无缝的应用切换体验。

`qiankun`的应用切换原理可以概括为以下几个步骤：

1. `qiankun`主应用加载

当用户访问`qiankun`主应用时，`qiankun`主应用会被加载和初始化。

在这个过程中，`qiankun`主应用会根据预定义的子应用列表（包括子应用的名称、入口文件路径、路由等信息）来预加载子应用的代码和资源文件。

2. 子应用懒加载

当用户访问某个子应用时，`qiankun`主应用会根据路由信息动态加载相应的子应用。

这个过程中，`qiankun`会先检查子应用是否已经加载过，如果没有加载过，则会懒加载相应的子应用代码和资源文件。

3. 应用切换

当用户从一个子应用切换到另一个子应用时，`qiankun`会首先将当前子应用卸载，并清除其对应的 DOM 节点和事件监听器。然后，`qiankun`会加载新的子应用，并将其挂载到 DOM 节点上，同时调用子应用的生命周期函数来初始化新的应用。

4. 全局状态共享

`qiankun`提供了一个全局状态管理器来实现子应用之间的状态共享。

当用户从一个子应用切换到另一个子应用时，`qiankun`会自动将当前子应用的状态保存到全局状态管理器中，然后再将新的子应用的状态从全局状态管理器中获取并更新到新的子应用中。

## 四、沙箱机制

为了避免不同子应用之间的代码冲突和安全问题，采用了沙箱机制来隔离不同子应用的代码执行环境。具体来说，`qiankun`沙箱机制主要有以下几个方面：

- 应用级别的沙箱

`qiankun`将每个子应用都视为一个独立的应用，每个子应用都有自己的独立沙箱环境，因此每个子应用都可以独立运行、独立调试、独立部署，互不影响。

- 模块级别的沙箱

在子应用中，`qiankun`会使用自定义的模块加载器来加载和执行子应用的代码，这些代码都运行在独立的模块沙箱环境中，避免了子应用之间的代码污染和冲突。

- 样式隔离

`qiankun`还提供了样式隔离机制，可以在不同子应用之间隔离样式，避免了样式冲突的问题。

- 生命周期隔离

在`qiankun`中，每个子应用都有自己的生命周期管理机制，这些生命周期钩子函数运行在独立的沙箱环境中，避免了子应用之间的生命周期冲突和影响。

`qiankun`的沙箱机制可以有效地隔离不同子应用之间的代码执行环境，避免了代码冲突和安全问题。开发者可以放心地在`qiankun`架构下开发和部署多个子应用，并且不必担心子应用之间的代码污染和冲突问题。

## 五、优劣点

- 优势
  - 模块化
  - 动态加载
  - 全局状态管理
  - 兼容性和稳定性
- 劣势
  - 复杂性：工程复杂，主应用、子应用。
  - 调试困难：多个子应用之间存在状态共享时，调试困难。
  - 性能问题：在网络条件不佳的情况下，动态加载可能会导致用户等待时间过长。
  - 安全性：跨站点脚本攻击（XSS）和跨站点请求伪造（CSRF）等。
