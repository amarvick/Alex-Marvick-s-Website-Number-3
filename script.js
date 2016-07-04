$(document).ready(function() {

/* All Pages -- Navigation Menu */

	$('#list-i').click(function() {
		$('#slider-menu').animate({
			left: "0px"
		}, 300);

		$('body').animate({
			left: "306px"
		}, 300);
	});

	$('#exit-i').click(function() {
		$('#slider-menu').animate({
			left: "-306px"
		}, 300);

		$('body').animate({
			left: "0px"
		}, 300);

	});

/* Gallery Page */

	var caption = "";
	var imageNo = 1;

	var photoChange = function() {

		if (imageNo == 0) {
			imageNo = 1;
			caption = "Study Abroad Trip in 2014: Weekend Trip to Paris, France";
			$('#gallery-enlarged-image').attr("src", "image" + imageNo + ".jpg");
		}

		else if (imageNo == 10) {
			imageNo = 9;
			caption = "Standing out in front of Microsoft's campus, taken by a friend. August 2015";
			$('#gallery-enlarged-image').attr("src", "image" + imageNo + ".jpg");
		}

		else if (imageNo == 1) {
			caption = "Study Abroad Trip in 2014: Weekend Trip to Paris, France";
		}

		else if (imageNo == 2) {
			caption = "Our cat, Cosmo";
		}

		else if (imageNo == 3) {
			caption = "Gonzaga University Graduation, May 2016";
		}

		else if (imageNo == 4) {
			caption = "Gonzaga University Graduation Picture 2, May 2016";
		}

		else if (imageNo == 5) {
			caption = "Me with my parents in Burch Bay, WA. June 2016";
		}

		else if (imageNo == 6) {
			caption = "Me striking a pose with my Senior Design Project";
		}

		else if (imageNo == 7) {
			caption = "Our cat, Rudy";
		}

		else if (imageNo == 8) {
			caption = "At the Orleans arena in Vegas watching Gonzaga Basketball take the WCC title";
		}

		else if (imageNo == 9) {
			caption = "Standing out in front of Microsoft's campus, taken by a friend. August 2015";
		}

		else {
			caption = "No Image Here Yet";
		}

		$('#caption').html(caption);

	};

	$('#gallery-enlarged-image').hide();
	$('#gallery-enlarged-image').fadeIn(500);

	$('.small-images').click(function() {

		$('#gallery-enlarged-image').hide();
		$('#gallery-enlarged-image').fadeIn(500);

		var bigImageSrc = $(this).attr("src");
		$('#gallery-enlarged-image').attr("src", bigImageSrc);

		imageNo = $(this).attr("id");

		photoChange();

	});

	$('#left-arrow').click(function() {

		$('#gallery-enlarged-image').hide();

		imageNo -= 1;

		$('#gallery-enlarged-image').attr("src", "image" + imageNo + ".jpg");
		$('#gallery-enlarged-image').fadeIn(500);

		photoChange();

	});

	$('#right-arrow').click(function() {

		$('#gallery-enlarged-image').hide();

		imageNo += 1;

		$('#gallery-enlarged-image').attr("src", "image" + imageNo + ".jpg");
		$('#gallery-enlarged-image').fadeIn(500);

		photoChange();
		
	});

/* Resume Page */

	$('#name').hide();
	$('#description').hide();
	$('#hr1').hide();
	$('#photo1').hide();
	$('#education').hide();
	$('#button0').hide();
	$('#top-skills').hide();
	$('#projects').hide();
	$('#work-experience').hide();
	$('#photo2').hide();
	$('#hr2').hide();
	$('.resume-contact').hide();
	$('#GUlogo').hide();
	$('#GIFlogo').hide();
	$('#education #p-GUlogo').hide();
	$('#education #p-education').hide();
	$('#education #p-GIFlogo').hide();			

	$('#name').fadeIn(500);
	$('#description').fadeIn(500);
	$('#hr1').fadeIn(500);
	$('#photo1').fadeIn(500);
	$('#education').fadeIn(500);

	$('#hr1').animate({width: "+=785px"}, 200); 


	$('#education').click(function() {
		if ($(this).css("width") == "190px") {
			$(this).animate({height: "+=90px", width: "+=660px"}, 500);
			$('#education h1').html("EDUCATION");

			$('#education #p-GUlogo').html("GONZAGA UNIVERSITY<br>Spokane, WA<br>B.Sc, Civil Engineering<br>Class of 2016");
			$('#education #p-education').html("Computer Science I-II: Python & C++ Fundamentals,<br>Calculus I-III, Introduction to OOP, Principles of Marketing,<br>Mechanics of Materials, Finite Elements + Laboratory,<br>Structural Analysis, Transportation Design + Laboratory");
			$('#education #p-GIFlogo').html("GONZAGA-IN-FLORENCE<br>Florence, Italy<br>Study Abroad<br>Spring 2016");		

			$('#education #p-GUlogo').fadeIn(1500);
			$('#education #p-education').fadeIn(1500);
			$('#education #p-GIFlogo').fadeIn(1500);

			$('#GUlogo').fadeIn(500);
			$('#GIFlogo').fadeIn(500);
			$('#button0').fadeIn(500);

		}

	});

	$('#button0').click(function() {
		$(this).fadeOut(500);
		$('#education').fadeOut(500);
		$('#top-skills').fadeIn(500);

	});

	$('#button2').click(function() {
		$(this).fadeOut(500);
		$('#projects').fadeIn(500);
		$('#top-skills').fadeOut(500);

	});

	$('#button3').click(function() {
		$(this).fadeOut(500);
		$('#projects').fadeOut(500);
		$('#work-experience').fadeIn(500);

	});

	$('#button4').click(function() {
		$(this).fadeOut(500);
		$('#photo2').fadeIn(500);
		$('#hr2').fadeIn(500);
		$('.resume-contact').fadeIn(500);
		
		$('#education').fadeIn(500);
		$('#top-skills').fadeIn(500);
		$('#projects').fadeIn(500);
	});

})