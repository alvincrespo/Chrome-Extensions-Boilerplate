var ExtOptions = (function () {
	
	return {
		//saves options to localStorage
		'saveOptions': function (e) {
			console.log('saveOptions');
			e.preventDefault();
			e.stopPropagation();
			var formElements = e.currentTarget.elements;
			
			window.localStorage['questionTotal'] = formElements.namedItem('question_number').value;
			
			var radioDifficulty = formElements.namedItem('question_difficulty');
			for (var i = 0; i < radioDifficulty.length; i++) {
				if (radioDifficulty[i].checked) {
					window.localStorage['questionDifficult'] = radioDifficulty[i].value;
				}
			}

			window.localStorage['questionScaffolding'] = formElements.namedItem('question_scaffolding').value;
			
			var radioHints = formElements.namedItem('question_hints');
			for (var i = 0; i < radioHints.length; i ++) {
				if (radioHints[i].checked) {
					window.localStorage['questionHintsEnabled'] = radioHints[i].value;
				}
			}
			
		},

		//restores select box state to saved value from localStorage
		'restoreOptions': function (e) {
			e.preventDefault();
			e.stopPropagation();
			
			for (var prop in ExtConfig) {
				if (ExtConfig.hasOwnProperty(prop)) {
					window.localStorage[prop] = ExtConfig[prop];
				}
			}
			
		}
	};
	
}());

document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		
		var form = document.getElementsByTagName('form')[0];
			form.addEventListener('submit', ExtOptions.saveOptions);
			form.addEventListener('reset', ExtOptions.restoreOptions);
		
		//todo: check if the local storage is different, if so assign the local storage values
		
	}
};


