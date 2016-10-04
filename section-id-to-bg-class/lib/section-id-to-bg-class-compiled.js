'use strict';

/**
 * Adds an id to the background div using the corresponding id of the section
 * Id is "bg-section-<sectionId>"
 */
$(function () {
    function f(event) {
        var bg = Reveal.getSlideBackground(event.indexh, event.indexv);
        if (!bg.getAttribute('id')) {
            var id = event.currentSlide.getAttribute('id');
            if (id) {
                bg.setAttribute("id", "bg-section-" + id);
            }
        }
    }
    Reveal.addEventListener('slidechanged', f);
    Reveal.addEventListener('ready', f);
});

//# sourceMappingURL=section-id-to-bg-class-compiled.js.map