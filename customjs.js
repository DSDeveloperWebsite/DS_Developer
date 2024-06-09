$(document).ready(function () {
  $(window).scroll(function () {
    $(this).scrollTop() > 2
      ? $(".fHeader").addClass("active")
      : $(".fHeader").removeClass("active");
  }),
    $(".menu-horizontal nav > ul > li > ul").addClass("sub"),
    $(".menu-horizontal nav > ul > li > ul > li > ul").addClass("sub-mane"),
    $(" header  nav ").addClass("navbar navbar-expand-lg ");
  var a = $("#nav-up");
  $(window).scroll(function () {
    $(window).scrollTop() > 300
      ? a.css("display", "block")
      : a.css("display", "none");
  }),
    a.on("click", function (a) {
      $("html, body").animate({ scrollTop: 0 }, 500, "swing", function () {});
    }),
    $(".fModuleTitle ").addClass("wow zoomIn   animated"),
    $(".container-function").wrapInner("<div class='container'></div>"),
    $("ul.fGalleryImages .fGalleryItem").wrapInner(
      "<div class='ItemfinnerGallery '></div>"
    ),
    $(".fRegion.region-footer").wrapInner("<div class='row'></div>"),
    $(".fRegion.region-header").wrapInner("<div class='row  w-100'></div>"),
    $(".fRegion.region-headertop").wrapInner("<div class='row w-100'></div>"),
    $(".f-about-image-home, .f-about-image , .f-about-text   ").wrapAll(
      "<div class='f-about-container'><div class='container'><div class='row'></div></div></div>"
    ),
    $(".f-testimonial-text , .f-testimonial-image   ").wrapAll(
      "<div class='f-testimonial-container'><div class='container'><div class='row'></div></div></div>"
    ),
    $(".f-contact-form , .f-contact-side-text   ").wrapAll(
      "<div class='f-contact-container'><div class='row f-contact-container-row'></div></div>"
    ),
    $(
      ".f-video-background-blog , .f-blogs-categories , .f-button-blogs   "
    ).wrapAll(
      "<div class='f-home-blog-container'><div class='row f-blog-container-row'></div></div>"
    ),
    $(".f-after-blog-image , .f-after-blog-text ").wrapAll(
      "<div class='f-after-blog-container'><div class='container'><div class='row f-after-blog-container-row'></div></div></div>"
    ),
    $(".f-blog-menus , .f-staff-picks ").wrapAll(
      "<div class='f-blog-menu-staff'><div class='row row-blog-menu-staff'></div></div>"
    ),
    $(".f-blog-first-section , .f-blog-menu-staff ").wrapAll(
      "<div class='f-blog-f-container'><div class='container'><div class='row row-blog-main-1'></div></div></div>"
    ),
    $(".f-follow-us-blog-page , .f-blog-subscribe-page  ").wrapAll(
      "<div class='f-blog-follow-subs'><div class='row row-blog-follow-subs'></div></div>"
    ),
    $(".f-blog-small, .f-blog-follow-subs ").wrapAll(
      "<div class='f-blog-f2-container'><div class='container'><div class='row row-blog-main-2'></div></div></div>"
    );
});
