let contatore = 1;

const addProduct = () => {
  const input = document.querySelector("input");
  const productText = input.value;
  if(productText.trim() !== ""){
    const li = document.createElement("li");
    li.innerText = productText;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = true;
    document.body.appendChild(li);
    li.appendChild(checkBox);
    input.value = ""
  }
  else{
    alert("Inserisci un prodotto");
  }
};

addProduct()