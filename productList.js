const urlParams = new URLSearchParams(window.location.search);
const url = "https://customiseme-0b0d.restdb.io/rest/soaps";

// API-Key
const options = {
  headers: {
    "x-apikey": "6229dd86dced170e8c83a0e5",
  },
};

//fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(product) {
  product.forEach((soap) => {
    console.log(soap);
    //Grab template
    const template = document.querySelector(".soapListTemplate").content;
    //Clone it
    const clone = template.cloneNode(true);
    //Populate with data
    clone
      .querySelector(".productList a")
      .setAttribute("href", `productPage.html?_id=${soap.id}`);
    clone.querySelector(".productList h3").textContent = soap.name;
    clone.querySelector(".productList p").textContent = `DKK ${soap.price}`;
    clone.querySelector(".productList img").src = soap.img;
    //Append it to the DOM
    const main = document.querySelector("main");
    main.appendChild(clone);
  });
}
