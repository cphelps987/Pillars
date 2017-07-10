$(document).ready(function() {

  $(".moreInfo").hide();

		$(".showMore").click(function() {
				console.log("Clicked showMore");
			$(".showMore").hide();    
			$(".moreInfo").show();    
		});
});
