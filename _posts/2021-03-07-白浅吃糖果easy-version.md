---
layout: post
status: publish
published: true
title: 白浅吃糖果(easy version)
author:
  display_name: dignite
  login: dignite
  email: diyanqi07@gmail.com
  url: https://www.amzcd.top
author_login: diyanqi
author_email: diyanqi07@gmail.com
author_url: https://www.amzcd.top
wordpress_id: 62
wordpress_url: https://blog.amzcd.top:32323/?p=62
date: '2021-03-07 09:15:43 +0800'
date_gmt: '2021-03-07 01:15:43 +0800'
categories: [笔记本, 题解]
tags:
- 题解
- 计蒜客
- OI
comments:
- id: 5
  author: jfskk
  author_email: 1937362845@qq.com
  author_url: https://studio.amzcd.top
  date: '2021-04-24 11:12:28 +0800'
  date_gmt: '2021-04-24 03:12:28 +0800'
  content: 正解
---
<!-- wp:heading -->

## 描述

<!-- /wp:heading -->

<!-- wp:paragraph -->

白浅喜欢吃糖，有一天她到了一个可以免费吃糖果的游乐园。游乐园摆放着一排共n个糖果，对于任意的i(1<=i<n-1),第i个糖果与第i+1个糖果相邻。第i个糖果具有一个甜度值ai。妈妈说吃甜食太多了会得蛀牙，所以白浅吃的糖果的甜度值总和不能超过k。她可以以任意的顺序吃糖，请问她最多能吃多少个糖果？

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 输入

<!-- /wp:heading -->

<!-- wp:paragraph -->

第一行给出两个正整数n，k (1<=n<=2e5,1<=k<=1e9)，意义如题面所描述第二行有n个整数，分别代表每一个糖果的甜度值a(1<=a<=1e9)

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 输出

<!-- /wp:heading -->

<!-- wp:paragraph -->

输出一行一个整数代表白浅最多可以吃掉的糖果数。

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 输入样例 1&nbsp;

<!-- /wp:heading -->

<!-- wp:preformatted -->

```
3 5
2 4 2
```

<!-- /wp:preformatted -->

<!-- wp:heading -->

## 输出样例 1

<!-- /wp:heading -->

<!-- wp:preformatted -->

```
2
```

<!-- /wp:preformatted -->

<!-- wp:separator -->

* * *

<!-- /wp:separator --></p>

<!-- wp:heading -->

## 基本思路

<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->

1.  对于这道题，显而易见，可以以**任意的顺序**拿糖；也就是说，可以**不连续地**挑选其中的几颗糖。
2.  对于每一颗糖来说，都有一个甜度值。所有被挑选出来的糖的甜度值必须小于`k`，且挑出的糖要尽量多。
3.  可以想到，就是把甜度值从小到大排列出来，从前往后选糖直到甜度值之和大于`k`为止。

<!-- /wp:list -->

<!-- wp:more -->

<!--more-->

<!-- /wp:more -->

<!-- wp:separator -->

* * *

<!-- /wp:separator --></p>

<!-- wp:heading -->

## 代码实现

<!-- /wp:heading -->

<!-- wp:code -->

    #include<bits/stdc++.h>
    using namespace std;
    long long n,k;
    long long a&#91;200005];
    long long cnt=0;
    long long sum=0;
    int main(){
    	cin>>n>>k;
    	for(long long i=1;i<=n;i++){
    		cin>>a&#91;i];
    	}
    	sort(a+1,a+1+n);
    	for(long long i=1;i<=n;i++){
    		if(sum+a&#91;i]>k)break;
    		else{
    			cnt++;
    			sum+=a&#91;i];
    		}
    	}
    	cout<<cnt;
    	return 0;
    }

<!-- /wp:code -->

<!-- wp:mdx/warning {"title":"注意事项","content":"请注意数据范围：n，k (1\u003c=n\u003c=2e5,1\u003c=k\u003c=1e9)。所以变量可以使用long long，数组也要开到2e5。"} -->

> _warning_ 注意事项
> **请注意数据范围：n，k (1<=n<=2e5,1<=k<=1e9)。所以变量可以使用long long，数组也要开到2e5。**

<!-- /wp:mdx/warning -->
