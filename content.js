

function setUpEventListener(){
	var $node = $('div._5rpb');
	console.log($node);
	if($node) {
		var $newNode = $node.clone(true);
		console.log($newNode);
		var $placeholderNode = getElementsStartsWithId('placeholder');
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

function getElementsStartsWithId( id ) {
  var children = document.body.getElementsByTagName('div');
  var child;
  for (var i = 0, length = children.length; i < length; i++) {
    child = children[i];
    if (child.id.substr(0, id.length) == id)
      return child;
  }
  return null;
}

$(document).ready(function() {
    console.log("ready!");
    setUpEventListener();
});




// function setUpEventListener(){
// 	var node = document.querySelector('div._1mf');
// 	console.log(node);
// 	console.log()
// 	if(node){
// 		// var newNode = node.cloneNode(true);
// 		// node.parentNode.replaceChild(newNode, node);
// 		// console.log(newNode);
// 		node.addEventListener("keyup", function(event){
// 			// api call here 190
// 			switch(event.keyCode) {
// 				case 190:
// 					console.log("period");
// 					break;
// 				case 13:
// 					console.log("enter");

// 					// event.preventDefault();
// 					break;
// 			}
// 			console.log("here");
// 		});

// 	}

// }

// $( document ).ready(function() {
//     console.log( "ready!" );
//     setUpEventListener();
// });

