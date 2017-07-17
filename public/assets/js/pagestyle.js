$(document).ready(function() {

    $(".moreInfo").hide();
    $(".showMore").click(function() {
        console.log("Clicked showMore");
        $(".moreInfo").toggle();
    });

		//Video Control
		$('.video').click(function(){
			this.paused?
			this.play():this.pause();
		});

    //Plinth Creation advance options
    $("#advCreatePilinth").hide();
    $(".showMore").click(function() {
        console.log("Clicked showMore");
        $("#createPilinth").hide("fast");
        $("#advCreatePilinth").show("slow", "swing");
    });

    //Moderation Level Checkbox Control
    $("input.defaultUnselect").on('change', function() {
        $("input.defaultSelect").not(this).prop("checked", false);
    });

    $("input.defaultSelect").on('change', function() {
        $("input.defaultUnselect").not(this).prop("checked", false);
    });

});