// load polyfills if browser is ancient
var e = {};
if (!guardian.config.isModernBrowser) {
    define([guardian.js.modules.guardianUtils, "qwery", "$dom"], function(utils, qwery, $dom) {
        e.g = utils.init(qwery, $dom);
    });
} else {
    define([guardian.js.modules.guardianUtils], function(utils) {
        e.g = utils.init();
    });
}

exports.g = e.g;