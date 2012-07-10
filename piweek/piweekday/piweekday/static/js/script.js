/* Author: Kaleidos #CC0000

*/


/* Global gonway  module namespace. */

var Piweek = {};

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
            console.log($('.slider'));
        this.$('.slider').append('<a href="#" class="prev">prev</a>', '<a href="#" class="next">next</a>');
    },
    
        //MOve slider right
    SlideRight: function(e) {
        e.preventDefault();
        var productListSize = ($('.product-image-list li').size() - 1) * 155;
        var target = e.currentTarget;
        var ListPosition = this.$('.product-image-list').position();
        var PositionLeft = Math.abs(ListPosition.left);
        this.$('.product-list-wrapper a').removeClass('hidden');
         console.log (PositionLeft + ' |!==| ' +  productListSize);
        if((PositionLeft) !== productListSize) {
            $(target).addClass('hidden');
            this.$('.product-image-list').animate({left: '-=155px'}, 'medium', function(){
                console.log ((PositionLeft + 155) + ' |!==| ' +  Math.abs(productListSize));
                if((PositionLeft + 155) !== Math.abs(productListSize)) {
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
        var productListSize = ($('.product-image-list li').size() - 3) * 155;
        var target = e.currentTarget;
        var ListPosition = this.$('.product-image-list').position();
        var PositionLeft = Math.abs(ListPosition.left);
        this.$('.product-list-wrapper a').removeClass('hidden');
        if(PositionLeft !== 0) {
            $(target).addClass('hidden');
            this.$('.product-image-list').animate({left: '+=155px'}, 'medium', function(){
                if((PositionLeft - 155) !== 0) {
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
