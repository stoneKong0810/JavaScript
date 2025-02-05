var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

function showMore(products) {
  products.forEach((data, i) => {
    let cardTemplate = `<div class="col-sm-4">
    <img src="https://picsum.photos/600" class="w-100" />
    <h5>${data.title}</h5>
    <p>가격 : ${data.price}</p>
  </div>`;

    $('.row').append(cardTemplate);
  });
}

showMore(products);

let clicked = 1;
$('#more').click(() => {
  if (clicked == 1) {
    $.get(`https://codingapple1.github.io/js/more${clicked}.json`).done(
      (data) => {
        showMore(data);
        clicked++;
      }
    );
  } else if (clicked == 2) {
    $.get(`https://codingapple1.github.io/js/more${clicked}.json`).done(
      (data) => {
        showMore(data);
        clicked++;
      }
    );
  } else {
    alert('더이상 상품이 없습니다.');
    $('#more').hide();
  }
});

$('#price').click(function () {
  products.sort((a, b) => a.price - b.price);
  $('.row').empty();
  showMore(products);
});

$('#cba').click(function () {
  products.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  $('.row').empty();
  showMore(products);
});

$('#filter').click(function () {
  let filter = products.filter((data) => data.price <= 60000);
  $('.row').empty();
  showMore(filter);
});
