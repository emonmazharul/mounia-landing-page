
var swiperZero = new Swiper(".mySwiperZero", {
  direction: "vertical",
  slidesPerView:6,
  spaceBetween:20,
  // pagination: {
  //   el: ".swiper-pagination-zero",
  //   clickable: true,
  // },
});

var swiperZeroForMobile = new Swiper(".mySwiperZeroForMobile", {
  slidesPerView:1,
  spaceBetween:20,
  pagination: {
    el: ".swiper-pagination-zeroForMobile",
    clickable: true,
  },
});

var swiperOne = new Swiper(".mySwiperOne", {
    slidesPerView:1,
    spaceBetween:20,
    pagination: {
      el: ".swiper-pagination-one",
      clickable: true,
    },
  });

//   var swiperTwo = new Swiper(".mySwiperTwo", {
//     // direction: "vertical",
//     slidesPerView:1,
//     spaceBetween:20,
//     pagination: {
//       el: ".swiperTwo-pagination",
//     //   clickable: true,
//     },
//   });

var swiperThree = new Swiper(".mySwiperThree", {
    slidesPerView:1,
    spaceBetween:20,
    pagination: {
      el: ".swiper-pagination-three",
      clickable: true,
    },
  });


var swiperFour = new Swiper(".mySwiperFour", {
  slidesPerView:1,
  spaceBetween:20,
  pagination: {
    el: ".swiper-pagination-four",
    clickable: true,
  },
});

// var swiperFive = new Swiper(".mySwiperFive", {
//   slidesPerView:1,
//   spaceBetween:5,
//   onChange: () => {
//     console.log('changing')
//   },
//   pagination: {
//     el: ".swiper-pagination-five",
//   //   clickable: true,
//   },
// });

// let swiperFiveElem = document.querySelector('.mySwiperFive')
// swiperFiveElem.addEventListener('slidechange', e => {
//   console.log(e);
// })