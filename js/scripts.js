$(function(){

	$('.menu-toggle').on('click', function(){

		$('.menu').slideToggle(300, function(){

			if($(this).css('display') === 'none'){

				$(this).removeAttr('style');
			};

		});
		
	});

});


$(function(){

	$('.button-byrget').on('click', function(){

		$('.upperheader-menu').slideToggle(300, function(){

			if($(this).css('display') === 'none'){

				$(this).removeAttr('style');
			};

		});
		
	});

});

$(function(){

	$('.footer-menu-toggle').on('click', function(){

		$('.footer-menu').slideToggle(300, function(){

			if($(this).css('display') === 'none'){

				$(this).removeAttr('style');
			};

		});
		
	});

});







  $(document).ready(function() {
    $('body').append('<div id="toTop"></div>');
    $(window).scroll(function() {
      if($(this).scrollTop() > 200) {
        $('#toTop').fadeIn(); 
      } else {
        $('#toTop').fadeOut();
      }
    });
   
    $('#toTop').click(function() {
      $('body, html').animate({scrollTop: 0}, 400);
    }); 
  });
