/* Author: Kaleidos #CC0000

*/


/* Global gonway  module namespace. */

Piweek.HomeVideoView = Backbone.View.extend({
    
    el: $('.home_video'),

    initialize: function() {
        _.bindAll(this);
        
        //Create a popcorn instance by calling the Vimeo player plugin
        var vimeoVideo = Popcorn.vimeo('#video', 'http://vimeo.com/45402998');
  
        vimeoVideo.twitter({
            start: 1,
            end: 20,
            title: "Live Spain investigation",
            src: "Spain investigation",
            target: "twitterdiv",
        }),
        vimeoVideo.twitter({
            start: 20,
            end: 34,
            title: "In 2046",
            src: "#2046",
            target: "twitterdiv",
        })
        vimeoVideo.twitter({
            start: 34,
            end: 70,
            title: "Fruity Oaty Bar",
            src: "Fruity Oaty Bar",
            target: "twitterdiv",
        }),
        vimeoVideo.twitter({
            start: 70,
            title: "Piweek",
            src: "piweek",
            target: "twitterdiv",
        });
    }
    
});


    Piweek.homeVideoView = new Piweek.HomeVideoView();
