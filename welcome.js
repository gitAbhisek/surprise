$(document).ready(function(){

	var inputs;
	var name;
	var result;
	
	function initialize(){
		inputs = $("input");
		name = inputs.eq(0).val();
		return name;
	}
	
	function on_submit(){
		result = $('.accessDenied');
		result.html("");
		var key = initialize();
		console.log(key);
		if(key == "Barnali")
		{
			var url = encodeURIComponent("innerpage.html");
			window.location.href = url;
		
		}
		else
			result.append("<p> ACCESS DENIED (name does not match) </p>");
		return false;
	}

	$("form").on("submit", on_submit);

})