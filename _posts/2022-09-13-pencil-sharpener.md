---
title: 小笔记
layout: post
categories: [笔记本, OI]
tags:
  - 杂
  - OI
  - 笔记
---
## 1. 时间复杂度练习

1. 默写 O(n) 的递归快速幂、默写 O(logn) 的递归快速幂，找到区别。

	```cpp
	#include <bits/stdc++.h>
	#define ll long long
	using namespace std;

	/* O(n)的递归快速幂 */
	ll bad_qpow(ll x,ll n){
		if(!(n-1)) return x;
		return bad_qpow(x,n/2)*bad_qpow(x,n/2)*(n%2?x:1);
	}

	/* O(logn)的递归快速幂 */
	ll good_qpow(ll x,ll n){
		if(!(n-1))return x;
		ll res=good_qpow(x,n/2);
		return res*res*(n%2?x:1);
	}

	/* O(logn)的递归快速幂，且常数更优 */
	ll best_qpow(ll x,ll n){
		ll base=x,res=1;
		while(n){
			if(n&1){
				res*=base;
			}
			base*=base;
			n>>=1;
		}
		return res;
	}

	ll x,n;

	int main(){
		cin>>x>>n;
		cout<<bad_qpow(x,n)<<endl;
		cout<<good_qpow(x,n)<<endl;
		cout<<best_qpow(x,n)<<endl;
		return 0;
	}
	```

	区别： $O(n)$ 的快速幂将函数分治后又调用了两次，算了两次相同的值，相当于没优化；而 $O(logn)$ 的快速幂利用空间换时间，把得数保存下来再乘两次。

2. O(nlogn) 的归并排序和 O(n) 的递归快速幂复杂度区别在哪里。

	归并排序：

	```cpp
	void MergeSort(int* arr,int left,int right,int* s){//归并排序递归
		if(right-left<=1){//元素个数小于1，直接返回
			return;
		}
		int mid=left+(right-left)/2;
		MergeSort(arr,left,mid,s);//归并左半部分
		MergeSort(arr,mid,right,s);//归并右半部分
		MergeData(arr,left,mid,right,s);//将当前有序的序列进行归并
		memcpy(arr+left,s+left,sizeof(arr[0])*(right-left));//将归并后的将结果拷贝回原来的数组，为下次归并做准备
	}
	```

	可以看到，对于每一层，不管怎么分治，最终均摊下来每一个元素都要走到；而每次对半分，最多可以分 $logn$ 层。所以总复杂度为 $O(logn)$ 。

	而 $O(n)$ 的递归快速幂虽然也是每次对半分，但是它只是对一个数字进行对半分，并没有遍历什么数组，所以最终的复杂度应该是最后一层每次 `return x` ，返回了 $n$ 遍。

3. 程序阅读第二题订正时间复杂度、说明什么时候是 O(n) 什么时候是 O(nlogn)

	注意原代码：

	```cpp
	void dfs(...){
		...
		if(...){
			return dfs(...n/2...);
		}else if(...){
			return dfs(...n/2...);
		}else{
			...
		}
	}
	```

	注意这里有 `if...else...` 的关系，所以两个 `dfs` 不会同时执行，而回只执行一个。那么执行次数就是 $ n+n/2+n/4+n/8+...+1=2*n$ ，即时间复杂度为 $O(n)$ 。

	如果没有 `if...else...` ，则每次两个 `dfs` 都会执行，每层复杂度 $O(n)$ ，共 $logn$ 层，此时总复杂度为 $O(nlogn)$ 。

## 2. 错题总结

1. **大规模集成电路**的出现，推动了个人计算机的诞生。
2. 一个汉字占两倍的英文字符长度。
3. 5双手套5种颜色，先从5种颜色里选出3种，C(5,3), 对于每一种颜色的手套还可选(左手套和右手套不一样)，对于每种颜色有2种，三种颜色有8种，所以总共80种。

## 3. 组合数学难题

$5$ 双手套，拿三只，恰有一双匹配，方案数多少？（左右有区别）

先选出一个完整的颜色， $C(5,3)=10$ ，再在剩下的所有手套中选出1个， $C(8,1)=8$ 。所以总方案为 $80$ 。