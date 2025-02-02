var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
document.querySelectorAll('.card-body p')[0].innerHTML =
  '가격 : ' + products[0].price;

document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
document.querySelectorAll('.card-body p')[1].innerHTML =
  '가격 : ' + products[1].price;
