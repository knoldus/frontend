define(['bean', 'bonzo', 'reqwest', 'common'], function(bean, bonzo, reqwest, common) {

    var Discussion = function () {

        var options = {
            'discussionBaseUrl': 'http://discussion.gucode.co.uk/discussion/',
            'commentsPerPage': 20, // can be 20, 30 or 50
            'placeholder': document.getElementById('js-comments')
        };

        var view = {

            addDiscussionToPage: function (html) {
                options.placeholder.innerHTML = html;
                view.addDiscussionCssInTheMostUglyWayImaginable();
            },

            addDiscussionCssInTheMostUglyWayImaginable: function () {
                var css = document.createElement("link");
                css.type = "text/css";
                css.rel = "stylesheet";
                css.href = "http://discussion.gucode.co.uk/static/assets/d2.e621cf35.min.css";
                document.getElementsByTagName("head")[0].appendChild(css);
            }

        };

        var model = {

            requestData: function (shortUrl) {
                var id = shortUrl.replace('http://gu.com/', '');
                reqwest({
                    url: options.discussionBaseUrl + id + '?per_page=' + options.commentsPerPage,
                    type: 'jsonp',
                    jsonpCallback: 'callback',
                    jsonpCallbackName: 'blarg',
                    success: function (json) {
                        if (json.response) {
                            common.mediator.emit('modules:discussion:fetchedComments', json.response);
                        }
                    }
                });
            }

        };

        this.fetch = function (config) {
            if (config.page.commentable) {
                model.requestData(config.page.shortUrl);
            }
        };

        common.mediator.on('modules:discussion:fetchedComments', view.addDiscussionToPage);

    };

    return Discussion;

});