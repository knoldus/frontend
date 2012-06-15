// show comments
if (guardian.page.commentable) {
    define('discussion', [guardian.js.modules.fetchDiscussion,
        guardian.js.modules.discussionBinder],
        function(discussion, discussionBinder) {

            // fetch comments html
            discussion.fetchCommentsForContent(
                guardian.page.shortUrl,
                guardian.config.discussion.numCommentsPerPage,
                1, // pageOffset
                discussionBinder.renderDiscussion // callback to send HTML output to
            );

        }
    );
}