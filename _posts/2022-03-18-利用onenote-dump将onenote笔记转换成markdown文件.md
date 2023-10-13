---
layout: post
status: publish
published: true
title: 利用onenote-dump将OneNote笔记转换成markdown文件
author:
  display_name: dignite
  login: dignite
  email: diyanqi07@gmail.com
  url: https://www.amzcd.top
author_login: diyanqi
author_email: diyanqi07@gmail.com
author_url: https://www.amzcd.top
wordpress_id: 687
wordpress_url: https://www.amzcd.top/?p=687
date: '2022-03-18 19:33:15 +0800'
date_gmt: '2022-03-18 11:33:15 +0800'
categories: [实验室, 实战]
tags:
- 笔记
- 氵
- 水
- md
- OneNote
comments: []
---



  <p>
   <!-- wp:paragraph --></p>
  <p>最近在学线上课，用电脑记笔记再方便不过了。一开始，笔者使用的是OneNote，但操作麻烦，还有些BUG。在记完了第一章的笔记后，决定接下来使用markdown记笔记。于是，便有了下面将.one文件转换成.md文件的逝情。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>本文用到的项目需要Python3环境，请预先安装好。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:mdx/github {"author":"HuimingPan","project":"onenote-dump"} --></p>
  <div class="wp-block-mdx-github mdx-github-cot" data-mdxgithuba="HuimingPan" data-mdxgithubp="onenote-dump" data-mdxgithubg="https://api.github.com/">
   <div class="mdx-github-wait-out-c2">
    <div class="mdx-github-wait-out-c mdui-valign">
     <div class="mdx-github-wait-out">
      <div class="mdx-github-wait">
       <a href="https://github.com/HuimingPan/onenote-dump">
        <div class="mdui-spinner"></div> </a>
       <p><a></a></p>
      </div>
     </div>
    </div>
   </div>
  </div>
  <p>
   <!-- /wp:mdx/github --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>准备</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>进入上面的链接，下载这个项目。直链：<a href="https://codeload.github.com/HuimingPan/onenote-dump/zip/refs/heads/master">https://codeload.github.com/HuimingPan/onenote-dump/zip/refs/heads/master</a>。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>在解压文件目录下执行命令安装依赖（当然，您可以切换pip版本）：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">pip install -r requirements.txt</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:image {"align":"center","id":688,"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} --></p>
  <div class="wp-block-image is-style-default">
   <figure class="aligncenter size-large">
    <img src="https://www.amzcd.top/wp-content/uploads/2022/03/image-1024x135.png" alt="" class="wp-image-688" />
    <br />
    <figcaption>
     安装过程
    </figcaption>
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>耐心等待安装完就行。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>过程</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>继续在这个根目录里操作。然后在终端输入以下命令：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">python onenote-dump
   <notebook>
    <output directory=""></output>
   </notebook></pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>其中，“notebook”——笔记本名；“output directory”——文档输出地址； 比如：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">python onenote-dump &quot;Software Development Notes&quot; C:\Temp\dump</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:image {"align":"center","id":689,"sizeSlug":"large","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-large">
    <img src="https://www.amzcd.top/wp-content/uploads/2022/03/image-1-1024x36.png" alt="" class="wp-image-689" />
    <br />
    <figcaption>
     输入命令后，程序会停顿一下
    </figcaption>
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:image {"align":"center","id":690,"width":382,"height":303,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full is-resized">
    <img src="https://www.amzcd.top/wp-content/uploads/2022/03/image-2.png" alt="" class="wp-image-690" width="382" height="303" />
    <br />
    <figcaption>
     如果跳出来这样的窗口，点“允许访问”就行
    </figcaption>
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>在运行上述命令后，会打开一个浏览器页面，输入自己的Microsoft账号和密码，使脚本有权访问Onedrive中的有关笔记本。在第一次授权之后，可以不需要再次授权。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":695,"sizeSlug":"full","linkDestination":"none","style":{"color":{}}} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2022/03/image-3-edited.png" alt="" class="wp-image-695" />
    <br />
    <figcaption>
     点“是”
    </figcaption>
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>笔记转换 授权完成后，程序将会将你的笔记本转换承.md文件，并保存在<code><output directory=""></output></code>处。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":692,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2022/03/image-4.png" alt="" class="wp-image-692" />
    <br />
    <figcaption>
     这样就行了！
    </figcaption>
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>


