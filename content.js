function setUpEventListener(){
	var $node = $('div._5rpb');
	console.log($node);
	if($node) {
		var $newNode = $node.clone(true);
		console.log($newNode);
		var $placeholderNode = $('[id^="placeholder"]');
		// var $placeholderNode = getElementsStartsWithId('placeholder');
		if($placeholderNode)
			$placeholderNode.remove();


		$newNode.keyup(function(event){
			// api call here 190
			switch(event.keyCode) {
				case 190:
					console.log("period");
					break;
				case 13:
					console.log("enter"); // TODO: suppress newline
					sendAlert();
					break;
			}
			console.log("here");
		});

		console.log($newNode);

		$node.replaceWith($newNode);
	}
}

function sendAlert() {
	swal({
	  title: 'Are you sure?',
	  text: "This message could be hurtful. Are you sure you want to send it?",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: "Yes, I'm sure.",
	  cancelButtonText: 'No, cancel!',
	  confirmButtonClass: 'btn btn-success',
	  cancelButtonClass: 'btn btn-danger',
	  buttonsStyling: true
	}).then(function () {
		// TODO: send message
		swal(
	    'Sent!',
	    'Your message has been sent.',
	    'success'
	  )
	}, function (dismiss) {
		// Nothing to do if cancel was hit
	})
}

$(document).ready(function() {
    console.log("ready!");
    setUpEventListener();
});
