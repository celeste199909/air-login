(function (doc) {
    let htmlEl = doc.querySelector("html");

    // let leftBox = doc.querySelector(".left");

    // 页面加载完成 以屏幕宽度设置根元素字体大小 
    window.onload = function () {
        resetHtmlFontSize();
    }

    // 监听屏幕改变 
    window.onresize = function () {
        resetHtmlFontSize();
    };

    function resetHtmlFontSize() {
        let devicewidth = doc.documentElement.clientWidth;

        if (devicewidth < 2400 && devicewidth > 960) {
            htmlEl.style.fontSize = devicewidth / 80 + "px";
        } else if (devicewidth < 960) {
            // 12 * 80 = 960
            htmlEl.style.fontSize = 12 + "px";
        } else {
            // 30 * 80 = 2400
            htmlEl.style.fontSize = 30 + "px";
        }
    }
})(document);

