document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		
		//this js is injected into any page, based on our matches
		//inside of our manifest.json file
		
		//here we hijack all anchors and prevent their
		//propagation and default behavior
		var links = document.getElementsByTagName('a');
		for (var i = 0; i < links.length; i++) {
			links[i].addEventListener('click', function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
		}
		
	}
};