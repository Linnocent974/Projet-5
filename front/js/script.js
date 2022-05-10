main();                                                                             

function main() {                                                                  
  getArticles();
}

// Récupération des fiches-article depuis l'API --> http://localhost:3000/api/products

function getArticles() {                                                            // une requête HTTP
    fetch("http://localhost:3000/api/products")
    .then(function (res) {                                                          // le résultat de la requête
        return res.json();
    })
    .catch((error) => {
        let items = document.querySelector("#items");
        items.innerHTML = `Erreur d'accès à l'API`;
    })

// Récupération des données de l'API dans le DOM --> 

    .then(articlesResult => {                                                       
        articlesResult.forEach(article => {                                 
            addArticleBox(document.querySelector(".items"), article)   
        })
        console.table(articlesResult);
      });
}

function addArticleBox (querySelector, article) {

    // Création de "a" (lien)
    let productLink = document.createElement("a");                                  
    querySelector.appendChild(productLink);              
    productLink.href = `product.html?id=${article._id}`;                            // Redirect (./product.html?id=...) 

    // Création de "article" (section)
    let productArticle = document.createElement("article");                         // création de "article" 
    productLink.appendChild(productArticle);                                

    // Création de "img" (image)
    let productImg = document.createElement("img");                                 // création "img" (image)  
    productArticle.appendChild(productImg);                                        
    productImg.src = article.imageUrl;                                              // affichage de l'image de l'article
    productImg.alt = article.altTxt;                                                // mise en place du texte alt d'image
    // Création de "h3" (titre)
    let productName = document.createElement("h3");                                 // "h3" (titre)
    productArticle.appendChild(productName);                                
    productName.innerHTML = article.name;                                           // affichage du nom de l'article

    // Création de "p" (description)
    let productDescription = document.createElement("p");                           //"p" (description)
    productArticle.appendChild(productDescription);                         
    productDescription.innerHTML = article.description;                             // la description de l'article
}

