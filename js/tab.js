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
