/*-----------------------------------------------------------------

[Master Script]

Project:	The Trip
Version:	1.1.0
Last change:	15/07/31 [FAQ]

* Copyright (c) 2015, Thibault Jan Beyer
* Website: http://www.thibaultjanbeyer.com/
------------------------------------------------------------------

";" are optional

------------------------------------------------------------------

[Table of contents]

1. Setup
2. Draggable / Droppable
3. Animation
	3.1. One
	3.1. Two
	3.1. Three
	3.1. Four
	3.1. Five
	3.1. Six
4. FAQ


------------------------------------------------------------------
	Small Plugins
------------------------------------------------------------------

------------------------------------------------------------------
					Startups
------------------------------------------------------------------

* --- Options --- */

var animationTime = 13000;

/* --- Variables --- */

var eat = false;
var count = 0;
var interval = [];

/* --- Store Objects --- */

var $body = $('body');
var $papes = $('#papes')
var $head1 = $('#head1');
var $head1b = $('#head1b');
var $head2 = $('#head2');
var $head3 = $('#head3');
var $head4 = $('#head4');
var $head5 = $('#head5');
var $head6 = $('#head6');
var $animationhead = $('#animationhead');
var $eyeL = $('#eye-l');
var $eyeR = $('#eye-r');
var $eyes = $('#eyes');
var $head1animation2 = $('#head1-animation2');
var $mouth = $('#mouth');
var $mouth2 = $('#mouth2');
var $eyebrownL = $('#eyebrown-l');
var $eyebrownR = $('#eyebrown-r');
var $eyebrown = $('#eyebrown');
var $dead = $('#dead');
var $timer = $('#timer');
var $timerDiv = $('#timer div');
var $animation4video = $('#animation-4 video');
var $animation5video = $('#animation-5 video');
var $animation6video = $('#animation-6 video');
var $music = $('#music');

/* --- Window Resize --- */
var headPosition = $head1.offset();
var headPositionL = headPosition.left + 7;
$animationhead.css({'left': headPositionL});

$( window ).resize(function() {
	var headPosition = $head1.offset();
	var headPositionL = headPosition.left + 7;
	$animationhead.css({'left': headPosition.left});
});

/*
------------------------------------------------------------------
					1. Setup
------------------------------------------------------------------
*/

$head1b.hide();
$head2.hide();
$head3.hide();
$head4.hide();
$head5.hide();
$head6.hide();
$animationhead.hide()
$eyeL.hide();
$eyeR.hide();
$eyes.hide();
$head1animation2.hide();
$timer.hide();
$mouth.hide();
$mouth2.hide();
$eyebrownL.hide();
$eyebrownR.hide();
$eyebrown.hide();
$dead.hide();
$music.animate({volume: 0}, 10);


/*
------------------------------------------------------------------
					2. Draggable / Dropable
------------------------------------------------------------------
*/

$( ".pape" ).draggable({
	stop: function( event, ui ) {
		setTimeout(function(){
			$('.pape').animate({opacity: '1'},100);
		}, 200);
		if (eat == false){
			$(this).animate({
				'top': '0',
				'left': '0'
			});
			$head3.show(); 
			$head2.hide();
			$head1.hide();
			$head1b.hide();
			$head4.hide();
			$head5.hide();
			$head6.hide();
			setTimeout(function(){
				$head2.show(); 
	  			$head1b.hide();
	  			$head1.hide();
				$head3.hide();
				$head4.hide();
				$head5.hide();
				$head6.hide();
				setTimeout(function(){
					$head1b.show(); 
			  		$head1.hide();
					$head2.hide();
					$head3.hide();
					$head4.hide();
					$head5.hide();
					$head6.hide();
					setTimeout(function(){
						$head1.show(); 
				  		$head1b.hide();
						$head2.hide();
						$head3.hide();
						$head4.hide();
						$head5.hide();
						$head6.hide();
						$(this).removeClass('top');
					}, 50);
				}, 50);
			}, 50);
		}
	},
	start: function( event, ui ) {
		$(this).addClass('top');
		$('.pape span').hide();
  		$head1b.show(); 
  		$head1.hide();
		$head2.hide();
		$head3.hide();
		$head4.hide();
		$head5.hide();
		$head6.hide();
  		setTimeout(function(){
  			$head2.show(); 
  			$head1b.hide();
  			$head1.hide();
			$head3.hide();
			$head4.hide();
			$head5.hide();
			$head6.hide();
  			setTimeout(function(){
  				$head3.show(); 
  				$head2.hide();
  				$head1.hide();
  				$head1b.hide();
				$head1b.hide();
				$head4.hide();
				$head5.hide();
				$head6.hide();
  			}, 100);
  		}, 100);
	}
});

