/* Author: Kaleidos #CC0000

*/


/* Global gonway  module namespace. */
Piweek.HomeVideoView = Backbone.View.extend({
    el: $('#videoView'),
    
    events: {
        'click .projectVideoList li.seekagift': 'popcornVideoChangeSourceSeekagift',
        'click .projectVideoList li.rpyg': 'popcornVideoChangeSourceRpyg',
        'click .projectVideoList li.ninja-sysop': 'popcornVideoChangeSourceNinjaSysop',
        'click .projectVideoList li.macadjan': 'popcornVideoChangeSourceMacadjan',
        'click .projectVideoList li.greenmine': 'popcornVideoChangeSourceGreenmine',
        'click .projectVideoList li.piweekday': 'popcornVideoChangeSourcePiweekday'
    },
    
    initialize: function() {
        _.bindAll(this, 
            'popcornVideoChangeSourceSeekagift', 
            'popcornVideoChangeSourceRpyg',
            'popcornVideoChangeSourceNinjaSysop',
            'popcornVideoChangeSourceMacadjan',
            'popcornVideoChangeSourceGreenmine',
            'popcornVideoChangeSourcePiweekday'
            );
        this.time;
    },
    
    popcornVideoChangeSourceSeekagift: function() {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time, function() {
            //pop.media.children[ 0 ].src = Piweek.mediaUrl("/files/piweekday-tasaparo-petanca.ogv");
            //pop.media.children [ 1 ].src = Piweek.mediaUrl("/files/piweekday-tasaparo-petanca.ogv");
            pop.media.children[ 0 ].src = "http://videos.mozilla.org/serv/webmademovies/popcornplug.mp4";
            pop.media.children [ 1 ].src = "http://videos.mozilla.org/serv/webmademovies/popcornplug.ogv";
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function() {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
        
    },

    popcornVideoChangeSourceRpyg: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = "http://download.blender.org/peach/trailer/trailer_400p.ogg";
            pop.media.children [ 1 ].src = "http://download.blender.org/peach/trailer/trailer_720x405.mov";
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function() {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
    popcornVideoChangeSourceNinjaSysop: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = "http://upload.wikimedia.org/wikipedia/commons/7/7c/Anibal%C3%B1_Fernandez_se_opone_al_Canon_Digital_en_Argenitna.ogg";
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function() {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
    popcornVideoChangeSourceMacadjan: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = "http://upload.wikimedia.org/wikipedia/commons/8/80/Criaanza_de_los_animales.ogv";
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function() {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
    popcornVideoChangeSourceGreenmine: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = "http://upload.wikimedia.org/wikipedia/commons/b/bd/TheEarthquakers.ogv";
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function() {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
    popcornVideoChangeSourcePiweekday: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = "http://upload.wikimedia.org/wikipedia/commons/9/9b/Longines_Chronicles_with_Lord_John_Wilmot_1951_ARC-96117.ogv";
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function() {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    }
    
});


Piweek.homeVideoView = new Piweek.HomeVideoView();