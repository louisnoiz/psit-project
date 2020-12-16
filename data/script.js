
$(document).ready(function(){
    $("#card-1").fadeIn();
    $("#card-1").animate({
        top: '-105px'
    }, {
        queue: false
    });
    setTimeout(function(){
        $("#card-2").fadeIn();
        $("#card-2").animate({
            top: '-105px'
        }, {
            queue: false
        });
    }, 150);
    setInterval(function(){
        var first_floor = 0;
        var second_floor = 0;
        $.ajax({
            url: '/distance',
            success: function(res){
                var obj = jQuery.parseJSON( res );
                if (obj.sensor_1 > 5) {
                    first_floor += 1;
                }
                if (obj.sensor_2 > 4.4) {
                    first_floor += 1;
                }
                if (obj.sensor_3 > 4.4) {
                    second_floor += 1;
                }
                if (obj.sensor_4 > 4.4) {
                    second_floor += 1;
                }
                $("#first_floor").html(first_floor);
                $("#second_floor").html(second_floor);
            }
        });
    }, 2000);
});