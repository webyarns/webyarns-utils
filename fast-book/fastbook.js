$(function(){
    $(".book").each(function(i,e){
        var $this = $(e);
        var bookUrl = $this.data("book-url");
        var book = ePub(bookUrl);
        book.renderTo($this.attr('id'));
        var $section = $this.closest("section");

        $section.data("book",book);
        $section.data("page-interval",$this.data("page-interval") || 50);
    });

    Reveal.addEventListener( 'slidechanged', function( event ) {
        var $currentSlide = $(event.currentSlide);
        var book = $currentSlide.data("book");
        var interval =  $currentSlide.data("page-interval");
        var timerId = window.setInterval(function () {
        }, interval);
        $currentSlide.data("timerId",timerId);
        var prevTimerId = $(event.previousSlide).data("timerId");
        if ( prevTimerId ) {
            clearInterval(prevTimerId);
        }
    } );
});
