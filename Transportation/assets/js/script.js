// This ready handler passes the jQuery alias in to avoid conflict with other libraries.

jQuery(document).ready(function($)
{

	/***********************************************/
	//	CONSTANTS
	//	Use upper case variable names to declare
	//	constants such as configuration paths, scoped to this
	//	closure and available to all methods.
	//	Separate words with underscores.
	/***********************************************/
	
	var CONSTANT_NAME = 'A constant, available to all methods of this closure.';
	

	/***********************************************/
	//	VARS
	//	Use lower case variable names to declare
	//	variables that are scoped to this
	//	closure and available to all methods.
	//	Use camel case to separate words.
	/***********************************************/
	
	var instanceVariable = 'An instance variable, available to all methods of this closure.';	
	
	
	/***********************************************/
	//	INIT
	//	This function will be called upon load, so call
	//	any initialastion functions here. 
	/***********************************************/
	
	this.init = function()
	{	
		getData();	
	}();


	/***********************************************/
	//	EXAMPLE METHODS
	/***********************************************/	
	
	// get some data
	// uncomment the lines below to test functionality
	function getData()
	{
		// define a local variable
		var localVariable = 'A local variable, scoped to this method.';
		//console.log(localVariable);

		// access some instance variables
		//console.log(CONSTANT_NAME);
		//console.log(instanceVariable);

		// call a method - maybe an ajax call?
		//onData('onData: I was called from on getData.');
	}
	
	// on data return
	function onData(data)
	{  		
		// log out some data
		console.log(data);
		
		// get the body with jQuery, do something with it.
		$('body').each(function (){
			console.log(this);
		})
	}	
		
});

$(function() {
	TouchEmulator(); 
    FastClick.attach(document.body);
});


//$$('span', 'p', 'a');

/*$(window.document).on('mouseup touchend', function(event) {
  // Capture this event anywhere in the document, since the mouse may leave our element while mouse is down and then the 'up' event will not fire within the element.
  mouseDown = false;
});*/

/*$(document).ready(function(){
	$("wrapper").css('cursor','url(assets/images/ic_panorama_fish_eye_white_24dp_2x.png),auto');
	$("a").css('cursor','url(assets/images/ic_panorama_fish_eye_white_24dp_2x.png),auto');
});*/