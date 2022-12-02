$(document).ready(function () {


  let navBtn = $('.nav-item');

  let homeSection = $('#nav-container');
  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#legacy-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function () {

    let btnId = $(this).attr('id');

    if (btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if (btnId == 'legacy-menu') {
      scrollTo = servicesSection;
    } else if (btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else if (btnId == 'about-home') {
      scrollTo = homeSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});