var Quiz = (function () {
	var _private;
	
	_private = {
		'attachEvents': function (ele, evt, listener) {
			ele.addEventListener(evt, listener);
		},
		
		'analyzeUserAnswers': function () {
			var selects = document.getElementsByTagName('select'), i = 0, selectsLength = selects.length;
			for(i; i < selectsLength; i++) {
				var label = selects[i].previousSibling;
				
				//remove both classes in order to analyze the question again
				label.classList.remove('correct');
				label.classList.remove('incorrect');
				// ----
				
				if (selects[i].options.selectedIndex === parseInt(selects[i].dataset.answer)) {
					label.classList.add('correct');
				} else {
					label.classList.add('incorrect');
				}
			}
		}
	};
	
	return {
		'init': function () {
			this.createForm();
		},
		
		'createForm': function () {
			var formEle, fieldsetEle, legendEle, legendEleTextNode, submitEle, i = 0, questionsLength = questionObj.questions.length;

			//create the <form>
			formEle = document.createElement('form');
			fieldsetEle = document.createElement('fieldset');
			legendEle = document.createElement('legend');
			legendEleTextNode = document.createTextNode("GRE Questions");
			legendEle.appendChild(legendEleTextNode);
			fieldsetEle.appendChild(legendEle);
			formEle.appendChild(fieldsetEle);

			for(i; i < questionsLength; i++) {
				var labelEle, labelTextNode, selectEle, x = 0, answersLength = questionObj.questions[i].answers.length;

				//create the <label>
				labelEle = document.createElement('label');
				labelEle.setAttribute('for', 'answer' + [i]);
				labelTextNode = document.createTextNode(questionObj.questions[i].question);
				labelEle.appendChild(labelTextNode);
				fieldsetEle.appendChild(labelEle);

				//create the <select>
				selectEle = document.createElement('select');
				selectEle.setAttribute('id', 'answer' + [i]);
				selectEle.setAttribute('data-answer', questionObj.questions[i].correct);
				for(x; x < answersLength; x++) {
					var selectOptionEle, selectOptionTextNode;

					selectOptionEle = document.createElement('option');
					selectOptionTextNode = document.createTextNode(questionObj.questions[i].answers[x]);
					selectOptionEle.appendChild(selectOptionTextNode);
					selectEle.appendChild(selectOptionEle);
				}
				fieldsetEle.appendChild(selectEle);
			}

			submitEle = document.createElement('input');
			submitEle.setAttribute('type', 'submit');
			submitEle.setAttribute('value', 'Submit Answers');
			formEle.appendChild(submitEle);

			document.body.appendChild(formEle);
			
			_private.attachEvents(formEle, 'submit', function (e) {
				e.preventDefault();
				e.stopPropagation();
				_private.analyzeUserAnswers();
			});
		}
	};
}());
