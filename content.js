var textAnalyticsScore = null;

function setUpEventListener(){
	$(document).keyup(function(event){
		var $node = $("span[data-text='true']");
		if ($node) {
			if (event.keyCode === 190 || (event.keyCode === 191 && event.shiftKey) || (event.keyCode === 49 && event.shiftKey)) { // period, question mark, exclamation
				var sendRequestTextAnalytics =
					sendRequestGenerator('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', textAnalyticsSuccessFunction, config.TEXT_API_KEY);
				sendRequestTextAnalytics("{'documents': [{'language': 'en','id': '1','text':" + $node.text() + "}]}");
				sendAlert();
			}
		}
	});
}

function textAnalyticsSuccessFunction(data, textStatus, jqXHR){
	console.log(data);
	console.log(data.documents[0].score);
	textAnalyticsScore = data.documents[0].score;
}

function sendRequestGenerator(API_URL, successFunction, API_KEY){
	return function(inputText){
		jQuery.ajax({
			url : API_URL,
			type: 'POST',
			contentType: 'application/json',
			headers: {'Ocp-Apim-Subscription-Key': API_KEY},
			data: inputText,
			success: successFunction
		});
	}
}

// function sendRequestTextAnalytics() {
// 	jQuery.ajax({
// 		url : 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
// 		type: 'POST',
// 		contentType: 'application/json',
// 		headers: {'Ocp-Apim-Subscription-Key': config.API_KEY},
// 		data: "{'documents': [{'language': 'en','id': '1','text': 'You are a terrible human being.' }]}",
// 		success: function(data, textStatus, jqXHR) {
// 			console.log(data);
// 			console.log(data.documents[0].score);
// 			textAnalyticsScore = data.documents[0].score;
// 		}
// 	});
// }

function sendAlert() {
	swal({
	  title: 'Wait!',
	  text: "This message could be hurtful. Think twice before you send it!",
	  type: 'warning',
	  confirmButtonColor: '#3085d6',
	  confirmButtonText: "I understand the consequences.",
	  confirmButtonClass: 'btn btn-danger',
	  buttonsStyling: true
	})
}

$(document).ready(function() {
    console.log("ready!");
    setUpEventListener();
});
