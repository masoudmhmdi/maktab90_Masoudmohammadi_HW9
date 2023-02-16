const cardContainer = document.getElementById("card-container");
const totalPrice = document.getElementById("total-price");
const servicePrice = document.getElementById("service-price");
const discountPrice = document.getElementById("discount-price");
const discountInput = document.getElementById("discount-input");
const discountBtn = document.getElementById("discount-btn");
const payment = document.getElementById("payment");
const confirmBtn = document.getElementById("confirm");
const overlay = document.getElementById("overlay");
const sefareshBtn = document.getElementById("sefaresh-btn");
const modal = document.getElementById("modal");

let totalAllPrice = 0;

const db = [
  {
    productName: "همبرگر معمولی",
    productPrice: 8000,
    productImg: "./bill-generator-js/img/hamburger.png",
    count: 0,
    id: 1,
    totalPrice: 0,
  },
  {
    productName: "همبرگر مخصوص",
    productPrice: 10000,
    productImg: "./bill-generator-js/img/hamburger.png",
    count: 0,
    id: 2,
    totalPrice: 0,
  },
  {
    productName: "همبرگر معمولی با قارچ و پنیر",
    productPrice: 10000,
    productImg: "./bill-generator-js/img/hamburger.png",
    count: 0,
    id: 3,
    totalPrice: 0,
  },
  {
    productName: "همبرگر مخصوص با قارچ و پنیر",
    productPrice: 20000,
    productImg: "./bill-generator-js/img/hamburger.png",
    count: 0,
    id: 4,
    totalPrice: 0,
  },
  {
    productName: " سیب زمینی سرخ کرده ویژه",
    productPrice: 25000,
    productImg: "./bill-generator-js/img/french_fries.png",
    count: 0,
    id: 5,
    totalPrice: 0,
  },
  {
    productName: " سیب زمینی سرخ کرده",
    productPrice: 10000,
    productImg: "./bill-generator-js/img/french_fries.png",
    count: 0,
    id: 6,
    totalPrice: 0,
  },
  {
    productName: " نوشابه رژیمی",
    productPrice: 6000,
    productImg: "./bill-generator-js/img/soda.png",
    count: 0,
    id: 7,
    totalPrice: 0,
  },
  {
    productName: "نوشابه",
    productPrice: 5000,
    productImg: "./bill-generator-js/img/soda.png",
    count: 0,
    id: 8,
    totalPrice: 0,
  },
  {
    productName: " سالاد فصل",
    productPrice: 8000,
    productImg: "./bill-generator-js/img/salad.png",
    count: 0,
    id: 9,
    totalPrice: 0,
  },
  {
    productName: " سالاد سزار",
    productPrice: 25000,
    productImg: "./bill-generator-js/img/ceasar.png",
    count: 0,
    id: 10,
    totalPrice: 0,
  },
];

function renderProduct() {
  cardContainer.innerHTML = "";
  db.map((item) => {
    // console.log(item)
    let div0 = document.createElement("div");
    div0.classList.add(
      "col-md-5",
      "mx-auto",
      "card-style",
      "bg-white",
      "d-flex",
      "position-relative"
    );
    div0.setAttribute("dir", "rtl");
    let imgContainerDiv = document.createElement("div");
    imgContainerDiv.setAttribute("class", "img-container");
    let productImg = document.createElement("img");
    productImg.classList.add("w-100", "h-100");
    productImg.setAttribute("src", `${item.productImg}`);
    imgContainerDiv.appendChild(productImg);
    div0.appendChild(imgContainerDiv);
    let detailDiv = document.createElement("div");
    detailDiv.classList.add("d-flex", "flex-column", "justify-content-center");
    let h6 = document.createElement("h6");
    h6.classList.add("m-0");
    h6.textContent = item.productName;
    detailDiv.appendChild(h6);
    let smallPrice = document.createElement("small");
    smallPrice.textContent = ` ${item.productPrice} تومان`;
    detailDiv.appendChild(smallPrice);
    //create counter DIV
    let counterDiv = document.createElement("div");
    counterDiv.setAttribute("class", "counter");
    //crate add conter
    let addCounter = document.createElement("div");
    addCounter.setAttribute("id", item.id);
    addCounter.classList.add("add-counter");
    let addImg = document.createElement("img");
    addImg.setAttribute("src", "./bill-generator-js/img/add.png");
    addImg.setAttribute("class", "icon-style");
    addImg.setAttribute("onclick", "addProduct(this)");
    addCounter.setAttribute("id", item.id);
    addCounter.appendChild(addImg);
    counterDiv.appendChild(addCounter);
    //create num counter
    let numDiv = document.createElement("div");
    numDiv.classList.add("num-container");
    let numP = document.createElement("p");
    numP.textContent = item.count;
    numP.setAttribute("class", "counter-product");
    numDiv.appendChild(numP);
    counterDiv.appendChild(numDiv);
    //create minus container
    let minusContainer = document.createElement("div");
    minusContainer.classList.add("minus-conter");
    let minusImg = document.createElement("img");
    minusImg.setAttribute("src", "./bill-generator-js/img/minus.png");
    minusImg.setAttribute("class", "icon-style");
    minusImg.setAttribute("onclick", "minusProduct(this)");
    minusImg.setAttribute("id", item.id);
    minusContainer.appendChild(minusImg);
    counterDiv.appendChild(minusContainer);
    let totalPrice = document.createElement("p");
    totalPrice.textContent = `${item.totalPrice}تومان`;
    totalPrice.classList.add(
      "position-absolute",
      "start-0",
      "bottom-0",
      "mx-1"
    );
    detailDiv.appendChild(counterDiv);
    div0.appendChild(detailDiv);
    div0.appendChild(totalPrice);
    cardContainer.append(div0);
  });
  totalPrice.textContent = `${totalAllPrice}تومان`;
  servicePrice.textContent = `${totalAllPrice * 0.05}تومان`;
  payment.textContent=`${totalAllPrice -(totalAllPrice*setDiscount()/100)}تومان`
}
renderProduct();

function addProduct(event) {
  let id = event.parentElement.id;
  console.log(id);
  db.find((item) => {
    if (item.id == id) {
      item.count += 1;
      item.totalPrice += item.productPrice;
      totalAllPrice += item.productPrice;
      renderProduct();
    }
  });
}

function minusProduct(event) {
  let id = event.id;
  console.log(id);
  db.find((item) => {
    if (item.id == id && item.count > 0) {
      item.count -= 1;
      item.totalPrice -= item.productPrice;
      totalAllPrice -= item.productPrice;
      renderProduct();
    }
  });
}

function setDiscount() {
  let priceRange = discountInput.value;
  if (priceRange === "Silver") return 20;
  if (priceRange === "Bronze") return 10;
  if (priceRange === "Gold") return 30;
  return 0;
}

discountBtn.addEventListener("click", () => {
  discountPrice.textContent = `${setDiscount()}درصد`;
  payment.textContent=`${totalAllPrice -(totalAllPrice*setDiscount()/100)}تومان`
});


sefareshBtn.addEventListener("click",()=>{
  modal.style.height="20%"
  modal.style.padding="10px"
  overlay.style.display="block"
})


confirmBtn.addEventListener("click",()=>{
  modal.style.height="0%"
  modal.style.padding="0px"
  overlay.style.display="none"
})


overlay.addEventListener("click",()=>{
  modal.style.height="0%"
  modal.style.padding="0px"
  overlay.style.display="none"
})

