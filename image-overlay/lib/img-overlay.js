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
$(() => {


    function overlayHandler(e) {
        $(".overlay-background").removeClass("present");

        const currentData = $(e.currentSlide).data('background2-image');
        if (currentData) {

            const bg = Reveal.getSlideBackground(event.indexh, event.indexv);
            const $bg = $(bg);
            const children = $bg.children("div.overlay-background");
            if (children.size() > 0) {
                children.addClass("present");
            } else {
                $("<div class='slide-background present overlay-background'>").css({
                    "display": "block",
                    "background-image" : "url("+ currentData + ")"
                }).appendTo($bg);
            }
        }
    }

    Reveal.addEventListener('ready', overlayHandler);
    Reveal.addEventListener('slidechanged', overlayHandler);

});