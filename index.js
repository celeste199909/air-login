(function (doc) {

    let htmlEl = doc.querySelector("html");
    let wrapperEl = doc.querySelector("#wrapper");

    window.onload = function () {
        reset ();
        wrapperEl.style.backgroundColor = "#fff";
    }

    window.onresize = function () {
        reset ();
    }

    function reset () {
        let bodyWidth = doc.body.clientWidth;
        let bodyHeight = doc.body.clientHeight;
        resetWH(bodyWidth, bodyHeight);

        let wrapperEl = doc.querySelector("#wrapper");
        let wrapperWidth = wrapperEl.clientWidth;
        resetHtmlFontSize(wrapperWidth)
    }

    function resetWH(bodyWidth, bodyHeight) {
        // console.log(screenWidth,screenHeight);
        if (bodyWidth < 768) {
            wrapperEl.style.width = 100 + "vw";
            wrapperEl.style.height = 100 + "vh";
            return;
        };
        // screenWidth / screenHeight < 16 / 9
        if (bodyWidth / bodyHeight <= 16 / 9) {
            wrapperEl.style.width = bodyWidth + "px";
            wrapperEl.style.height = bodyWidth / 16 * 9 + "px";
        } else {
            wrapperEl.style.height = bodyHeight + "px";
            wrapperEl.style.width = bodyHeight * 16 / 9 + "px";
        }
    }

    function resetHtmlFontSize(wrapperWidth) {
        // console.log(wrapperWidth);
        if (wrapperWidth < 960) {
            htmlEl.style.fontSize = 12 + "px";
        } else if (wrapperWidth > 960  && wrapperWidth < 3200) {
            htmlEl.style.fontSize = wrapperWidth / 80 + "px";
        } else {
            htmlEl.style.fontSize = 40 + "px";
        }
    }

})(document);



