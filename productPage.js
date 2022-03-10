const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url = "https://customiseme-0b0d.restdb.io/rest/soaps/" + id;

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

  document.querySelector(".oils").textContent = soap.oils;
  document.querySelector(".ingredients").textContent = soap.ingredients;
  document.querySelector(".color").textContent = soap.color;
}
