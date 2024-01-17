const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "NIKE",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "ADIDAS",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./img/hoops-black.png",
      },
      {
        code: "white",
        img: "./img/hoops-white.png",
      },
    ],
  },
  {
    id: 3,
    title: "SKECHERS",
    price: 109,
    colors: [
      {
        code: "black",
        img: "./img/unos-black.png",
      },
      {
        code: "white",
        img: "./img/unos-white.png",
      },
    ],
  },
  {
    id: 4,
    title: "PUMA",
    price: 129,
    colors: [
      {
        code: "white",
        img: "./img/ca-pro.png",
      },
      {
        code: "black",
        img: "./img/ca-pro-2.png",
      },
    ],
  },
  {
    id: 5,
    title: "REEBOK",
    price: 99,
    colors: [
      {
        code: "white",
        img: "./img/chill-1.png",
      },
      {
        code: "black",
        img: "./img/chill-2.png",
      },
    ],
  },
];
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
//----------------------------------------------------------
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.sliderItem');

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}% )`;

    choosenProduct = products[currentSlide];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    changeSlide(index);
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const productButton = document.querySelector(".productButton");
  const payButton = document.querySelector(".payButton");
  const confirmButton = document.querySelector(".confirmButton");
  const payment = document.querySelector(".payment");
  const bill = document.querySelector(".bill");
  const done = document.querySelector(".done");
  const close = document.querySelector(".close");
  const close1 = document.querySelector(".close1");
  const close2 = document.querySelector(".close2");

  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
    // bill.style.display = "none";
  });

  payButton.addEventListener("click", () => {
    payment.style.display = "none";
    bill.style.display = "flex";
  });
  confirmButton.addEventListener("click", () => {
    payment.style.display = "none";
    bill.style.display = "none";
    done.style.display = "flex";
  });

  close.addEventListener("click", () => {
    payment.style.display = "none";
    // bill.style.display = "none";
  });
  close1.addEventListener("click", () => {
    // payment.style.display = "none";
    bill.style.display = "none";
  });  
  close2.addEventListener("click", () => {
    // payment.style.display = "none";
    done.style.display = "none";
  });
});