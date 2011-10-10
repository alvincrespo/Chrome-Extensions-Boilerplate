document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		
		var ulEle = document.createElement('ul');
				
		for(var i = 0; i < questionObj.questions.length; i++) {
			var liEle = document.createElement('li');
			// create the <h2>
			var questionEle = document.createElement('h2');
			var questionTextNode = document.createTextNode(questionObj.questions[i].question);
			questionEle.appendChild(questionTextNode);
			liEle.appendChild(questionEle);
			// ----
			
			//create the <form>
			var formEle = document.createElement('form');			
			
			//create the <label>
			var labelEle = document.createElement('label');
				labelEle.setAttribute('for', 'answer' + [i]);
			var labelTextNode = document.createTextNode('Select an Answer: ');
			labelEle.appendChild(labelTextNode);
			formEle.appendChild(labelEle);
			
			//create the <select>
			var selectEle = document.createElement('select');
				selectEle.setAttribute('id', 'answer' + [i]);
			for(var x = 0; x < questionObj.questions[i].answers.length; x++) {
				var selectOptionEle = document.createElement('option');
				var selectOptionTextNode = document.createTextNode(questionObj.questions[i].answers[x]);
				selectOptionEle.appendChild(selectOptionTextNode);
				selectEle.appendChild(selectOptionEle);
			}
			formEle.appendChild(selectEle);
			
			liEle.appendChild(formEle);
			// ----
			
			ulEle.appendChild(liEle);
		}
		
		document.body.appendChild(ulEle);
		
	}
};