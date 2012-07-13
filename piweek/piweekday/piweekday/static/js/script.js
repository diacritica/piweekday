/* Author: Kaleidos #CC0000

*/


/* Global gonway  module namespace. */

var Piweek = {};
Piweek.mediaUrl = function(path) {
    return this._mediaUrl + path;
}

Piweek.mediaEvents = [];
Piweek.personEvents = [];
Piweek.twitterEvents = [];
Piweek.codeEvents = [];

Piweek.HomeView = Backbone.View.extend({
    
    el: $('body'),
    
    initialize: function() {
        _.bindAll(this);
    }
});

Piweek.SliderView = Backbone.View.extend({
    
    el: $('.sliderwrapper'),
    
    events: {
        'click a.next': 'SlideRight',
        'click a.prev': 'SlideLeft',
    },
    
    initialize: function() {
        _.bindAll(this,
             'SlideRight',
             'SlideLeft'
            );
        $('.sliderwrapper').append('<a href="#" class="prev">prev</a>', '<a href="#" class="next">next</a>');
    },
    
        //MOve slider right
    SlideRight: function(e) {
        e.preventDefault();
        var target = e.currentTarget;
        var productListSize = ($('.slider li').size() - 1) * 970;
        var ListPosition = this.$('.slider').position();
        var PositionLeft = Math.abs(ListPosition.left);
        this.$('a').removeClass('hidden');
        if((PositionLeft) !== productListSize) {
            $(target).addClass('hidden');
            this.$('.slider').animate({left: '-=970px'}, 'medium', function(){
                console.log ((PositionLeft + 970) + ' |!==| ' +  Math.abs(productListSize));
                if((PositionLeft + 970) !== Math.abs(productListSize)) {
                    $(target).removeClass('hidden');
                }
            });
        } else {
            $(target).addClass('hidden');
        }
    },
    
    //Move slider Left
    SlideLeft: function(e) {
        e.preventDefault();
        var productListSize = ($('.slider li').size() - 3) * 970;
        var target = e.currentTarget;
        var ListPosition = this.$('.slider').position();
        var PositionLeft = Math.abs(ListPosition.left);
        this.$('a').removeClass('hidden');
        if(PositionLeft !== 0) {
            $(target).addClass('hidden');
            this.$('.slider').animate({left: '+=970px'}, 'medium', function(){
                console.log ((PositionLeft - 970) + ' |!==| ' +  Math.abs(productListSize));
                if((PositionLeft - 970) !== 0) {
                    $(target).removeClass('hidden');
                }
            });
        } else {
            $(target).addClass('hidden');
        }
    }
    
});




    Piweek.homeView = new Piweek.HomeView();
    Piweek.sliderView = new Piweek.SliderView();
