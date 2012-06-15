var images = require("images_new");
var detect = require("detect_new");

// we should hide debug panel for non-dev environments
var gu_debug = {
    screenHeight: screen.height,
    screenWidth: screen.width,
    windowWidth: window.innerWidth || document.body.offsetWidth || 0,
    windowHeight: window.innerHeight || document.body.offsetHeight || 0,
    layout: detect.getLayoutMode(),
    bandwidth: detect.getConnectionSpeed(),
    battery: detect.getBatteryLevel(),
    pixelratio: detect.getPixelRatio(),
    retina: (detect.getPixelRatio() === 2) ? 'true' : 'false'
};

// hacky workaround for checking if debug is on. todo: fix
var debug = document.getElementById('debug');
if (debug.length) {
    for (var key in gu_debug) {
        document.getElementById(key).innerText = gu_debug[key];
    }
}

// Find and upgrade images.
images.upgrade();
