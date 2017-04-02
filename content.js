function setUpEventListener(){
	$(document).keyup(function(event){
		var $node = $("span[data-text='true']");
		if ($node) {
			if (event.keyCode === 190) { // period key
				sendRequest();
				sendAlert();
			}
		}
	});
}

function sendRequest() {
	jQuery.ajax({
		url : 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
		type: 'POST',
		contentType: 'application/json',
		headers: {'Ocp-Apim-Subscription-Key': config.API_KEY},
		data: "{'documents': [{'language': 'en','id': '1','text': 'You are a terrible human being.' }]}",
		success: function(data, textStatus, jqXHR) {
			console.log(data);
		}
	});
}

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
