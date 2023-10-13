---
layout: post
status: publish
published: true
title: 在 树莓派4B Ubuntu20.04LTS 上 部署 Conda 与 Pytorch
author:
  display_name: dignite
  login: dignite
  email: diyanqi07@gmail.com
  url: https://www.amzcd.top
author_login: diyanqi
author_email: diyanqi07@gmail.com
author_url: https://www.amzcd.top
wordpress_id: 471
wordpress_url: https://www.amzcd.top/?p=471
date: '2021-07-28 12:28:49 +0800'
date_gmt: '2021-07-28 04:28:49 +0800'
categories: [实验室, 实战]
tags:
- Python
- pytorch
- conda
comments: []
---



  <p>
   <!-- wp:paragraph --></p>
  <p>为了写这篇文章折腾了一个星期。在网上都没有找到合适的教程，只能自己东拼西凑地摸索。下面总结出了搭建的方法，大家可以少踩?。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>安装Conda</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>下面列举了几种时下流行的Conda版本：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:table {"align":"center"} --></p>
  <figure class="wp-block-table aligncenter">
   <table>
    <thead>
     <tr>
      <th>版本</th>
      <th>特性</th>
      <th>√or&times;</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>原生Conda</td>
      <td>不支持armv8、aarch64（反正在本机上没法装）</td>
      <td>&times;</td>
     </tr>
     <tr>
      <td>berryConda</td>
      <td>版本过老，不推荐使用</td>
      <td>&times;</td>
     </tr>
     <tr>
      <td>achiConda</td>
      <td>完美解决以上问题，即适配，版本也新</td>
      <td>√</td>
     </tr>
    </tbody>
   </table>
  </figure>
  <p>
   <!-- /wp:table --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>所以在<strong>armv8</strong>的<strong>Ubuntu20.04LTS</strong>上，装<strong>achiConda</strong>是最好的选择。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>achiConda的GitHub下载页面：<a href="https://github.com/Archiconda/build-tools/releases/tag/0.2.3">Release Archiconda With just conda-forge &middot; Archiconda/build-tools (github.com)</a>。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>您当然可以下载最新的版本。这里以当前<strong>0.2.3</strong>版本为例（不过我觉得作者不打算更新了）。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>下载并安装安装包（不需要管理员身份）：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:enlighter/codeblock {"language":"shell"} --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">wget https://github.com/Archiconda/build-tools/releases/download/0.2.3/Archiconda3-0.2.3-Linux-aarch64.sh
chmod +x Archiconda3-0.2.3-Linux-aarch64.sh
bash Archiconda3-0.2.3-Linux-aarch64.sh</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>接着您需要手动操作。狂按Enter阅读协议，然后输入yes安装。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>等待安装完毕，在命令行中输入python，看看是否安装成功。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":474,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/07/image-6.png" alt="" class="wp-image-474" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>当出现如图圈出来的信息时，就说明安装成功了。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>按<kbd>CTRL+Z</kbd>退出python。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading {"level":1} --></p>
  <h1>Pytorch编译并安装</h1>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:mdx/warning {"title":"TIP","content":"不想自己编译的可以使用笔者编译好的。下载后导入服务器，直接转到&ldquo;安装&rdquo;一节进行操作。下载链接：https://wwr.lanzoui.com/io6nmrxydzc 请自行解压。"} --></p>
  <blockquote class="wp-block-mdx-warning mdx-warning">
   <p><i class="mdui-icon material-icons">warning</i> TIP<br /><strong>不想自己编译的可以使用笔者编译好的。下载后导入服务器，直接转到“安装”一节进行操作。下载链接：https://wwr.lanzoui.com/io6nmrxydzc 请自行解压。</strong></p>
  </blockquote>
  <p>
   <!-- /wp:mdx/warning --></p>
  <p>
   <!-- wp:heading --></p>
  <h2>编译</h2>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:heading {"level":3} --></p>
  <h3>首先安装一些依赖：</h3>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:enlighter/codeblock {"language":"shell"} --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">sudo apt-get install libopenblas-dev cython3 libatlas-base-dev m4 libblas-dev cmake
