$(() => {
    addEventListener('slidechanged', function (event) {
        const $current = $(event.currentSlide);
        if ($current.data("background-replay") !== undefined) {
            if ($current.data("bg-replay-passed") === true) {
                const background = Reveal.getSlideBackground(event.indexh, event.indexv);
                const bg = $current.data("background");
                const bgValue = "url(" + bg + "?load=" + new Date().getTime() + ")";
                $(background).css("background-image", bgValue)
            } else {
                $current.data("bg-replay-passed",true);
            }
        }
    })

});
