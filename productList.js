const urlParams = new URLSearchParams(window.location.search);
const url = "https://customiseme-0b0d.restdb.io/rest/soaps";

// API-Key
const options = {
  headers: {
    "x-apikey": "e557a215ef2bf824d17dd9b6f5819140f96b3",
  },
};

//fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => handleBarList(data));

function handleProductList(product) {
  product.forEach((soap) => {
    console.log(soap);
    //Grab template
    const template = document.querySelector(".soapListTemplate").content;
    //Clone it
    const clone = template.cloneNode(true);
    //Populate with data
    clone.querySelector(".productList h3").textContent = soap.name;
    clone.querySelector(".productList p").textContent = `DKK ${soap.price}`;
    clone.querySelector(".productList img").src = soap.img;
    //Append it to the DOM
    const main = document.querySelector("main.mainProductL");
    main.appendChild(clone);
  });
}