sudo apt-get install python3-dev python3-yaml python3-setuptools python3-wheel python3-pillow python3-numpy</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:heading {"level":3} --></p>
  <h3>接着设置基本参数：</h3>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:enlighter/codeblock {"language":"shell"} --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">export NO_CUDA=1
export NO_DISTRIBUTED=1
export NO_MKLDNN=1
export NO_NNPACK=1
export NO_QNNPACK=1</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:mdx/warning {"title":"提示","content":"如果您在后面的操作中发现终端提示该&ldquo;NO_...&rdquo;以弃用，请使用&ldquo;USE_...&rdquo;，那么请输入终端："} --></p>
  <blockquote class="wp-block-mdx-warning mdx-warning">
   <p><i class="mdui-icon material-icons">warning</i> 提示<br /><strong>如果您在后面的操作中发现终端提示该“NO_...”以弃用，请使用“USE_...”，那么请输入终端：</strong></p>
  </blockquote>
  <p>
   <!-- /wp:mdx/warning --></p>
  <p>
   <!-- wp:enlighter/codeblock {"language":"shell"} --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">export USE_CUDA=0
export USE_DISTRIBUTED=0
export USE_MKLDNN=0
export USE_NNPACK=0
export USE_QNNPACK=0</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:heading {"level":3} --></p>
  <h3>安装numpy：</h3>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:enlighter/codeblock {"language":"shell"} --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="shell" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">pip3 install numpy pyyaml</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:mdx/warning {"title":"提示","content":"不装numpy也可以，但是您在使用pytorch的时候将无法支持numpy。"} --></p>
  <blockquote class="wp-block-mdx-warning mdx-warning">
   <p><i class="mdui-icon material-icons">warning</i> 提示<br /><strong>不装numpy也可以，但是您在使用pytorch的时候将无法支持numpy。</strong></p>
  </blockquote>
  <p>
   <!-- /wp:mdx/warning --></p>
  <p>
   <!-- wp:heading {"level":3} --></p>
  <h3>设置交换内存：</h3>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>当您的树莓派内存小于8G的时候，建议设置交换内存。笔者用4G的编译的时候，发现还是内存溢出。这里设置4G的交换内存。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">sudo dd if=/dev/zero of=/swapfile count=4096 bs=1M
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:heading {"level":3} --></p>
  <h3>交换内存设置开机启动：</h3>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">sudo nano /etc/fstab
#在最后一行加入：
/swapfile none swap sw 0 0
#退出保存即可</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:heading {"level":3} --></p>
  <h3>克隆Pytorch库：</h3>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">git clone https://github.com/pytorch/pytorch.git
cd pytorch
git checkout v1.6.0
git submodule update --init  --recursive
git submodule update --remote third_party/protobuf</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>由于网络环境有差异，您可能需要将第4条命令多执行几遍。笔者这里总共大约克隆了2小时QWQ……</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:heading {"level":3} --></p>
  <h3>编译！</h3>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">python3 setup.py bdist_wheel</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>编译过程大约5小时。您可以睡一觉。如果发现意外退出了，一般来说是因为内存不够。试着添加swap内存。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>最后，当您看到如图所示的信息，恭喜，编译成功了！</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":475,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/07/image-7.png" alt="" class="wp-image-475" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:heading --></p>
  <h2>安装</h2>
  <p>
   <!-- /wp:heading --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>安装相对快多了。输入命令（请注意文件名）：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">cd dist
pip3 install torch-1.2.0a0+8554416-cp37-cp37m-linux_aarch64.whl</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>如果出现以下错误：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":476,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/07/image-8.png" alt="" class="wp-image-476" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>不要担心。试着使用其他版本的pip。该pip版本应该是您编译Pytorch时使用的python版本。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>试着输入：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:enlighter/codeblock --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">pip install torch-1.2.0a0+8554416-cp37-cp37m-linux_aarch64.whl</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:image {"align":"center","id":477,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/07/image-9.png" alt="" class="wp-image-477" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>安装成功！打开python试验一下：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":478,"sizeSlug":"full","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-full">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/07/image-10.png" alt="" class="wp-image-478" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>成功导入！至此，安装全部完成！撒花！</p>
  <p>
   <!-- /wp:paragraph --></p>


