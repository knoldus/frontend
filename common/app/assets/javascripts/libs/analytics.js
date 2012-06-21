s_account = guardian.page.omnitureAccount;

define([
    'http://static.guim.co.uk/static/ad0511f704894b072867e61615a7d577d265dd03/common/scripts/omniture-H.24.1.1.js',
    guardian.page.ophanScript,
    guardian.js.modules.detect,
    "bean"
    ],
    function (omniture, ophan, detect, bean) {

        var Omniture = {
          
            truncate: function(string, n) {
                return (string.length > n) ? string.substring(0, n) : string;
            },
        
            getPageProperty: function(property) {
                return guardian.page[property] || '';
            },

            setOmnitureProperties: function() {
                
                s.linkInternalFilters += ',localhost,gucode.co.uk,gucode.com,guardiannews.com';
                
                s.pageName  = this.truncate((guardian.page.webTitle || '').trim(), 72) +
                                ':' + (guardian.page.contentType || '') + ':' + (guardian.page.pageCode || '');
                s.prop30    = (guardian.page.webTitle) ? 'content' : 'non-content';
                
                s.prop48    = detect.getConnectionSpeed();
                s.prop56    = detect.getLayoutMode();
            
                var mappings = {
                       prop9:    'contentType',
                       pageType: 'pageType',
                       channel:  'section',
                       prop4:    'keywords',
                       prop6:    'author',
                       prop8:    'pageCode',
                       prop10:   'tones',
                       prop11:   'section',
                       prop13:   'series',
                       prop25:   'blogs',
                       prop14:   'buildNumber',
                       prop47:   'edition'  
                };

                for (var p in mappings) { 
                    s[p] = this.getPageProperty(mappings[p]);;
                }

            },

            logPageView: function() {
                s.t();
            }
        
        }

        return Omniture;
    }
)

/*
        function findComponentName(element, trackingName){
            var tag = element.tagName.toLowerCase();
            if (tag === 'body') {
                return trackingName;
            }
            var componentName = element.getAttribute("data-link-name");
            if (componentName) {
                if (trackingName == '') {
                    trackingName = componentName
                } else {
                    trackingName = componentName + ' | ' + trackingName;
                }
            }

            //TODO parentNode is not cross browser compatible
            return findComponentName(element.parentNode, trackingName)
        }

        function isInsideLink(element) {
            var tagName = element.tagName.toLowerCase();
            if (tagName == 'body') return false;
            if (tagName == 'a') return true;

            //TODO parentNode is not cross browser compatible
            return isInsideLink(element.parentNode);
        }

        bean.add(document.body, "click", function(event){

            var element = event.target;
            if (!isInsideLink(element)) {
                return;
            }
            var componentName = guardian.page.contentType + " | " + findComponentName(element, '');

            var isAjaxLink = element.getAttribute("data-is-ajax");

            var linkHref = element.getAttribute('href');
            var shouldDelay = (linkHref && (linkHref.indexOf('#') === 0 || linkHref.indexOf('javascript') === 0)) ? true : this;
            if (isAjaxLink == "true") {
                shouldDelay = false;
            }
            s.tl(shouldDelay,'o',componentName);
        });

        });
*/

//TODO still need to figure out what to do with this data
//        s.server='02';                            NOT SURE WE CAN DO THIS AT THE MOMENT
//        s.prop2='GUID:(none)';
//
//
//        s.prop3= "GU.co.uk";                     PUBLICATION
//        s.prop5 = "Not commercially useful";
//        s.prop7 = "12-May-22";
//        s.prop30 = "content";
//        s.prop42 = "News";                       NO HANDLE ONTO ZONE IN API
//        s.prop47 = "UK";
//
//        s.hier2="GU/News/UK news/Crime";
//
//        s.eVar23="";                             USED FOR COMPETITION SUBMISSION
