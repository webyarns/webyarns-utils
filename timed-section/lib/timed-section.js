$(function () {
    var timer;
    Reveal.addEventListener('slidechanged', function (event) {
        var $prevSlide = $(event.previousSlide);
        var $currentSlide = $(event.currentSlide);
        var prevAutoMove = $prevSlide.data("auto-move-to");
        var curAutoMove = $currentSlide.data("auto-move-to");
        if (prevAutoMove !== undefined) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        }
        if (curAutoMove) {
            var timeout = $currentSlide.data("auto-move-time-sec") * 1000 | 3000;
            timer = setTimeout(function () {
                var slide = curAutoMove-1;
                Reveal.slide(slide);
            }, timeout)

        }
    });
})