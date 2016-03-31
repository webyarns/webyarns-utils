$(function(){
    $(".endingButton").click(function(e){

        var $this = $(this);
        var idx = $this.data("link");
        var lastIdx= $this.data("last-idx");

        $this.remove();

        if ($(".endingButton").length==0){
            var $2 = $(".slides>section:nth-child("+idx+")+ ~ .final").first();
            $2.data("next-idx",lastIdx)
        }

    })

});
