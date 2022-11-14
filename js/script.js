jQuery(document).ready(function ($) {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('header').addClass('is-active')
    } else {
      $('header').removeClass('is-active')
    };

    var h = $('header').offset();
    if (h.left > 100) {
      $('.arrow-wrap').addClass('is-active');
    } else {
      $('.arrow-wrap').removeClass('is-active');
    }
  });


  $(document).on('click', '.icon-menu a', function (e) {
    e.preventDefault();

    $('.top-line').toggleClass('is-active');
    $('.menu-site').toggleClass('is-active');
    $('.menu-site').addClass('is-index');
    if (!$('.top-line').hasClass('is-active')) {
      setTimeout(function () {
        $('.menu-site').removeClass('is-index');
      }, 2000);
    }
  });

  $(document).on('mouseover', '.menu-wrap ol li', function (e) {
    var indexItem = $(this).index();
    $('.menu-site .item-3').addClass('bg-' + indexItem);
  });

  $(document).on('mouseout', '.menu-wrap ol li', function (e) {
    var indexItem = $(this).index();
    $('.menu-site .item-3').removeClass('bg-' + indexItem);
  });

  $(document).on('mouseover', '.cases-big-menu ol li', function (e) {
    var indexItem = $(this).index();
    $('.right-bg').addClass('bg-' + indexItem);
  });

  $(document).on('mouseout', '.cases-big-menu ol li', function (e) {
    var indexItem = $(this).index();
    $('.right-bg').removeClass('bg-' + indexItem);
  });

  $(document).on('mouseover', '.cases-big-menu ol li', function (e) {
    $('.cases-big-menu ol').addClass('is-hover');
  });

  $(document).on('mouseout', '.cases-big-menu ol li', function (e) {
    $('.cases-big-menu ol').removeClass('is-hover');
  });

  $('.marquee').marquee({
    duration: 15000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',

  });

  $('.scroll-block-marquee').marquee({
    duration: 7500,
    gap: 500,
    delayBeforeStart: 50,
    direction: 'up',
    duplicated: true
  });

  $(window).on('load', function () {
    if ($("div").is(".about-page-wrap .swiper-slide-7")) {
      var textPos = $('.about-page-wrap .swiper-slide-7').offset().top;

      $(window).scroll(function () {

        var topOfWindow = $(window).scrollTop();

        if ($('.about-page-wrap .swiper-slide-7').hasClass('stop')) {
          return;
        }

        if (textPos < topOfWindow + 500) {
          $('.about-swiper .swiper-slide-7 p.number span').animateNumber({
            number: 120
          }, 2000);
          $('.about-page-wrap .swiper-slide-7').addClass('stop');
        }
      });
    }

  });

  $(".range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    grid: false,
    min: 900000,
    max: 10000000,
    to: 3000000,
    postfix: "₽",
    hide_min_max: true,
  });


  $('.default-form .input-wrap input').change(function () {
    myInput = $(this);
    tmpval = $(this).val();
    if (tmpval == '') {
      $(myInput).siblings('label').removeClass('is-active');
    } else {
      $(myInput).siblings('label').addClass('is-active');
    }
  });
  $('.default-form .input-wrap input').focus(function (e) {
    $(this).siblings('label').addClass('is-focus')
  });
  $('.default-form .input-wrap input').blur(function (e) {
    $(this).siblings('label').removeClass('is-focus')
  });

  /*---------ACCORDION-----------------*/
  $('.accordion-default .accordion-cell').click(function () {
    if ($(this).hasClass('is-collapsed')) {
      $(this).removeClass('is-collapsed');
      $(this).siblings().removeClass('is-expanded');
      $(this).addClass('is-expanded');
      $(this).siblings().addClass('is-collapsed');
    } else {
      $(this).toggleClass('is-expanded');
      $(this).siblings().toggleClass('is-collapsed');
    }
  });

  $('.accordion-more .accordion-cell').click(function () {
    if ($(this).hasClass('is-collapsed')) {
      $(this).removeClass('is-collapsed');
      $(this).addClass('is-expanded');
      $(this).siblings().addClass('is-collapsed');
      $(this).siblings().removeClass('is-expanded');
    }
    if(window.innerWidth < 1025){
      if ($(this).hasClass('is-expanded')) {
        $(this).removeClass('is-expanded');
      } else{
        $(this).siblings().removeClass('is-expanded');
        $(this).addClass('is-expanded');
      }
    }
  });

  $(window).load(function () {
    $(window).scroll(function () {
      var winTop = $(window).scrollTop(),
        docHeight = $('.progress-bar-heating').height(),
        winHeight = $(window).height();

      var totalScroll = (winTop / (docHeight - winHeight)) * 100;

      $(".progress-bar span").css("width", totalScroll + "%");
    });
  });


  //PRELOADER

  $(window).load(function () {
    $('html').addClass('is-ready')
    setTimeout(function () {
      $('html').removeClass('jump-page')
    }, 2000);


  });

  const animationRemoteLogo = bodymovin.loadAnimation({
    container: document.getElementById('anim-logo'),
    path: ' js/logo-anim.json',
    autoplay: true,
    renderer: 'svg',
    loop: false
  });

  const animationRemoteLogoMonitor = bodymovin.loadAnimation({
    container: document.getElementById('anim-logo-monitor'),
    path: ' js/logo-anim.json',
    autoplay: true,
    renderer: 'svg',
    loop: true
  });

  //CURSOR
  var cursor = $(".cursor"),
      cursorInner = $(".cursor span");

  $(window).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2
    });
  });


  if(window.innerWidth > 768){
    $(window)
      .mouseleave(function () {
        cursor.css({
          opacity: "0"
        });
      })
      .mouseenter(function () {
        cursor.css({
          opacity: "1"
        });
      });

    $("a, button, .top-line .lang-wrap ul li")
      .mouseenter(function () {
        cursor.css({
          background:"transparent",
        });
        cursorInner.css({
          transform: "scale(1)translate(-50%,-50%)",
        });
      })
      .mouseleave(function () {
        cursor.css({
          background:"#f5f5f5",
        });
        cursorInner.css({
          transform: "scale(0)translate(-50%,-50%)",
        });
      });

  }



  /*-------NEW-------*/
  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tabs-content").children("div").hide();
          $(tabs).find(".tabs-content").children("div").eq(i).show();
          $(tabs).find(".tabs-menu").children("li").removeClass("active");
          $(tabs).find(".tabs-menu").children("li").eq(i).addClass("active");
        }

        showPage(0);

        $(tabs).find(".tabs-menu").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).find(".tabs-menu").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".tabs").lightTabs();


  $('.about-slider').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    smartSpeed: 1400,
  });


  $('input[name=file-upload]').change(function(){
    $this = $(this);
    $name = $(this).val().replace('C:\\fakepath\\', '');
    $this.closest('.label-file').addClass('is-add-file');
    $this.closest('.label-file').find('.label').text($name);
  });

  $(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    $this = $(this);
    $this.closest('.label-file').removeClass('is-add-file');
    $this.closest('.label-file').find('input:file').val('');
    $this.closest('.input-wrap-file').find('.label').text('Прикрепить резюме');
  });

  $('select').niceSelect();

  $(window).on('load', function(){
    $(".nice-select .list").wrap('<div class="wrap-list"></div>')
    $(".wrap-list").niceScroll(".nice-select .list");
  })

  $(document).on('click', '.select-block', function (e) {
    setTimeout(function() {
      if($('.select-block .nice-select').hasClass('open')){
        $('.nicescroll-rails').addClass('is-opacity')
      }else{
        $('.nicescroll-rails').removeClass('is-opacity')
      }

    }, 0);

  });

  $('.form-career').each(function(){

    var form = $(this);

    form.find('.nice-select').addClass('empty_field');


    function checkInput(){
      form.find('.select-block').each(function(){

        if($('.form-career .nice-select .list li:first-child').hasClass('selected')){
          $('.form-career .nice-select').removeClass('empty_field');
          $('.select-block').removeClass('is-change');
        }else{
          $('.form-career .nice-select').removeClass('empty_field');
          $('.select-block').addClass('is-change');
        }
      });
    }
    setInterval(function(){
      checkInput();

    },100);
  });

  $(document).on('click', '.tabs-menu li', function (e){
    let top = $('.career-swiper .swiper-slide-2 .wrap .right').offset().top;
    if(window.innerWidth < 1025){
      $('body,html').animate({scrollTop: top - 40}, 1000);
    }
  })
});