$( ".mouth" ).droppable({
		drop: function( event, ui ) {
			eat = true;
			$(ui.draggable).css({
				visibility: 'hidden',
				pointerEvents: 'none',
				top: 'initial',
				left: 'initial'
			});
        	setTimeout(function(){
        	$head4.show(); 
  			$head3.hide();
  			$head1b.hide();
  			$head1.hide();
			$head2.hide();
			$head5.hide();
			$head6.hide();
	  			setTimeout(function(){
	  			$head5.show(); 
	  			$head4.hide();
	  			$head1b.hide();
	  			$head1.hide();
				$head2.hide();
				$head3.hide();
				$head6.hide();
	  				setTimeout(function(){
	  				$head6.show(); 
	  				$head5.hide();
	  				$head1b.hide();
	  				$head1.hide();
					$head2.hide();
					$head3.hide();
					$head4.hide();
		  				setTimeout(function(){
		  					$head1.show(); 
		  					$head6.hide();
		  					$head1b.hide();
							$head2.hide();
							$head3.hide();
							$head4.hide();
							$head5.hide();
							$papes.addClass('inactive');
							eaten();
							eat = false;
		  				}, 100);
	  				}, 100);
	  			},100);
	  		}, 100);
      	}
    });


/*
------------------------------------------------------------------
					3. Animations
------------------------------------------------------------------
*/

function eaten(){
	count++;
	animationTime = animationTime + 2000;
	if (count == 1) {
		animationOne();
	} else if (count == 2){
		animationTwo();
	} else if (count == 3){
		animationThree();
	} else if (count == 4){
		animationFour();
	} else if (count == 5){
		animationFive();
	} else if (count == 6){
		animationSix();
	} 
}

/* 		--- 3.1. ANIMATION ONE --- */
function animationOne(){
	/* EYES */
	$animationhead.show();
	$eyes.show();
	$timer.show();
	$timerDiv.animate({width: '0%'}, animationTime, function() {
		$timer.hide()
		$timerDiv.animate({width: '100%'});
	});
	interval[1] = setInterval(function(){
		$eyeL.show();
		$eyeR.hide();
		$eyes.hide();
		setTimeout(function(){
			$eyeL.hide();
			$eyeR.show();
				setTimeout(function(){
					$eyeR.hide();
					$eyes.show();
				}, 400);
		}, 400);
	},1600);
	/* LOAD */
	$body.removeClass('end1');
	$body.addClass('start1');
	$music.get(0).play();
	$music.animate({volume: 1}, 1000);
	/* END */
	setTimeout(function(){
		clearInterval(interval[1]);
		$body.removeClass('start1');
		$body.addClass('end1');
		$papes.removeClass('inactive');
		$music.animate({volume: 0}, 1000, function(){$music.get(0).pause();});
		setTimeout(function(){
			$animationhead.hide();
			$head1.css({background: 'url(img/reaction/gesicht_auge_l.png)'});
		}, 1400);
	}, animationTime);	
}

/* 		--- 3.2. ANIMATION TWO --- */
function animationTwo(){
	$animationhead.show();
	$eyes.show();
	$timer.show();
	$timerDiv.animate({width: '0%'}, animationTime, function() {
		$timer.hide()
		$timerDiv.animate({width: '100%'});
	});
	interval[2] = setInterval(function(){
		$eyes.hide();
		$head1animation2.show();
		setTimeout(function(){
			$eyes.show();
			$head1animation2.hide();
		}, 300);
	},600);
	/* LOAD */
	$body.removeClass('end2');
	$body.addClass('start2');
	$music.get(0).play();
	$music.animate({volume: 1}, 1000);
	/* END */
	setTimeout(function(){
		clearInterval(interval[2]);
		$body.removeClass('start2');
		$body.addClass('end2');
		$papes.removeClass('inactive');
		$music.animate({volume: 0}, 1000, function(){$music.get(0).pause();});
		setTimeout(function(){
			$animationhead.hide();
			$head1.css({background: 'url(img/reaction/gesicht_augen.png)'});
		}, 1400);
	}, animationTime);	
}
/* 		--- 3.3. ANIMATION THREE --- */
function animationThree(){
	$animationhead.show();
	$mouth.show();
	$timer.show();
	$timerDiv.animate({width: '0%'}, animationTime, function() {
		$timer.hide()
		$timerDiv.animate({width: '100%'});
	});
	interval[2] = setInterval(function(){
		$eyes.hide();
		$head1animation2.show();
		$mouth.hide();
		setTimeout(function(){
			$eyes.show();
			$head1animation2.hide();
			$mouth.hide();
			setTimeout(function(){
				$mouth.show();
				$eyes.hide();
				$head1animation2.hide();
			}, 300);
		}, 300);
	},900);
	/* LOAD */
	$body.removeClass('end3');
	$body.addClass('start3');
	$music.get(0).play();
	$music.animate({volume: 1}, 1000);
	/* END */
	setTimeout(function(){
		clearInterval(interval[2]);
		$body.removeClass('start3');
		$body.addClass('end3');
		$papes.removeClass('inactive');
		$music.animate({volume: 0}, 1000, function(){$music.get(0).pause();});
		setTimeout(function(){
			$animationhead.hide();
			$head1.css({background: 'url(img/reaction/gesicht_mund2.png)'});
		}, 1400);
	}, animationTime);	
}

