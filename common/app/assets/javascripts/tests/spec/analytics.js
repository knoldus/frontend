define(['../../libs/analytics'], function(analytics) {
    
    describe("Analytics", function() {
       
        beforeEach(function() {
        });

        it("should log a page view", function() {
            sinon.spy(s, 't');
            analytics.logPageView();
            expect(s.t.calledOnce).toBeTruthy();
        });
        
        it("should assign page properties to the Omniture web bug", function() {
            guardian.page.pageType = 'foo'
            guardian.page.blogs = 'bar';
            analytics.setOmnitureProperties();
            expect(s.pageType).toBe('foo'); // sample of a couple of properties
            expect(s.prop25).toBe('bar');
            expect(s.prop11).toBe('');
        });
        
        it("should truncate the page title to 72 characters before logging", function() {
            expect(analytics.truncate('1234567', 3).length).toBe(3);
        });

    })
})

