$(function(){
    var width = 10;
    var height = 10;
    var numberOfAreas = 25;


    var $window = $(window);
    var maxLeft = $window.width() - ($square.width());
    var maxTop = $window.height() - ($square.height());

    function findSpot(y,x){

        var yy = y | Math.random() * maxTop - height;
        var xx = x | Math.random() * maxLeft - width;

        



        console.log(x);
    }

    findSpot();

})