const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "RUN FALCON",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./img/adidas/runfalcon-black.png",
      },
      {
        code: "white",
        img: "./img/adidas/runfalcon-white.png",
      },
    ],
  },
  {
    id: 2,
    title: "PRO N3XT",
    price: 110,
    colors: [
      {
        code: "black",
        img: "./img/adidas/pro-next-black.png",
      },
      {
        code: "white",
        img: "./img/adidas/pro-next-white.png",
      },
    ],
  },
  {
    id: 3,
    title: "HOOPS",
    price: 199,
    colors: [
      {
        code: "black",
        img: "./img//adidas/hoops-black.png",
      },
      {
        code: "white",
        img: "./img//adidas/hoops-white.png",
      },
    ],
  },
  {
    id: 4,
    title: "LITE RACER",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./img/adidas/lite-racer-black.png",
      },
      {
        code: "white",
        img: "./img/adidas/lite-racer-white.png",
      },
    ],
  },
  {
    id: 5,
    title: "KAPTIR",
    price: 89,
    colors: [
      {
        code: "black",
        img: "./img/adidas/kaptir-black.png",
      },
      {
        code: "white",
        img: "./img/adidas/kaptir-white.png",
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

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
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