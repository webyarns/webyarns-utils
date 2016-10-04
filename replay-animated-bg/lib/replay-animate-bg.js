$(function () {
    addEventListener('slidechanged', function (event) {
        var $current = $(event.currentSlide);
        if ($current.data("background-replay") !== undefined) {
            var background = Reveal.getSlideBackground(event.indexh, event.indexv);
            var bg = $current.data("background");
            bgValue = "url(" + bg + "?load=" + new Date().getTime() + ")";
            $(background).css("background-image", bgValue)
        }
    })

});
