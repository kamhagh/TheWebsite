$(document).ready(function(){
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 50});

	// Add smooth scrolling on all links inside the navbar
	$("#mainNavbar a").on('click', function(event) {
		// Make sure this.hash has a value
		if (this.hash !== "") {
			// Prevent default click behavior
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({ //why html too:?
			scrollTop: $(hash).offset().top
			}, 500, function(){
				// Add hash (#) to URL no idea why
				window.location.hash = hash;
			});
		}
	});
});