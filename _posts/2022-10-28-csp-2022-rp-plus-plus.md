---
title: 'CSP 2022 RP++'
layout: post
categories: [笔记本, 题解]
tags:
  - OI
  - 题解
  - 贪心
  - DP
  - 动态规划
  - 双指针
  - 优化
---
# 电梯之王

## 题目描述

在惠州学院因为电梯数量很少，所以同学们坐电梯需要花钱，并且为了限制你坐电梯浪费盈利时间，学校专门给每一层设置了能坐的最高高度。，所以对每一层有两种元素: 1.花费一元坐电梯 2.能坐到的最高高度(例如给出的高度是X,那么第$i$层能坐到的层数是$[i + 1,i + X]$。但是请注意，因为惠州学院也想要锻炼学生的体魄，电梯不能往楼下坐。现在想要知道，如何最经济实惠坐到每一层。倘若坐不到则输出$-1$。

## 思路

### Level 1 动态规划

考虑 $dp[i]$ 表示走到第 $i$ 层所需的最小花费。~~这样竟然能拿九十分~~

```cpp
#include <bits/stdc++.h>
using namespace std;
const int maxn=1e7+10;
int dp[maxn];
int a[maxn];
int n;

inline int read()
{
    int x=0,f=1;
    char ch=getchar();
    while(ch<'0'||ch>'9')
    {
        if(ch=='-')
            f=-1;
        ch=getchar();
    }
    while(ch>='0' && ch<='9')
        x=x*10+ch-'0',ch=getchar();
    return x*f;
}

void write(int x)
{
    if(x<0)
        putchar('-'),x=-x;
    if(x>9)
        write(x/10);
    putchar(x%10+'0');
    return;
}

void init(){
    for(int i=0;i<maxn;i++){
        dp[i]=INT_MAX;
    }
}
int main(){
    n=read();
    init();
    for(int i=1;i<=n;i++){
        a[i]=read();
    }
    int last=1,cnt=1;
    int times=1;
    int lasti=-1;
    int runtime=0;
    cout<<"0\n";
    for(int i=1;i<n;){
        runtime++;
        if(runtime>n*3){
            break;
        }
        int maxpos=-1,pos;
        for(int j=i+1;j<=i+a[i];j++){
            if(j+a[j]>maxpos){
                maxpos=j+a[j];
                pos=j;
            }
        }
        for(int j=last+1;j<=i+a[i];j++){
            cout<<cnt<<endl;
            times++;
        }
        cnt++;
        last=i+a[i];
        i=pos;
        lasti=i;
    }
    return 0;
}
```

### Level 2 贪心

第一层电梯肯定是要坐的。那么现在第一层电梯就能到达一定范围的层数。利用贪心的思想，我们要尽可能利用现有的这些能到达的楼层，跳到更高的楼层。所以我们在这些范围内寻找所能到达楼层的最高值。那么我们又得到了一个新的范围。在这个范围内再次进行如上操作。

值得注意的是，两个范围很可能有重叠部分。为了保证严格的 $O(n)$ ，可以跳过重叠的部分。因为重叠部分里能到达的最高楼层一定小于当前选择的楼层。

~~好狼狈的代码：~~

```cpp
#include <bits/stdc++.h>
using namespace std;
const int maxn=1e7+10;
int dp[maxn];
int a[maxn];
int n;

inline int read()
{
    int x=0,f=1;
    char ch=getchar();
    while(ch<'0'||ch>'9')
    {
        if(ch=='-')
            f=-1;
        ch=getchar();
    }
    while(ch>='0' && ch<='9')
        x=x*10+ch-'0',ch=getchar();
    return x*f;
}

void write(int x)
{
    if(x<0)
        putchar('-'),x=-x;
    if(x>9)
        write(x/10);
    putchar(x%10+'0');
    return;
}

void init(){
    for(int i=0;i<maxn;i++){
        dp[i]=INT_MAX;
    }
}
int main(){
    n=read();
    init();
    for(int i=1;i<=n;i++){
        a[i]=read();
    }
    int last=1,cnt=1;
    int times=1;
    int lasti=-1;
    int runtime=0;
    cout<<"0\n";
    for(int i=1;i<n;){
        runtime++;
        if(runtime>n*3){
            break;
        }
        int maxpos=-1,pos;
        for(int j=i+1;j<=i+a[i];j++){
            if(j+a[j]>maxpos){
                maxpos=j+a[j];
                pos=j;
            }
        }
        for(int j=last+1;j<=i+a[i];j++){
            write(cnt);
            putchar('\n');
            times++;
        }
        cnt++;
        last=i+a[i];
        i=pos;
        lasti=i;
    }
    return 0;
}
```

# 元素

## 题目描述

给你 nn 个元素,每个元素有一个坐标 $(x, y)$ ,现在想让你求出有多少三元组 $(i,j,k)$ ,满足$ 2x_j = x_i + x_k$ 并且 $2y_j = y_i + y_k$ 。

## 思路

均摊 $O(n^2)$ 的算法。枚举前两个坐标，然后寻找第三个坐标。注意，当我们把原坐标排序后，寻找的第三个坐标也是有序的，不必要全部从头到尾地查找。

## 代码

```cpp
#include <bits/stdc++.h>
using namespace std;
int n;
const int maxn=1e9;
inline int read()
{
    int x=0,f=1;
    char ch=getchar();
    while(ch<'0'||ch>'9')
    {
        if(ch=='-')
            f=-1;
        ch=getchar();
    }
    while(ch>='0' && ch<='9')
        x=x*10+ch-'0',ch=getchar();
    return x*f;
}

void write(int x)
{
    if(x<0)
        putchar('-'),x=-x;
    if(x>9)
        write(x/10);
    putchar(x%10+'0');
    return;
}

map<pair<int,int>,int>bk,id;
map<int,int>getpos;
struct node{
    int x,y;
}a[10010];
bool cmp(node x,node y){
    if(x.x==y.x){
        return x.y<y.y;
    }else{
        return x.x<y.x;
    }
}
int ans=0;
int main(){
    n=read();
    for(int i=1;i<=n;i++){
        a[i].x=read(),a[i].y=read();
    }
    sort(a+1,a+1+n,cmp);
    for(int i=1;i<=n;i++){
        bk[{a[i].x,a[i].y}]++;
        id[{a[i].x,a[i].y}]=i;
        if(getpos[a[i].x]==0){
            getpos[a[i].x]=i;
        }
    }
    for(int i=1;i<=n;i++){
        int nowpos=i+2;
        for(int j=i+1;j<=n;j++){
            int newx=a[j].x*2-a[i].x;
            int newy=a[j].y*2-a[i].y;
            for(;nowpos<=n;nowpos++){
                if(a[nowpos].x<newx){
                    continue;
                }else if(a[nowpos].x>newx){
                    break;
                }else{
                    if(a[nowpos].y<newy){
                        continue;
                    }else if(a[nowpos].y>newy){
                        break;
                    }
                    if(a[nowpos].y==newy){
                        ans++;
                    }
                }
            }
        }
    }
    write(ans);
    return 0;
}
```

# 搜索

## 题目描述

$xyx$ 神仙来到了一个神奇的国度,这个国度由 $n$ 个相邻的城市组成.对于某个特定的城市 $i$,他有一个特殊的高度 $h_i$
 .但是 $xyx$ 神仙喜欢一些特殊排列的城市高度.而且由于 $xyx$ 是神仙,所以他可以选择若干段不相交的区间 $[l,r]$ 并且将这个区间内的城市按照高度从小到大排序.现在 $xyx$神仙想知道,他能不能把面前的城市排列成他想要的高度排列.

## 思路

如果有一段序列，想要它最终降序：如果原本就是降序的，可以实现；如果原来是升序的，就不行了。

所以我们考虑使用双指针，先看目标序列，对于每一段上升的区间，查看原来的区间是否恰好包含所有的这些数。如果否，就是 `no` 。

## 代码
```cpp
#include <bits/stdc++.h>
#define int long long
using namespace std;
const int maxn=1e6+10;
int t,n,a[maxn]={},b[maxn]={};
signed main(){
    cin>>t;
    while(t--){
        cin>>n;
        for(int i=1;i<=n;i++){
            cin>>a[i];
        }
        for(int i=1;i<=n;i++){
            cin>>b[i];
        }
        int i=1;
        bool flag=1;
        while(i<=n){
            map <int,int> sto;
            for(;b[i]>=b[i-1]&&i<=n;i++){
                sto[b[i]]++;
                sto[a[i]]--;
            }
            for(auto f:sto){
                if(f.second!=0){
                    flag=0;
                    break;
                }
            }
            b[i-1]=-1;
        }
        cout<<(flag?"yes\n":"no\n");
    }
    return 0;
}
```