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
        this.time;
    },
    
    popcornVideoChangeSource: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = "http://download.blender.org/peach/trailer/trailer_400p.ogg";
            pop.media.children [ 1 ].src = "http://download.blender.org/peach/trailer/trailer_720x405.mov";
            //pop.removeplugin.destroy();
            //console.log(pop.roundTime() + 2);
            pop.load();
            pop.autoplay( true );
            pop.on('loadeddata', function() {
                this.currentTime( time + 3 );
                play();
            }, false);
        });
        
    },

    
});


Piweek.homeVideoView = new Piweek.HomeVideoView();