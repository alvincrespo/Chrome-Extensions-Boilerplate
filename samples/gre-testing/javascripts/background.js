$(document).ready(function () {
	
	$(window)
		.bind('launch.console', function () {
			console.log("Hola");
		});
	
	$(window).trigger('launch.console');
	
});