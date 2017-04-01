function setUpEventListener(){
	$(document).keyup(function(event){
		var $node = $("span[data-text='true']");
		if ($node) {
			if (event.keyCode === 190) { // period key
				sendAlert();
			}
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
