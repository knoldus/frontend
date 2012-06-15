var $g = require('g_new').g

// hack-tastic

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

// set up tests for placement of "more on story" packages
var urlParams = $g.getUrlVars();

if (urlParams.mode) {
    var mode = parseInt(urlParams.mode);
    if (mode >= 1 && mode <= 6) { // limit to our 6 test cases for now
        createCookie("moreMode", mode, 100);
    } else { // anything else resets it
        eraseCookie("moreMode");
    }
}

