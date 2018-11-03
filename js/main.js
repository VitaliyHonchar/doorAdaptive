$(".item__img").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true
});
$(".furnitura .furnitura__brand").slick({
  arrows: false,
  dots: false,
  slidesToShow: 15,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1000000,
  pauseOnHover: true
});
$(".metal-doors .active__item").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
  responsive: [
  {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
{
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
$(".galery .article__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: false,
  responsive: [
{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".tab_mass.tab__slider").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  asNavFor: '.popular .tab_mass',
  pauseOnHover: false
});
$(".tab_shpon.tab__slider").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  asNavFor: '.popular .tab_shpon',
  pauseOnHover: true
});
$(".tab_eco-shpon.tab__slider").slick({
  autoplay: true,
  autoplaySpeed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.popular .tab_eco-shpon',
  pauseOnHover: true
});
$(".popular .slide_block.tab_eco-shpon ").slick({
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 1200,
  pauseOnHover: false,
  asNavFor: '.tab_eco-shpon.tab__slider',
  responsive: [
  {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
{
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },{
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".popular .slide_block.tab_shpon ").slick({
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplaySpeed: 1000,
  asNavFor: '.tab_shpon.tab__slider',
  pauseOnHover: false,
  responsive: [
  {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
{
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },{
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".popular .slide_block.tab_mass ").slick({
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplaySpeed: 1000,
  asNavFor: '.tab_mass.tab__slider',
  pauseOnHover: false,
  responsive: [
  {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
{
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },{
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(".furnitura .article__slider").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
});
$(".galery").magnificPopup({
  delegate: ".slick-track a",
  type: "image",
  gallery: {
    enabled: true
  },
  zoom: {
    enabled: true,
    duration: 300
  }
});
$(".article__slider").magnificPopup({
    delegate: ".slick-track a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});
$(".room_doors .tab__slider").magnificPopup({
    delegate: ".slick-track a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});

$(".sert .article__active").magnificPopup({
  delegate: ".slider__item a",
  type: "image",
  gallery: {
    enabled: true
  },
  zoom: {
    enabled: true,
    duration: 300
  }
});
$(".furnitura .article__active").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});
$(".metal-doors").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});
$(".popular").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 700
    }
});
$(".about").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 700
    }
});

// Це топове зхлопування, не хайд і шов того що тоді дісплей блок а не флекс)
$(document).ready(function() {
   $(window).scroll(function(){
    if ($(document).scrollTop() >127){
    $("#collapsed").css("display", "none");
  } else {
    $("#collapsed").css("display", "flex");
  }
});
});


$("#form").click(function() {
  $("#form-call-back,#popup__form").addClass("showFlex");
});

$("#conf_button").click(function(){
    $("#conf,#popup__form").addClass("showFlex");
});

$(".close").click(function() {
  $("#form-call-back,#conf,#popup__form").removeClass("showFlex");
});

