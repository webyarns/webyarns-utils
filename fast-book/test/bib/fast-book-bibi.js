Reveal.addEventListener('slidechanged', function (event) {

    var backgroundNext = Reveal.getSlideBackground(event.indexh, event.indexv);
    var backgroundPrev = Reveal.getSlideBackground(event.indexh-1, event.indexv);
    foo(backgroundPrev, function (c) {
        c.pause();
    });
    foo(backgroundNext, function (c) {
        var $currentSlide = $(event.currentSlide);
        var interval =  $currentSlide.data("page-interval");
        c.start(interval);
    });
    function foo(bg, f) {
        $(bg).children("iframe").each(function (i, e) {
            f(e.contentWindow);
        })
    }
});