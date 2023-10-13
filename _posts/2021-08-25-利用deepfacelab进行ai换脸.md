---
layout: post
status: publish
published: true
title: 利用DeepFaceLab进行AI换脸
author:
  display_name: dignite
  login: dignite
  email: diyanqi07@gmail.com
  url: https://www.amzcd.top
author_login: diyanqi
author_email: diyanqi07@gmail.com
author_url: https://www.amzcd.top
wordpress_id: 585
wordpress_url: https://www.amzcd.top/?p=585
date: '2021-08-25 10:16:56 +0800'
date_gmt: '2021-08-25 02:16:56 +0800'
categories: [实验室, 实战]
tags:
- B站
- 视频
- AI
- N卡
- 换脸
comments: []
---



  <p>
   <!-- wp:paragraph --></p>
  <p><code>DeepFaceLab</code>是众多开源的换脸软件之一。由于其对N卡良好的支持性以及易操作性，本教程使用<code>DeepFaceLab</code>进行AI换脸。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>1 下载软件</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:mdx/warning {"content":"在下载一切软件前，笔者默认您已经安装了N卡的Cuda 、Python 和 ffmpeg。教程百度。\n不过没有N卡也行，用CPU。详情见下文。"} --></p>
  <blockquote class="wp-block-mdx-warning mdx-warning">
   <p><i class="mdui-icon material-icons">warning</i> 警告<br /><strong>在下载一切软件前，笔者默认您已经安装了N卡的Cuda 、Python 和 ffmpeg。教程百度。<br /> 不过没有N卡也行，用CPU。详情见下文。</strong></p>
  </blockquote>
  <p>
   <!-- /wp:mdx/warning --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>首先打开项目的GitHub主页：<a href="https://github.com/iperov/DeepFaceLab">iperov/DeepFaceLab: DeepFaceLab is the leading software for creating deepfakes. (github.com)</a>。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>找到下载链接：<a href="https://rutracker.org/forum/viewtopic.php?p=75318742">DeepFaceLab - нейросеть, меняющая лица в видео. :: RuTracker.org</a>。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>进入后是全俄语的。直接找到下载按钮并下载。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":586,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-11.png" alt="" class="wp-image-586" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>这是一个磁力链种子，用<code>Motrix</code>等下载器完成下载。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>解压后的文件建议放在<strong>非C盘</strong>的<strong>根目录</strong>下。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":587,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-12.png" alt="" class="wp-image-587" />
    <br />
    <figcaption>
     如图
    </figcaption>
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>2 准备工作</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>将<strong>原视频</strong>和<strong>被换脸的视频</strong>（格式最好是MP4，其它的笔者没试过）复制到<code>workspace</code>目录下。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>首先，先将原来的两个sample视频删除或重命名。然后再将您刚刚复制进去的视频分别命名：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:list --></p>
  <ul>
   <li>原视频：<code>data_src.mp4</code>；</li>
   <li>被换脸的视频：<code>data_dst.mp4</code>；</li>
  </ul>
  <p>
   <!-- /wp:list --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>最后如图所示：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":588,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-13.png" alt="" class="wp-image-588" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>3 提取图片</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:heading --></p>
  <h2>3.1 分解原视频</h2>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>首先提取图片，运行如图程序：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":589,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-14.png" alt="" class="wp-image-589" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>接下来的要求输入直接按<kbd>回车</kbd>即可。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":590,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/v2-4f41e01004844844f9d38d125fe22063_720w.jpg" alt="" class="wp-image-590" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>显示<code>Done.</code>，按任意键即可。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading --></p>
  <h2>3.2 分解目标视频</h2>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>运行：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":591,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-15.png" alt="" class="wp-image-591" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>也按<kbd>回车</kbd>：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"id":592,"sizeSlug":"full","linkDestination":"none"} --></p>
  <figure class="wp-block-image size-full">
   <img src="https://www.amzcd.top/wp-content/uploads/2021/08/v2-7213f8fb5423bab925731a3d22678793_720w.jpg" alt="" class="wp-image-592" />
  </figure>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>如图，直到输出<code>Done.</code>，按任意键退出。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>3 提取脸部</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:heading --></p>
  <h2>提取原视频の脸</h2>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p><strong>TIP：时间很慢，耐心等待。</strong></p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>运行：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":593,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-16.png" alt="" class="wp-image-593" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>这个时候直接按<kbd>回车</kbd>，选择默认的GPU（或CPU，输入<code>CPU</code>即可）。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":594,"sizeSlug":"large","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-large">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-17-1024x535.png" alt="" class="wp-image-594" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>首次启动可能会比较缓慢，会卡1分钟才要求输入。这可能是因为Python需要加载某些库的原因。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading --></p>
  <h2>提取目标视频の脸</h2>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:image {"align":"center","id":596,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-19.png" alt="" class="wp-image-596" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>同上，时间缓慢，耐心等待：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":595,"sizeSlug":"large","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-large">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-18-1024x535.png" alt="" class="wp-image-595" />
    <br />
    <figcaption>
     （（（
    </figcaption>
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>4 训练模型</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>打开<code>train Quick96.bat</code>。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>值得注意的是，这个程序不会自己结束，会一直运行下去，直到您终止它。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":599,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-20.png" alt="" class="wp-image-599" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>接着慢慢运行，可以查看右侧窗口的效果：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":600,"sizeSlug":"large","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-large">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-21-1024x388.png" alt="" class="wp-image-600" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>5 合并脸部</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>运行：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":602,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-22.png" alt="" class="wp-image-602" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>进入后，所有参数一律按回车。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>记者程序自动拷贝脸图像（也就是转换！）。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":603,"sizeSlug":"large","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-large">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-23-1024x66.png" alt="" class="wp-image-603" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>您可以在<code>\workspace\data_dst\merged</code>目录下看到转换后的内容。出现<code>Done.</code>时就代表完成了。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>6 合成视频</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>运行：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"id":604,"sizeSlug":"full","linkDestination":"none"} --></p>
  <figure class="wp-block-image size-full">
   <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-24.png" alt="" class="wp-image-604" />
  </figure>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>当然下面一个也可以，不过<code>lossless</code>是<code>无损</code>的意思。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>等待两个<code>ffmpeg</code>的合成完成……</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":605,"sizeSlug":"large","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-large">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/08/image-25-1024x533.png" alt="" class="wp-image-605" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>等待<code>Done.</code>，按任意键退出完成！</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:separator --></p>
  <hr class="wp-block-separator" />
  <!-- /wp:separator -->
  <p></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>最后做的样例（qwq）：<a href="https://www.bilibili.com/video/BV1vQ4y1Y7ii/">视频去哪了呢？_哔哩哔哩_bilibili</a></p>
  <p>
   <!-- /wp:paragraph --></p>


