/* Author: Kaleidos #CC0000

*/

/* Global gonway  module namespace extend. */
Piweek.HomeVideoView = Backbone.View.extend({
    el: $('#videoView'),
    
    events: {
        'click .projectVideoList li.seekagift': 'popcornVideoChangeSourceSeekagift',
        'click .projectVideoList li.rpyg': 'popcornVideoChangeSourceRpyg',
        'click .projectVideoList li.macadjan': 'popcornVideoChangeSourceMacadjan',
        'click .projectVideoList li.greenmine': 'popcornVideoChangeSourceGreenmine',
        'click .projectVideoList li.piweekday': 'popcornVideoChangeSourcePiweekday',
        'click .projectVideoList li.tu-tasa-de-paro': 'popcornVideoChangeSourceTasaparo',
        'click .projectVideoList li.integracion-bokzuy-ducksborad': 'popcornVideoChangeSourceBokzuy'
        
    },
    
    initialize: function() {
        _.bindAll(this, 
            'popcornVideoChangeSourceSeekagift', 
            'popcornVideoChangeSourceRpyg',
            'popcornVideoChangeSourceMacadjan',
            'popcornVideoChangeSourceGreenmine',
            'popcornVideoChangeSourcePiweekday',
            'popcornVideoChangeSourceTasaparo',
            'popcornVideoChangeSourceBokzuy'
        );
        
        this.time;
         if( $('#footnote div').not(':hidden')) {
            this.$('#footnote').hide();
        }
        var pop = Popcorn('#video');
  
        //console.log(Piweek);
        
        _.each(Piweek.mediaEvents, function(event){
            pop.footnote({
                start: event['fire'],
                end: event['end'],
                text: event['text'],
                target: "footnote"
            });            
        });
        
        _.each(Piweek.personEvents, function(person){
            pop.tagthisperson({
                start: person['fire'],
                end: person['end'],
                person: person['name'],
                image: person['pic'],
                href: "http://www.kaleidos.net",
                target: person['target'],
            });          
        }); 
        
        _.each(Piweek.twitterEvents, function(twitter){
            pop.twitter({
                start: twitter['fire'],
                end: twitter['end'],
                title: twitter['title'],
                src: twitter['tag'],
                target: twitter['src']
            });
        }); 
        
        _.each(Piweek.codeEvents, function(code){
            pop.code({
                start: code['fire'],
                end: code['fire'] + 3,
                onStart: function( options ) {
                    $('#footnote').fadeIn();
                    $('#persontag').fadeIn();
                    $('#tweeterdiv').fadeIn();
                },
                onEnd: function( options ) {
                    $('#footnote').fadeOut();
                    $('#persontag').fadeOut();
                    $('#tweeterdiv').fadeOut();
                }
            });
        });
        
        
    },
    
    popcornVideoChangeSourceSeekagift: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time, function() {
            pop.media.children[ 0 ].src = Piweek.mediaUrl("/files/seekagift.ogg");
            pop.media.children[ 1 ].src = Piweek.mediaUrl("/files/seekagift.webm");
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function(e) {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
        
    },

    popcornVideoChangeSourceRpyg: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = Piweek.mediaUrl("/files/rpyg.ogg");
            pop.media.children[ 1 ].src = Piweek.mediaUrl("/files/rpyg.webm");
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function(e) {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
    popcornVideoChangeSourceMacadjan: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
              pop.media.children[ 0 ].src = Piweek.mediaUrl("/files/macadjan.ogg");
            pop.media.children[ 1 ].src = Piweek.mediaUrl("/files/macadjan.webm");
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function(e) {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
    popcornVideoChangeSourceGreenmine: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = Piweek.mediaUrl("/files/greenmine.ogg");
            pop.media.children[ 1 ].src = Piweek.mediaUrl("/files/greenmine.webm");
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
            pop.media.children[ 0 ].src = Piweek.mediaUrl("/files/piweekday.ogg");
            pop.media.children[ 1 ].src = Piweek.mediaUrl("/files/piweekday.webm");
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function(e) {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
    popcornVideoChangeSourceTasaparo: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = Piweek.mediaUrl("/files/tasaparo.ogg");
            pop.media.children[ 1 ].src = Piweek.mediaUrl("/files/tasaparo.webm");
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function(e) {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
    popcornVideoChangeSourceBokzuy: function(e) {
        var pop = Popcorn("#video");
        var time = pop.roundTime();
        pop.cue(time+1, function() {
            pop.media.children[ 0 ].src = Piweek.mediaUrl("/files/bokzuy.ogg");
            pop.media.children[ 1 ].src = Piweek.mediaUrl("/files/bokzuy.webm");
            pop.load();
            pop.autoplay( false );
            pop.on('loadeddata', function(e) {
                this.currentTime( time + 3 );
                this.play();
            }, false);
        });
    },
    
});


Piweek.homeVideoView = new Piweek.HomeVideoView();