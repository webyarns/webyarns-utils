$(function(){
    $("a[data-link]").click(function(e){
        e.preventDefault();
        var idx = $(this).attr("data-link")-1;
        Reveal.slide(idx)
    })
})