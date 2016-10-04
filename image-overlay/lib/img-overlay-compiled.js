"use strict";

/**
 * section@overlay-background: adds a second background over the default on
 * use in conjunction with `section-id-to-bg-class` to set additional css styles such as
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

        var currentData = $(e.currentSlide).data('background2-image');
        if (currentData) {

            var bg = Reveal.getSlideBackground(event.indexh, event.indexv);
            var $bg = $(bg);
            var children = $bg.children("div.overlay-background");
            if (children.size() > 0) {
                children.addClass("present");
            } else {
                $("<div class='slide-background present overlay-background'>").css({
                    "display": "block",
                    "background-image": "url(" + currentData + ")"
                }).appendTo($bg);
            }
        }
    }

    Reveal.addEventListener('ready', overlayHandler);
    Reveal.addEventListener('slidechanged', overlayHandler);
});

//# sourceMappingURL=img-overlay-compiled.js.map