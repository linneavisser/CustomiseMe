const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url =
  "https://customiseme-0b0d.restdb.io/rest/soaps/6226145b0f9df7160011cff2";

//console.log(id);
//console.log(url);
//console.log(urlParams.get("_id"));

//console.log(urlParams.get("id"));

//API-key
const options = {
  headers: {
    "x-apikey": "6229dd86dced170e8c83a0e5",
  },
};
//fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showSoap(data));

//populate the page
function showSoap(soap) {
  console.log(soap);
  document.querySelector(".soapName").textContent = soap.name;
  document.querySelector(".soapPrice").textContent = `DKK ${soap.price}`;

  document.querySelector(".productPageimg img").src = soap.img;

  document.querySelector(".oils p").textContent = soap.oils;
  document.querySelector(".ingredients p").textContent = soap.ingredients;
  document.querySelector(".color p").textContent = soap.color;
}
