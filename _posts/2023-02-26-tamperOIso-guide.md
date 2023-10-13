---
categories: [实验室, 项目]
layout: post
tags:
  - OIso
  - tamperOIso
  - tamper
  - 油猴脚本
  - 洛谷
title: 'tamperOIso 新手指南'
image:
  path: https://ts1.cn.mm.bing.net/th/id/R-C.e3a43b5aae4c7464ad51c2bb787f5bbe?rik=I5UonE4foZQ7uQ&riu=http%3a%2f%2fimage.samanlehua.com%2ffile%2fuserfiles%2fimages%2f2017072614295834295.jpg&ehk=RMbrgza9J%2fovtFI%2b3%2bq8Eo1kZVZ8R5eARZN6imon1Nw%3d&risl=&pid=ImgRaw&r=0
---

> 请期待我们即将发布的全新一代插件—— `OIso++` ！颠覆你的想象！
{: .prompt-tip }

### 1. 新手指南

**tamperOIso** 是一个 OIer 的好帮手，它可以在洛谷等网站上提供功能增强服务。它可以让您**查看并参与帖子投票**、使用最新可用的**帖子保存站** [lgbbs.oiso.cf](https://lgbbs.oiso.cf "lgbbs.oiso.cf") 来保存和查看帖子，在任何地方按下 `Shift+Space` 来搜索，还能支持显示**头像挂件**。

本插件兼容 `exlg` 等其他油猴插件。我们希望此插件能够提升您的做题体验。API 基于 [OIso](https://www.oiso.cf "OIso") 。

### 2. 功能之讨论增强

在任何的讨论列表处，您都能看到在链接右侧出现了投票信息：

![截屏2023-03-04 12.21.47.png](https://s2.loli.net/2023/03/04/fGgJw71jzNaSdrA.png)

进入某个具体的帖子后，在右侧的功能栏上会出现点赞和踩的按钮。

![截屏2023-03-04 12.23.16.png](https://s2.loli.net/2023/03/04/swWhE86diZUBvx2.png)

每人每天有15次踩和赞的机会。一旦做出决策后，无法撤销。

同时您还能看到，最下方一排按钮是 `保存帖子` 和 `查看备份` 。这里使用的帖子保存站都是长期有效的。

### 3. 快速搜索

在任何页面按下快捷键 `Shift+Space` ，就会弹出搜索界面。

![截屏2023-03-04 12.26.54.png](https://s2.loli.net/2023/03/04/kbVKcq1NDdIuZC6.png)

在其中输入您想搜索的任何内容。

![截屏2023-03-04 12.28.02.png](https://s2.loli.net/2023/03/04/s1cAYogy82qvCtP.png)

就像一个正常的搜索引擎一样，还支持智能联想。按下回车键或点击搜索按钮就能跳转到 OIso 的搜索页面。

### 4. 头像挂件

就像 `exlg` 推出的 `badge` 一样，我们也推出了**头像挂件**。您需要在 OIso Premium 计划期间方可注册或修改头像挂件。只需前往 OIso 官网，就能找到头像挂件修改入口。

![截屏2023-03-04 12.32.05.png](https://s2.loli.net/2023/03/04/VfoIjniTs2gNF19.png)

此头像挂件在任何地方都会显示。全站用户的头像挂件数据一天更新一次。**如果您需要立即刷新缓存，请点击页面底部的 `刷新 tamperOIso 缓存` 按钮。**

### 5. 头像挂件 DIY 说明

头像挂件的实现逻辑是：在圆形头像上覆盖一张长、宽为头像直径
 $1.35$ 倍的正方形图片，透明度为 $0.75$ 。

![截屏2023-02-26 20.57.52.png](https://s2.loli.net/2023/02/26/yCZ379AJlzXrtso.png)

如上图，圆形是头像部分，而上面覆盖着的一个圆角正方形就是您绘制头像挂件的尺寸。在绘制挂件时，您可以将此图作为底稿，然后再在上面**圆角正方形的区域内**进行作画。注意：请使用 $png$ 格式来做到某些地方的背景透明。

### -1. Todo

[ ] 接入免费的 AI 题目翻译服务。
