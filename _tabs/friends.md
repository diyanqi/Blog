---
title: 友链
icon: fas fa-link
order: 5
---

### 欢迎互挂友链！可以在下方申请，我会第一时间回复您的！

<div class="row row-cols-1 row-cols-md-2 row-cols-xl-2 g-4 mb-4" id="showPlace">
    
</div>

<script>
    var list = [
        ["Tobylai的小站", "https://tobylai.blog.luogu.org/", "冷冻的罗非鱼"],
        ["Lotuses's Blog", "https://www.lotuses.cn/", "Deserted World"],
        ["zhoulingyu的小站", "https://www.luogu.com.cn/blog/zhoulingyu/", "当神已无能为力，那便是魔渡众生"],
        ["__KrNalty__ 的小窝 ~", "https://www.luogu.com.cn/blog/LuoguBeiChe/", "星星之火，可以燎原"],
        ["Nano_core の 小窝~", "https://www.luogu.com.cn/blog/YinWeiLove/", "这个家伙很勤快，什么都留下了"],
        ["没有楼的楼长", "https://blog.imlzhyt.top/", "没有楼的楼长的咕咕咕博客"],
    ];
    // 定义一个随机排序函数
    function randomSort() {
        return 0.5 - Math.random();
    }

    // 对列表进行随机排序
    const Links = list.sort(randomSort);

    const showPlace = document.getElementById("showPlace");
    for (i in Links) {
        showPlace.innerHTML += `<div class="col">
            <a href="${Links[i][1]}" class="card post-preview h-100" target="_blank">
                <div class="card-body"> <em class="small">${Links[i][1]}</em>
                    <h4 class="pt-0 my-2" data-toc-skip="">${Links[i][0]}</h4>
                    <div class="text-muted small">
                        <p>${Links[i][2]}</p>
                    </div>
                </div>
            </a>
        </div>`;
    }
</script>

以上链接随机排序，每次刷新都会不一样～

---

<div id="vcomments"></div>
<script type="module">
    import { init } from 'https://github.elemecdn.com/@waline/client/dist/waline.mjs';
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const bodyElement = document.getElementsByTagName('body')[0];
    const htmlElement = document.getElementsByTagName('html')[0];
    function syncColorMode() {
        const datamode = htmlElement.getAttribute('data-mode');
        if (datamode) {
            bodyElement.setAttribute("color-mode", datamode);
        } else {
            if (darkModeMediaQuery.matches) {
                bodyElement.setAttribute("color-mode", "dark");
            } else {
                bodyElement.setAttribute("color-mode", "light");
            }
        }
    }
    syncColorMode();
    init({
        el: '#vcomments',
        serverURL: 'https://waline.amzcd.top',
        reaction: true,
        dark: 'body[color-mode="dark"]',
        emoji: [
            '//github.elemecdn.com/@waline/emojis@1.1.0/bilibili',
            '//github.elemecdn.com/@waline/emojis@1.1.0/tw-emoji'
        ],
        locale: {
            placeholder: '欢迎互挂友链！记得备注您的博客地址、名称和标语（留下邮箱可收取回复通知）！'
        },
        turnstileKey: "0x4AAAAAAAFWv6PMNbfWlJDz"
    });
    darkModeMediaQuery.addListener((event) => {
        syncColorMode();
    });
    const observer = new MutationObserver((mutationsList) => {
        syncColorMode();
    });
    observer.observe(htmlElement, { attributes: true, attributeOldValue: true });
</script>
