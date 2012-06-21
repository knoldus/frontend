// mock detect object
define([], function(){
    return {
        speed: 'slow',
        getLayoutMode: function() { return this.speed; },
        getConnectionSpeed: function(){ return 1; }
    }
});
