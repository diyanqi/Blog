---
title: 友链
icon: fas fa-link
order: 5
---

### 欢迎互挂友链～

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
        ["🍋OIso🔍", "https://www.oiso.cf", "一款为 OIer 和开发者而生的搜索引擎"],
        ["CS Academy Graph Editor", "/app/graph_editor", "在线图论作图工具 源码来自 github.com/Eletary/graph_editor"],
        ["Heyc's Blog", "https://blog.hycqwq.top/", "OIer & SMSer 的垃圾场（？"],
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
    import { init } from 'https://registry.npmmirror.com/@waline/client/3.0.0-alpha.1/files/dist/waline.mjs';
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
        // reaction: true,
        dark: 'body[color-mode="dark"]',
        emoji: [
            '//github.elemecdn.com/@waline/emojis@1.1.0/bilibili',
            '//github.elemecdn.com/@waline/emojis@1.1.0/tw-emoji'
        ],
        locale: {
            placeholder: '记得留下贵站的名称、网址与简介哦～'
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

<script>
    function disableWaline() {
        var styleElement = document.createElement('style');
        var styleContent = `
        #vcomments {
            position: relative;
        }
        #vcomments *:not(.cover) {
            filter: blur(5px);
            pointer-events: none;
        }
        `;
        styleElement.textContent = styleContent;
        styleElement.id = "styleElement";
        var headElement = document.head;
        headElement.appendChild(styleElement);
        var vcommentsCover = document.createElement('div');
        vcommentsCover.id = "vcommentsCover";
        vcommentsCover.innerHTML = `应法规要求，评论系统停止向中国用户开放。<br/><br/><button type="button" class="btn btn-primary cover" aria-label="Update" id="retry">重试</button>`;
        var vcommentsDiv = document.getElementById('vcomments');
        vcommentsDiv.style.position = 'relative'; // 确保vcomments有定位属性
        vcommentsCover.style.position = 'absolute';
        vcommentsCover.style.top = '0'; // 将vcommentsCover显示在vcomments的顶部
        vcommentsCover.style.left = '50%'; // 水平居中
        vcommentsCover.style.textAlign = 'center';
        vcommentsCover.style.transform = 'translate(-50%, 50%)'; // 水平居中
        vcommentsCover.style.zIndex = 999;
        vcommentsCover.setAttribute("class", "cover")
        vcommentsDiv.insertBefore(vcommentsCover, vcommentsDiv.firstChild); // 将vcommentsCover插入到vcomments中的第一个子元素前面

        document.getElementById("retry").onclick = function () {
            checkRegion();
        };
    }

    function checkRegion() {
        const unavaliable_region = ["CN", "TW", "HK", "MO"];
        fetch("https://waline.amzcd.top/ip")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text(); // or use response.json() if the response is JSON
            })
            .then(data => {
                console.log("IP地址：" + data);
                var vcommentElement = document.getElementById("vcommentsCover");
                if (vcommentElement) {
                    vcommentElement.parentNode.removeChild(vcommentElement);
                }
                var styleElement = document.getElementById("styleElement");
                if (styleElement) {
                    styleElement.parentNode.removeChild(styleElement);
                }
                if (unavaliable_region.includes(data)) {
                    // document.getElementById("vcomments").setAttribute("style", "filter: blur(20px);");
                    disableWaline();
                }
            })
            .catch(error => {
                console.error("Fetch error: " + error);
            });
    }

    checkRegion();
</script>