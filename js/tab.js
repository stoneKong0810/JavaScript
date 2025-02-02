$('.list').click(function (e) {
  const indexId = parseInt(e.target.dataset.id);
  openTab(indexId);
});

function openTab(indexId) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(indexId).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(indexId).addClass('show');
}

let car = { name: 'BMW X6', price: [100000, 200000, 300000] };

$('.form-select')
  .eq(0)
  .on('input', function () {
    let value = this.value;
    let pants = [28, 30, 32, 34, 36];
    let shirts = ['S', 'M', 'L'];

    if (value === '모자') {
      $('.form-select').eq(1).addClass('form-hide');
    } else if (value === '셔츠') {
      $('.form-select').eq(1).removeClass('form-hide');
      $('.form-select').eq(1).html('');
      shirts.forEach(function (item) {
        $('.form-select').eq(1).append(`<option>${item}</option>`);
      });
    } else if (value === '바지') {
      $('.form-select').eq(1).removeClass('form-hide');
      $('.form-select').eq(1).html('');
      pants.forEach(function (item) {
        $('.form-select').eq(1).append(`<option>${item}</option>`);
      });
    }
  });
