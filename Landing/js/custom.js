jQuery(document).ready(function() {
	
	
	// Your custom js code goes here.
	$( ".selectors-left" ).change(function() {
		var classname = $( ".selectors-left option:selected" ).val();
		if(classname == "all"){
			$(".machines div.probootstrap-animate").show();
		}else
		{
		$(".machines div.probootstrap-animate").not("."+classname).hide();
		$("."+classname).show();
		}
	  });

	  $( ".selectors-right" ).change(function() {
		var classname = $( ".selectors-right option:selected" ).val();
		if(classname == "all"){
			$(".machines div.probootstrap-animate").show();
		}else
		{
		$(".machines div.probootstrap-animate").not("."+classname).hide();
		$("."+classname).show();
		}
	  });

});