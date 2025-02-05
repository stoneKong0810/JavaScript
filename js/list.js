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
    <button class="buy">구매</button>
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

$('.buy').click(function (e) {
  alert('장바구니에 추가되었습니다.');
  let title = $(e.target).siblings('h5').text();
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([title]));
  } else if (localStorage.getItem('cart') !== null) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(title);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
});
