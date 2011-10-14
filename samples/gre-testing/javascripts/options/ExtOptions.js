var ExtOptions = (function () {
	
	return {

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
		
		'restoreOptions': function (e) {
			e.preventDefault();
			e.stopPropagation();
			
			for (var prop in ExtConfig) {
				if (ExtConfig.hasOwnProperty(prop)) {
					window.localStorage[prop] = ExtConfig[prop];
				}
			}
		},
		
		'checkLocalStorage': function () {
			for (var prop in ExtConfig) {
				if (ExtConfig.hasOwnProperty(prop)) {
					if(typeof window.localStorage[prop] === 'undefined') {
						window.localStorage[prop] = ExtConfig[prop];
					}
				}
			}
		}
	};
	
}());

