// tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//  hamburger Animation

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("close");
  });
});

// AOS

AOS.init({
  once: false,
  duration: 1500,
  anchorPlacement: 'center-bottom',
  easing: "ease-in-out",
  mirror: "true",
});

Splitting();
