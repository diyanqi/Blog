---
title: Lab
icon: fas fa-flask
order: 5
---

### 这是我的 ~~核试验场~~ 实验室，欢迎参观这些有意思的项目！

<div class="row row-cols-1 row-cols-md-2 row-cols-xl-2 g-4 mb-4" id="showPlace">
    
</div>

<script>
    var list = [
        ["🍋OIso🔍", "https://www.oiso.cf", "一款为 OIer 和开发者而生的搜索引擎"],
        ["CS Academy 图论画图", "/"]
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
            placeholder: '你猜我的评论区在等待谁？（留下邮箱可收取回复通知）'
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