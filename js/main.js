// var nav = document.getElementsByClassName('js-side-navigation')[0];
var nav = $('.js-side-navigation');
var year = $('.js-date-year');

window.onscroll = function () {
  var wScroll = window.pageYOffset;

  navActive(wScroll);
};
window.onload = function () {
  var wScroll = window.pageYOffset;
  var date = new Date();

  navActive(wScroll);
  year.text(date.getFullYear());
};


function navActive(wScroll) {
  if (wScroll > 30) {
    nav.addClass('active')
  } else {
    nav.removeClass('active')
  }
}