/* 		--- 3.4. ANIMATION FOUR --- */
function animationFour(){
	$animationhead.show();
	$mouth2.show();
	$timer.show();
	$timerDiv.animate({width: '0%'}, animationTime, function() {
		$timer.hide()
		$timerDiv.animate({width: '100%'});
	});
	interval[2] = setInterval(function(){
		$mouth.show();
		$mouth2.hide();
		$eyebrownL.hide();
		setTimeout(function(){
			$mouth2.show();
			$mouth.hide();
			$eyebrownL.hide();
			setTimeout(function(){
				$mouth.hide();
				$mouth2.hide();
				$eyebrownL.show();
			}, 300);
		}, 300);
	},900);
	/* LOAD */
	$body.removeClass('end4');
	$body.addClass('start4');
	$animation4video.get(0).play();
	$music.get(0).play();
	$music.animate({volume: 1}, 1000);
	/* END */
	setTimeout(function(){
		clearInterval(interval[2]);
		$body.removeClass('start4');
		$body.addClass('end4');
		$papes.removeClass('inactive');
		$animation4video.get(0).pause();
		$music.animate({volume: 0}, 1000, function(){$music.get(0).pause();});
		setTimeout(function(){
			$animationhead.hide();
			$head1.css({background: 'url(img/reaction/gesicht_augenbraun_l.png)'});
		}, 1400);
	}, animationTime);
}

/* 		--- 3.4. ANIMATION FIVE --- */
function animationFive(){
	$animationhead.show();
	$eyebrown.show();
	$timer.show();
	$timerDiv.animate({width: '0%'}, animationTime, function() {
		$timer.hide()
		$timerDiv.animate({width: '100%'});
	});
	interval[2] = setInterval(function(){
		$eyebrown.hide();
		$eyebrownR.show();
		$eyebrownL.hide();
		setTimeout(function(){
			$eyebrownR.hide();
			$eyebrownL.show();
			$eyebrown.hide();
			setTimeout(function(){
				$eyebrownR.hide();
				$eyebrownL.hide();
				$eyebrown.show();
			}, 300);
		}, 300);
	},900);
	/* LOAD */
	$body.removeClass('end5');
	$body.addClass('start5');
	$animation5video.get(0).play();
	$music.get(0).play();
	$music.animate({volume: 1}, 1000);
	/* END */
	setTimeout(function(){
		clearInterval(interval[2]);
		$body.removeClass('start5');
		$body.addClass('end5');
		$papes.removeClass('inactive');
		$animation5video.get(0).pause();
		$music.animate({volume: 0}, 1000, function(){$music.get(0).pause();});
		setTimeout(function(){
			$animationhead.hide();
			$head1.css({background: 'url(img/reaction/gesicht_augenbraun.png)'});
		}, 1400);
	}, animationTime);
}

/* 		--- 3.4. ANIMATION SIX --- */
function animationSix(){
	$animationhead.show();
	$dead.show();
	$timer.show();
	$timerDiv.animate({width: '0%'}, animationTime, function() {
		$timer.hide()
		$timerDiv.animate({width: '100%'});
	});
	interval[2] = setInterval(function(){
		$dead.hide();
		$eyebrown.show();
		setTimeout(function(){
			$dead.show();
			$eyebrown.hide();
		}, 300);
	},600);
	/* LOAD */
	$body.removeClass('end6');
	$body.addClass('start6');
	$animation6video.get(0).play();
	$music.get(0).play();
	$music.animate({volume: 1}, 1000);
	/* END */
	setTimeout(function(){
		clearInterval(interval[2]);
		$papes.removeClass('inactive');
		/*$animation6video.get(0).pause();*/
		setTimeout(function(){
			$body.removeClass('end7');
			$body.addClass('start7');
			setTimeout(function(){
				$('#animation-end').hide();
				$('#animation-end').show();
			}, 500);
		}, 1000);
	}, animationTime);
}


/*
------------------------------------------------------------------
					4. FAQ
------------------------------------------------------------------
*/

$('.exit').click(function(event) {
	$('#FAQ').hide();
});
$('.open').click(function(event) {
	$('#FAQ').show();
});

/*
------------------------------------------------------------------
					5. Preloader
------------------------------------------------------------------
*/

jQuery(window).load(function (){
	$('body').addClass('end');
});

setTimeout(function(){
	$('body').addClass('end');
}, 48000);