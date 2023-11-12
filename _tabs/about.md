---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

> Hi~👋 欢迎访问我的博客！
{: .prompt-tip }

## 我是谁

来自浙江 zz ，事一名高中生，平时有兴趣会开发一些小程序。

退役 OI 选手，正在专心学习文化课。兴趣爱好是程序设计。

## 这是什么

本站用以记录写代码的经验、学习心得及分享生活。体验生活点滴，记录学习心得；分享个人感悟，弘扬社会正气。若有纰漏，望您指出，我将不胜感激。

本站多数的原创文章均采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/ "一个著作协议") 协议进行许可。翻译及转载文章不享受著作权利。

本站使用 Cookies 来改善浏览体验（仅用作评论区身份验证）。如果您不同意，可以退出本站。

使用 [Chirpy](https://chirpy.cotes.page/ "一个博客主题") 主题，由 [Jekyll](https://jekyllrb.com/ "一个博客框架") 构建。

> 本站点于 2022 年 3 月 20 日由 Wordpress 迁移至 Jekyll ，故在此之前的文章可能会出现图片丢失或格式混乱的情况。
{: .prompt-info }

## 我在做什么

不定期维护 [OIso](https://www.oiso.cf/ "一个搜索引擎") 及其相关项目，还有各种小程序的开发。

> 如果您觉得本小站对您有所帮助，可以前往我的[爱发电主页](https://afdian.net/a/diyanqi "一个赞助平台")为我发电 ∠( ᐛ 」∠)＿
{: .prompt-info }

## 隐私政策

本站与 Microsoft Clarity 和 Microsoft Advertising 合作，通过行为指标、热图和会话重播来捕获您使用本站的方式以及与本站的互动，从而改进本站的浏览体验。我们使用第一和第三方 cookie 及其他跟踪技术获取网站使用数据，以确定本站的受欢迎程度和在线活动。此外，我们还将此信息用于网站优化、欺诈/安全目的和广告。有关 Microsoft 如何收集和使用您的数据的详细信息，请访问 [Microsoft 隐私声明](https://privacy.microsoft.com/privacystatement)。

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
            placeholder: '欢迎来小破站歇脚，留点足迹罢……'
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