---
layout: post
status: publish
published: true
title: CloudFlare 自选IP测试
author:
  display_name: dignite
  login: dignite
  email: diyanqi07@gmail.com
  url: https://www.amzcd.top
author_login: diyanqi
author_email: diyanqi07@gmail.com
author_url: https://www.amzcd.top
wordpress_id: 191
wordpress_url: https://www.amzcd.top/?p=191
date: '2021-06-01 19:12:32 +0800'
date_gmt: '2021-06-01 11:12:32 +0800'
categories: [实验室, 实战]
tags:
- Python
- cloudflare
- cf
- 自选ip
- ping
comments: []
---



  <p>
   <!-- wp:quote --></p>
  <blockquote class="wp-block-quote">
   <p>在搭建<code>*2**yN</code>服务器时，因反向代理需要用到CF的自选IP，在网上搜寻发现有很多IP都已失效了。于是自己搞了个代码测试了一下，供大家使用。</p>
  </blockquote>
  <p>
   <!-- /wp:quote --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>首先进入CloudFlare的官方IP list：<a href="https://www.cloudflare.com/zh-cn/ips/">IP Ranges | Cloudflare</a></p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:image {"align":"center","id":192,"width":471,"height":305,"sizeSlug":"large","linkDestination":"none"} --></p>
  <div class="wp-block-image">
   <figure class="aligncenter size-large is-resized">
    <img src="https://www.amzcd.top/wp-content/uploads/2021/06/image.png" alt="" class="wp-image-192" width="471" height="305" />
   </figure>
  </div>
  <p>
   <!-- /wp:image --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>您可以在这里看到CF最近更新的IP地址库。当然，您也可以点击<a href="https://www.cloudflare.com/ips-v4">IPv4 text list</a>以及<a href="https://www.cloudflare.com/ips-v6">IPv6 text list</a>来查看以txt形式呈现的IP列表。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>考虑到IPv4普及度较高，这里就以IPv4进行测试。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>把IP地址都复制下来，编辑进代码里：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:enlighter/codeblock {"language":"python"} --></p>
  <pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">from ping3 import ping

def p(ip):
    ip_address = ip
    response = ping(ip_address)
    if response is not None:
        delay = int(response * 1000)
        return delay
    else:
        return 2333


l=[
&quot;173.245.48.0/20&quot;,
&quot;103.21.244.0/22&quot;,
&quot;103.22.200.0/22&quot;,
&quot;103.31.4.0/22&quot;,
&quot;141.101.64.0/18&quot;,
&quot;108.162.192.0/18&quot;,
&quot;190.93.240.0/20&quot;,
&quot;188.114.96.0/20&quot;,
&quot;197.234.240.0/22&quot;,
&quot;198.41.128.0/17&quot;,
&quot;162.158.0.0/15&quot;,
&quot;172.64.0.0/13&quot;,
&quot;131.0.72.0/22&quot;,
&quot;104.16.0.0/13&quot;,
&quot;104.24.0.0/14&quot;
]

for i in l:
    root=i[:i.rfind(&quot;.&quot;)]+'.'
    j=0
    while j&lt;=int(i[i.find(&quot;/&quot;)+1:]):
        j+=1
        b = p(str(root)+str(j))
        if(b==2333):
            print(str(root)+str(j),&quot;&times;&quot;)
        else:
            print(str(root)+str(j),b)</pre>
  <p>
   <!-- /wp:enlighter/codeblock --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>然后慢慢运行。笔者本地的网络运营商是<strong>电信</strong>，一下数据可供您参考：</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:code --></p>
  <pre class="wp-block-code"><code>173.245.48.1 184
