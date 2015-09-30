$(document).ready(function() {
    //enable smoothScroll
    $('a').smoothScroll();

    $('#embed-video').prettyEmbed({
        videoID: 'Cbti19KM3wk',
        useFitVids: true,

        playerControls: false,
        playerInfo: false
    });

    $('.pretty-embed, .pretty-embed img').click(function() {
        $(this).css('max-height', 'none');
    });
});
