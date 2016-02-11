$(function(){

    addEventListener('slidechanged', function (event) {
        var $current = $(event.currentSlide);

        var toBackground = $current.children(".to-background");
        if (toBackground ){
            var backgroundNext = Reveal.getSlideBackground(event.indexh, event.indexv);
            $(backgroundNext).append(toBackground)
        }
    })
});