173.245.48.2 &times;
173.245.48.3 &times;
173.245.48.4 &times;
173.245.48.5 &times;
173.245.48.6 &times;
173.245.48.7 &times;
173.245.48.8 &times;
173.245.48.9 &times;
173.245.48.10 &times;
173.245.48.11 &times;
173.245.48.12 &times;
173.245.48.13 &times;
173.245.48.14 &times;
173.245.48.15 &times;
173.245.48.16 &times;
173.245.48.17 &times;
173.245.48.18 &times;
173.245.48.19 &times;
173.245.48.20 &times;
173.245.48.21 &times;
103.21.244.1 221
103.21.244.2 254
103.21.244.3 237
103.21.244.4 261
103.21.244.5 221
103.21.244.6 240
103.21.244.7 218
103.21.244.8 240
103.21.244.9 238
103.21.244.10 258
103.21.244.11 224
103.21.244.12 241
103.21.244.13 238
103.21.244.14 287
103.21.244.15 240
103.21.244.16 238
103.21.244.17 239
103.21.244.18 240
103.21.244.19 247
103.21.244.20 242
103.21.244.21 261
103.21.244.22 279
103.21.244.23 238
103.22.200.1 155
103.22.200.2 &times;
103.22.200.3 &times;
103.22.200.4 &times;
103.22.200.5 &times;
103.22.200.6 &times;
103.22.200.7 &times;
103.22.200.8 &times;
103.22.200.9 &times;
103.22.200.10 &times;
103.22.200.11 &times;
103.22.200.12 &times;
103.22.200.13 &times;
103.22.200.14 &times;
103.22.200.15 &times;
103.22.200.16 &times;
103.22.200.17 &times;
103.22.200.18 &times;
103.22.200.19 &times;
103.22.200.20 &times;
103.22.200.21 &times;
103.22.200.22 &times;
103.22.200.23 &times;
103.31.4.1 &times;
103.31.4.2 &times;
103.31.4.3 &times;
103.31.4.4 &times;
103.31.4.5 &times;
103.31.4.6 &times;
103.31.4.7 &times;
103.31.4.8 &times;
103.31.4.9 &times;
103.31.4.10 &times;
103.31.4.11 &times;
103.31.4.12 &times;
103.31.4.13 &times;
103.31.4.14 &times;
103.31.4.15 &times;
103.31.4.16 &times;
103.31.4.17 &times;
103.31.4.18 &times;
103.31.4.19 &times;
103.31.4.20 &times;
103.31.4.21 &times;
103.31.4.22 &times;
103.31.4.23 &times;
141.101.64.1 1587
141.101.64.2 &times;
141.101.64.3 &times;
141.101.64.4 270
141.101.64.5 257
141.101.64.6 264
141.101.64.7 237
141.101.64.8 268
141.101.64.9 &times;
141.101.64.10 &times;
141.101.64.11 256
141.101.64.12 264
141.101.64.13 267
141.101.64.14 258
141.101.64.15 253
141.101.64.16 251
141.101.64.17 261
141.101.64.18 255
141.101.64.19 &times;
108.162.192.1 156
108.162.192.2 &times;
108.162.192.3 168
108.162.192.4 149
108.162.192.5 156
108.162.192.6 169
108.162.192.7 155
108.162.192.8 151
108.162.192.9 162
108.162.192.10 141
108.162.192.11 143
108.162.192.12 153
108.162.192.13 148
108.162.192.14 186
108.162.192.15 155
108.162.192.16 166
108.162.192.17 170
108.162.192.18 165
108.162.192.19 143
190.93.240.1 &times;
190.93.240.2 &times;
190.93.240.3 &times;
190.93.240.4 &times;
190.93.240.5 &times;
190.93.240.6 &times;
190.93.240.7 &times;
190.93.240.8 &times;
190.93.240.9 &times;
190.93.240.10 &times;
190.93.240.11 &times;
190.93.240.12 &times;
190.93.240.13 &times;
190.93.240.14 &times;
190.93.240.15 &times;
190.93.240.16 &times;
190.93.240.17 &times;
190.93.240.18 &times;
190.93.240.19 &times;
190.93.240.20 &times;
190.93.240.21 &times;
188.114.96.1 &times;
188.114.96.2 &times;
188.114.96.3 &times;
188.114.96.4 &times;
188.114.96.5 &times;
188.114.96.6 &times;
188.114.96.7 &times;
188.114.96.8 &times;
188.114.96.9 &times;
188.114.96.10 &times;
188.114.96.11 &times;
188.114.96.12 &times;
188.114.96.13 &times;
188.114.96.14 &times;
188.114.96.15 &times;
188.114.96.16 &times;
188.114.96.17 &times;
188.114.96.18 &times;
188.114.96.19 &times;
188.114.96.20 &times;
188.114.96.21 &times;
197.234.240.1 394
197.234.240.2 451
197.234.240.3 431
197.234.240.4 412
197.234.240.5 459
197.234.240.6 &times;
197.234.240.7 &times;
197.234.240.8 &times;
197.234.240.9 &times;
197.234.240.10 &times;
197.234.240.11 &times;
197.234.240.12 &times;
197.234.240.13 &times;
197.234.240.14 &times;
197.234.240.15 &times;
197.234.240.16 &times;
197.234.240.17 &times;
197.234.240.18 &times;
197.234.240.19 &times;
197.234.240.20 &times;
197.234.240.21 &times;
197.234.240.22 &times;
197.234.240.23 &times;
198.41.128.1 &times;
198.41.128.2 &times;
198.41.128.3 &times;
198.41.128.4 &times;
198.41.128.5 &times;
198.41.128.6 &times;
198.41.128.7 &times;
198.41.128.8 &times;
198.41.128.9 &times;
198.41.128.10 &times;
198.41.128.11 &times;
198.41.128.12 &times;
198.41.128.13 &times;
198.41.128.14 &times;
198.41.128.15 &times;
198.41.128.16 &times;
198.41.128.17 &times;
198.41.128.18 &times;
162.158.0.1 261
162.158.0.2 260
162.158.0.3 319
162.158.0.4 &times;
162.158.0.5 &times;
162.158.0.6 &times;
162.158.0.7 &times;
162.158.0.8 &times;
162.158.0.9 &times;
162.158.0.10 &times;
162.158.0.11 &times;
162.158.0.12 &times;
162.158.0.13 &times;
162.158.0.14 &times;
162.158.0.15 &times;
162.158.0.16 &times;
172.64.0.1 168
172.64.0.2 153
172.64.0.3 166
172.64.0.4 160
172.64.0.5 162
172.64.0.6 &times;
172.64.0.7 149
172.64.0.8 &times;
172.64.0.9 161
172.64.0.10 &times;
172.64.0.11 &times;
172.64.0.12 164
172.64.0.13 173
172.64.0.14 149
131.0.72.1 &times;
131.0.72.2 &times;
131.0.72.3 &times;
131.0.72.4 &times;
131.0.72.5 &times;
131.0.72.6 &times;
131.0.72.7 &times;
131.0.72.8 &times;
131.0.72.9 &times;
131.0.72.10 &times;
131.0.72.11 &times;
131.0.72.12 &times;
131.0.72.13 &times;
131.0.72.14 &times;
131.0.72.15 &times;
131.0.72.16 &times;
131.0.72.17 &times;
131.0.72.18 &times;
131.0.72.19 &times;
131.0.72.20 &times;
131.0.72.21 &times;
131.0.72.22 &times;
131.0.72.23 &times;
104.16.0.1 146
104.16.0.2 159
104.16.0.3 149
104.16.0.4 172
104.16.0.5 158
104.16.0.6 154
104.16.0.7 &times;
104.16.0.8 &times;
104.16.0.9 148
104.16.0.10 147
104.16.0.11 145
104.16.0.12 &times;
104.16.0.13 540
104.16.0.14 598
104.24.0.1 154
104.24.0.2 247
104.24.0.3 704
104.24.0.4 291
104.24.0.5 155
104.24.0.6 157
104.24.0.7 683
104.24.0.8 159
104.24.0.9 169
104.24.0.10 177
104.24.0.11 187
104.24.0.12 191
104.24.0.13 148
104.24.0.14 172
104.24.0.15 163
[Finished in 794.4s]</code></pre>
  <p>
   <!-- /wp:code --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>其中，IP地址后的数字为ping延迟时间，单位是<code>ms</code>。打<code>&times;</code>的是ping不通的，可能是被墙了。</p>
  <p>
   <!-- /wp:paragraph --></p>
  <p>
   <!-- wp:paragraph --></p>
  <p>值得一提的是，并不是所有能ping通的IP地址都可用作自选IP，笔者测试了几个，如<code>104.24.0.*</code>和<code>108.162.192.*</code>都不可做<code>*2**yN</code>的服务器自选IP。</p>
  <p>
   <!-- /wp:paragraph --></p>


