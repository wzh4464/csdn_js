// ==UserScript==
// @name         CSDN复制
// @version      1.0
// @description  CSDN
// @author       Zihan
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// ==/UserScript==

(function() {
    'use strict';

    let codes = document.querySelectorAll("code");
    codes.forEach(c => {
        c.contentEditable = "true";
    });
})();

// from Zhou Qiluo