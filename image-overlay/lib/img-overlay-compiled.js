"use strict";

/**
 * section@data-overlay-background: adds a second background over the default on
 * use in conjunction with `section-id-to-bg-class` to set additional css styles such as
 * Copies the transition from the default background. Can be overriden by using
 * section@data-background2-transition
 *
 *  .reveal #bg-section-testSection .overlay-background {
        background-size: contain;
    }
 *
 * Implementation adds an div.slide-background to the section's background div
 */
$(function () {

    function overlayHandler(e) {
        $(".overlay-background").removeClass("present");

        var bg2ImgValue = $(e.currentSlide).data('background2-image');

        if (bg2ImgValue) {

            var bg = Reveal.getSlideBackground(event.indexh, event.indexv);
            var $bg = $(bg);
            var children = $bg.children("div.overlay-background");
            if (children.size() > 0) {
                children.addClass("present");
            } else {
                var $2ndBg = $("<div class='slide-background present overlay-background'>").css({
                    "display": "block",
                    "background-image": "url(" + bg2ImgValue + ")"
                });
                var bgTrValue = $bg.data('background-transition');
                var bg2TrValue = $(e.currentSlide).data('background2-transition');
                var transition = bg2TrValue || bgTrValue;
                if (transition !== undefined) {
                    $2ndBg.attr('data-background-transition', transition);
                }
                $2ndBg.appendTo($bg);
            }
        }
    }

    Reveal.addEventListener('ready', overlayHandler);
    Reveal.addEventListener('slidechanged', overlayHandler);
});

//# sourceMappingURL=img-overlay-compiled.js.map