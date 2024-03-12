jQuery(document).ready(function () {
  $(".close_btn, .bg_close").on("click", function (e) {
    e.preventDefault();
    $(".popup_wrapper").fadeOut();
  });

  $(".q_view").on("click", function () {
    $(".popup_wrapper").css('display','flex');
  });

  $(".min_slider").owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 3000,
    items: 1,
    margin: 20,
  });
  $(".slider_image").owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 3000,
    items: 4,
    margin: 20,
  });
  $(".category_slider").owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 2000,
    margin: 4,
    responsive: {
      0: {
        items: 2,
        autoplay: true,
      },
      600: {
        items: 3,
        nav: false,
        autoplay: true,
      },
      1000: {
        items: 5,
        autoplay: true,
      },
    },
  });
  $("#thumbnailSlider img").on("click", function () {
    $("#mainImage").attr("src", $(this).attr("src"));
  });
  $("#count_started").countdown("2024-5-5", function (event) {
    $(this).html(
      '<ul class="count_style">' +
        "<li>" +
        event.strftime("%D") +
        "<span> days</span> </li>" +
        "<li>" +
        event.strftime("%H") +
        "<span> hr</span></li>" +
        "<li>" +
        event.strftime("%M") +
        "<span> min</span> </li>" +
        "<li>" +
        event.strftime("%S") +
        "<span> sec</span> </li>" +
        "</ul>"
    );
  });

  function copyMenu() {
    let headerMenu = $(".header_menu");
    let headerMenuPlace = $(".off_canvas nav");
    headerMenuPlace.html(headerMenu.html());

    let topMenu = $(".header_top_menu");
    let place = $(".top_nav");
    place.html(topMenu.html());
  }
  copyMenu();

  // mobile menu

  let siteMenu = $(".site");
  let btnTrigger = $(".trigger");
  btnTrigger.on("click", function () {
    siteMenu.addClass("show");
  });
  let close = $(".t_close");
  close.on("click", function () {
    siteMenu.removeClass("show");
  });

  let submenu1 = $(".off_canvas nav ul li");
  submenu1.on("click", toggle);
  function toggle(e) {
    e.preventDefault();
    const closestLi = $(this).closest(".off_canvas nav  ul  li");
    $(".off_canvas nav ul  li").not(closestLi).removeClass("expand");
    closestLi.toggleClass("expand");
  }
  submenu2 = $(".off_canvas nav ul li ul li");
  submenu2.on("click", toggle2);
  function toggle2(e) {
    e.preventDefault();
    const closestLi = $(this).closest(".off_canvas nav  ul  li ul  li");
    $(".off_canvas nav ul  li ul  li").not(closestLi).removeClass("expands");
    closestLi.toggleClass("expands");
  }
});
