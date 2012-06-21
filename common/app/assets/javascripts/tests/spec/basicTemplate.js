define(['../../libs/basicTemplate'], function(template) {
    
    describe("Basic template", function() {
        
        it("should iterpolate a string", function(){
            expect(template.format('{0}', 'foo')).toBe('foo');
        });
        
        it("should iterpolate a string with multiple arguments", function(){
            expect(template.format('{0} {1}', 'foo', 'bar')).toBe('foo bar');
        });

   })
})
