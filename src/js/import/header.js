import device from 'current-device';

//Top Banner
$('.top__banner .close').on('click', function() {
  $('.top__banner').fadeOut();
});


//Music Switcher
let music  = $('.music');

music.on('click', function() {
  let icon = music.find('i');
  let text = music.find('p');
  if (icon.hasClass('icon-music-on')) {
    icon.removeClass('icon-music-on');
    icon.addClass('icon-music-off');
    text.text('Музыка выкл.');
  } else{
    icon.removeClass('icon-music-off');
    icon.addClass('icon-music-on');
    text.text('Музыка вкл.');
  }
});


//Search
$(window).on('resize', function() {
  searchInput();
});

searchInput();

function searchInput() {
  let seacrh = $('.search');
  let offsetLeft;

  if(device.mobile()) {
    getOfssetLeft($('.header__info'), 0);
  } else if(device.tablet()) {
    getOfssetLeft($('.logo'), 20);
  } else if(device.desktop()) {
    getOfssetLeft($('.header__info'), 10);
  }

  function getOfssetLeft(param, px) {
    offsetLeft = ($(window).width() - (param.offset().left + param.outerWidth())) - px;
  }

  

  $('.open-seacrh').on('click', function() {
    seacrh.width(offsetLeft);
    seacrh.css('transform', 'translateX(0)');
  });

  $('.search .close').on('click', function() {
    seacrh.css('transform', 'translateX(100%)');
  });

}



//Menu

let triangle = $('nav ul li:first-child').offset().left;

$('.sub__triangle').offset({left: triangle + 20});

//Fixed Header
$(window).scroll(function() {
  if ($(window).scrollTop() >= 300) {
    $('.header').addClass('fixed');
    $('.top__banner').addClass('fixed');
  }
  else {
    $('.header').removeClass('fixed');
    $('.top__banner').removeClass('fixed');
  }
});