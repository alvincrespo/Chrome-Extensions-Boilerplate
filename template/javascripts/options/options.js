var extOptions = (function () {
	
	return {
		//saves options to localStorage
		'save_options': function () {
		  var select = document.getElementById("color");
		  var color = select.children[select.selectedIndex].value;
		  localStorage["favorite_color"] = color;

		  // Update status to let user know options were saved.
		  var status = document.getElementById("status");
		  status.innerHTML = "Options Saved.";
		  setTimeout(function() {
		    status.innerHTML = "";
		  }, 750);
		},

		//restores select box state to saved value from localStorage
		'restore_options': function () {
		  var favorite = localStorage["favorite_color"];
		  if (!favorite) {
		    return;
		  }
		  var select = document.getElementById("color");
		  for (var i = 0; i < select.children.length; i++) {
		    var child = select.children[i];
		    if (child.value == favorite) {
		      child.selected = "true";
		      break;
		    }
		  }
		}
	};
	
}());

document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		extOptions.restore_options();
	}
};