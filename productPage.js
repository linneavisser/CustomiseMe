const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
//const url = ;

//API-key
const options = {
  headers: {
    "x-apikey": "620a2fc134fd6215658584c2",
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
