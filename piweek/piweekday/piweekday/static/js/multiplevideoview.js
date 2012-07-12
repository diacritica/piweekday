/* Author: Kaleidos #CC0000

*/


/* Global gonway  module namespace. */
Piweek.HomeVideoView = Backbone.View.extend({
    el: $('#videoView'),
    
    events: {
        'click .projectVideoList li': 'popcornVideoChangeSource',
    },
    
    initialize: function() {
        _.bindAll(this, 'popcornVideoChangeSource');
        var pop = Popcorn("#video");
        this.changeSource = false;
        this.time;
    },
    
    popcornVideoChangeSource: function(e) {
        var pop = Popcorn("#video");
        this.time = pop.roundTime();
        console.log(this.changeSource);
        pop.cue((this.time+2), function() {
            pop.media.children[ 0 ].src = "http://download.blender.org/peach/trailer/trailer_400p.ogg";
            pop.media.children [ 1 ].src = "http://download.blender.org/peach/trailer/trailer_720x405.mov";
            this.destroy();
            pop.load();
            Array.log(this.time);
            pop.play();
        });
    }
    
});


Piweek.homeVideoView = new Piweek.HomeVideoView();