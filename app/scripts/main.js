'use strict';
$(document).ready(function() {
    //enable smoothScroll
    $('a').smoothScroll();

    //enable prettyEmbed for better youtube preview
    $('#embed-video').prettyEmbed({
        videoID: 'Cbti19KM3wk',
        useFitVids: true,

        playerControls: false,
        playerInfo: false
    });

    //on big screens video preview is shrinked. After user clicks play button video goes full fullscreen
    $('.pretty-embed, .pretty-embed img').click(function() {
        $('#video .col-md-12').css('position', 'static');
        $.smoothScroll({
            scrollElement: $('body'),
            scrollTarget: '#video'
        });
    });
});
