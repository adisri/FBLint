var dandelionScore = null;
var textAnalyticsScore = null;

function setUpEventListener() {
	$(document).keyup(function(event){
		var $node = $("span[data-text='true']");
		if ($node) {
			var nodeText = $node.text();
			if (event.keyCode === 190 || (event.keyCode === 191 && event.shiftKey) || (event.keyCode === 49 && event.shiftKey)) { // period, question mark, exclamation
				sendRequests(nodeText);
			}
		}
	});
}

function weightedScore() {
	if(textAnalyticsScore === null && dandelionScore === null){
		return 0;
	} else if(textAnalyticsScore === null){
		return dandelion;
	} else if(dandelionScore === null){
		return textAnalyticsScore - 0.3;
	} else{
		return dandelionScore/2 + textAnalyticsScore;
	}
}

function sendRequests(nodeText) {
	// send dendelion request
	var encodedText = encodeURI(nodeText)
	var url = "https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text=" + encodedText + "&token=" + config.DANDELION_API_KEY;
	$.get(url, function(data) {
		dandelionScore = data.sentiment.score;

		// send microsoft sentiment analysis request
		var sendRequestTextAnalytics =
			sendRequestGenerator('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', textAnalyticsSuccessFunction, config.TEXT_API_KEY);
		sendRequestTextAnalytics("{'documents': [{'language': 'en','id': '2','text':'" + nodeText.replace(/'/g, "\\'") + "'}]}");
	})
}

function textAnalyticsSuccessFunction(data, textStatus, jqXHR) {
	textAnalyticsScore = data.documents[0].score;
	console.log(textAnalyticsScore);
	console.log(dandelionScore);
	console.log(weightedScore());
	if(weightedScore() < 0)
		sendAlert();
}

function sendRequestGenerator(API_URL, successFunction, API_KEY) {
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

function sendAlert() {
	swal({
	  title: 'Wait!',
	  text: "This message could be perceived as harmful. Think twice before you send it!",
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
