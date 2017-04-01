

function myAddEventListener(){
	var nodes = document.querySelector('div._kmc');
	nodes.addEventListener("keyup", function(){
		// api here
		console.log("here");
	});
}

$( document ).ready(function() {
    console.log( "ready!" );
    myAddEventListener();
});

