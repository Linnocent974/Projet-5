
// Récupération des paramètres depuis l'URL                                                     // ---------- ↓↓↓↓↓ Commentaires persos ↓↓↓↓↓ ----------

let str = window.location.href;                                                                 // ---------- window.location.href indique l'URL actuelle ----------       
let url = new URL(str);
let idProduct = url.searchParams.get("id");                                                     // ---------- Je récupère mon id via URLSearchParams pour afficher mon article ----------
console.log(idProduct);


// Interroger l’API pour récupérer les détails du produit

function fillProductPage(id); {
    fetch("http://localhost:3000/api/products/" + id)
        .then((apiAnswer) => {


            return apiAnswer.json();
        })
        .then(async function (res) {
            item = await res;

            document.getElementById('product_picture').alt = item.altTxt;
            document.getElementById('product_picture').alt = item.imageUrl;
            document.getElementById('title').textContent = item.name;
            document.getElementById('price').textContent = item.price;
            document.getElementById('description').textContent = item.description;

            for (let color of item.colors) {

                let itemColor = document.createElement("option");
                document.getElementById('colors').appendChild(itemColor);
                itemColor.value = color;
                itemColor.innerHTML = color;
            }
        })
}
fillProductPage(id);


function addToCart() {
    
    document.getElementById('addtocart').addEventListener("click" , (evenement) => { 
        if (document.getElementById('colors').value == 0)
            alert("sélectionner une couleur");
        if (document.getElementById('quantity').value > 0 && document.getElementById('quantity').value < 100 && document.getElementById('quantity').value != 0 && document.getElementById('colors').value != 0 ) {
            

            //récupérer les option de l' article à ajouter au panier
            let productToAdd = {
                idProduit: id,
                color: document.getElementById('colors').value,
                quantity: document.getElementById('quantity').value,
                name: document.getElementById('title').textContent,
                description: document.getElementById('description').textContent,
                imgUrl: document.getElementById('product_picture').scr,
                imgAlt: document.getElementById('product_picture').alt
            };

            //Buffer local storage -----------------
            let bufferLocalStorage = JSON.parse(window.localStorage.getItem("produit"));


            //Si bufferLocalStorage n'est pas vide ------------------------------------------------
            if (bufferLocalStorage) {
                const found = bufferLocalStorage.find(
                    (cartProduct) => cartProduct.idProduit === id && cartProduct.color === productToAdd.color);


                //Si produit déja existant dans le panier
                if (found) {

                    found.quantity = parseInt(productToAdd.quantity) + parseInt(found.quantity);
                    window.localStorage.setItem("produit", JSON.stringify(bufferLocaleStorage))
                    alert('produit' + productToAdd.name + 'ajouté au panier');

                    //si nouveau dans le panier
                } 
                else {

                    bufferLocalStorage.push(productToAdd);
                    window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));
                    alert('produit ' + productToAdd.name + 'ajouté au panier');
                }

                //Si le panier est vide
            } else {

                bufferLocalStorage = [];
                bufferLocalStorage.push(productToAdd);
                window.localStorage.setItem("produit", JSON.stringify(bufferLocalStorage));
                alert('nouveau produit ' + productToAdd.name + 'dans le panier');
            }
        }
    });
}