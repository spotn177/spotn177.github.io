$('.nav-item').click(function() {

	var button_name = $(this).data('button');

		$('.content').attr('class', 'column content');

		$('.content').addClass(button_name);

		$('.nav-item').removeClass('active');
		$(this).addClass('active');
		$('.about-text').addClass('hide');


	if (button_name == 'beyonce') {
		$('.slay').removeClass('hide');

		$('audio')[0].play();

		$(this).removeClass('active');

	} else if (button_name == 'about') {
		$('.about-text').removeClass('hide');
	}

});

$('.close').click(function() {
	$('.slay').addClass('hide');
	$('audio')[0].pause();

});
