$('.navbar-toggler').on('click', function () {
  $('.list-group').slideToggle('show-list');
});

$('#btn-login').on('click', function () {
  $('.black-bg').toggleClass('show-modal');
});

$('#close').on('click', function () {
  $('.black-bg').toggleClass('show-modal');
});

$('#login').on('click', function (e) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === '' || password === '') {
    alert('로그인 실패');
    e.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert('이메일 형식이 아닙니다.');
    e.preventDefault();
  } else if (password.length < 6) {
    alert('비밀번호는 6자 이상이어야 합니다.');
    e.preventDefault();
  } else {
    $('.black-bg').toggleClass('show-modal');
    alert('로그인 성공');
  }
});

let count = 1;
$('.badge').on('click', function () {
  count++;
  if (count % 2 == 0) {
    $('.badge').html('Light 🔄');
    $('body').toggleClass('dark');
  } else {
    $('.badge').html('Dark 🔄');
    $('body').toggleClass('dark');
  }
});

setInterval(function () {
  $('.sec-timeout').html($('.sec-timeout').html() - 1);
  if ($('.sec-timeout').html() == 0) {
    $('.alert').fadeOut();
  }
}, 1000);

$('.slide-1').on('click', function () {
  $('.slide-container').css('transform', 'translateX(0)');
});
$('.slide-2').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-100vw)');
});
$('.slide-3').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-200vw)');
});

let slideIndex = 1;
$('.next').on('click', function () {
  if (slideIndex == 1) {
    $('.slide-container').css('transform', 'translateX(-100vw)');
    slideIndex++;
  } else if (slideIndex == 2) {
    $('.slide-container').css('transform', 'translateX(-200vw)');
    slideIndex++;
  } else {
    $('.slide-container').css('transform', 'translateX(0)');
    slideIndex = 1;
  }
});

$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 100) {
    $('.navbar-brand').css('font-size', '20px');
  } else {
    $('.navbar-brand').css('font-size', '30px');
  }
});

let scrollCount = 0;
$('.lorem').on('scroll', function () {
  let scrolled = document.querySelector('.lorem').scrollTop;
  let scrollH = document.querySelector('.lorem').scrollHeight;
  let clientH = document.querySelector('.lorem').clientHeight;

  if (scrolled + clientH >= scrollH - 10 && scrollCount == 0) {
    scrollCount = 1;
    alert('스크롤이 끝까지 도달했습니다.');
  }
});

$('.black-bg').on('click', function (e) {
  if (e.target === e.currentTarget) {
    $('.black-bg').removeClass('show-modal');
  }
});
