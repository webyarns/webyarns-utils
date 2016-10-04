/**
 * Adds an id to the background div using the corresponding id of the section
 * Id is "bg-section-<sectionId>"
 */
$(() =>  {
    function f (event) {
        const bg = Reveal.getSlideBackground(event.indexh, event.indexv);
        if (!bg.getAttribute('id')) {
            const id = event.currentSlide.getAttribute('id');
            if (id) {
                bg.setAttribute("id", "bg-section-" + id)
            }
        }


    }
    Reveal.addEventListener('slidechanged', f);
    Reveal.addEventListener('ready', f);

});
