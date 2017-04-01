

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
					console.log("enter");
					//event.preventDefault();
					break;
			}
			console.log("here");
		});

		console.log($newNode);

		$node.replaceWith($newNode);
	}
}

$(document).ready(function() {
    console.log("ready!");
    setUpEventListener();
});



