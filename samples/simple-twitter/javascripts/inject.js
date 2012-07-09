document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		
		//this js is injected into any page, based on our matches
		//inside of our manifest.json file

		var styles = [ 'styles/inject.css' ];

		for(var i = 0; i < styles.length; i++) {
			var stylesheet = document.createElement('link');
				stylesheet.rel = 'stylesheet';
				stylesheet.type = 'text/css';
				stylesheet.href = chrome.extension.getURL(styles[i]);

			console.log(stylesheet);

			document.head.appendChild(stylesheet);
		}


	}
};