/* Author: Kaleidos #CC0000

*/


/* Global gonway  module namespace. */
Piweek.HomeVideoView = Backbone.View.extend({
    el: $('#videoView'),
    
    events: {
        'click .projectVideoList li': 'popcornVideoChangeSource',
    },
    
    initialize: function() {
        _.bindAll(this, 'popcornVideoChangeSource', 'loadSource');
        this.time;
        var pop;
        pop.addEventListener( "changedSource", this.loadSource);
    },
    
    popcornVideoChangeSource: function(e) {
        var pop = Popcorn("#video");
        this.time = pop.roundTime();
        this.pop.cue((this.time+2), function() {
            this.pop.media.children[ 0 ].src = "http://download.blender.org/peach/trailer/trailer_400p.ogg";
            this.pop.media.children [ 1 ].src = "http://download.blender.org/peach/trailer/trailer_720x405.mov";
            //pop.removeplugin.destroy();
            //console.log(pop.roundTime() + 2);
            this.pop.load();
            this.pop.autoplay( true );
            self.trigger("changedSource");
            this.pop.destroy();
        });
        
    },
    
    loadSource: function(e) {
        pop.currentTime( this.time );
        pop.play();
    }
    
});


Piweek.homeVideoView = new Piweek.HomeVideoView();