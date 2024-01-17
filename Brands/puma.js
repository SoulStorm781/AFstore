const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SUEDE CLASSIC",
    price: 149,
    colors: [
      {
        code: "teal",
        img: "./img/puma/suede1.png",
      },
      {
        code: "#3EA4BF",
        img: "./img/puma/suede2.png",
      },
    ],
  },
  {
    id: 2,
    title: "VOLTAIC EVO",
    price: 110,
    colors: [
      {
        code: "black",
        img: "./img/puma/EVO-3.png",
      },
      {
        code: "#E2E0D1",
        img: "./img/puma/EVO-4.png",
      },
    ],
  },
  {
    id: 3,
    title: "FUTURE RIDER",
    price: 199,
    colors: [
      {
        code: "teal",
        img: "./img/puma/rider-1.png",
      },
      {
        code: "#E2E0D1",
        img: "./img/puma/rider-2.png",
      },
    ],
  },
  {
    id: 4,
    title: "FUSE 2.0",
    price: 149,
    colors: [
      {
        code: "red",
        img: "./img/puma/fuse-1.png",
      },
      {
        code: "black",
        img: "./img/puma/fuse-2.png",
      },
    ],
  },
  {
    id: 5,
    title: "CA PRO",
    price: 89,
    colors: [
      {
        code: "white",
        img: "./img/puma/ca-pro.png",
      },
      {
        code: "#294B6E",
        img: "./img/puma/ca-pro-2.png",
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