$('.tab-button').each(function () {
  $(this).on('click', function () {
    var index = $(this).index();

    $('.tab-button').removeClass('orange');
    $(this).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(index).addClass('show');
  });
});
