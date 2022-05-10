// le panier plein

else {
    localStorageArticle.forEach(article => {

       // inséré les éléments "article" 

       let productArticle = document.createElement("article");
       document.querySelector("#cart__item").appendChild(productArticle);
       productArticle.className = "cart__item";
       productArticle.setAttribute('article-id', article.articleID);

       // inséré l ' élément "div --> cart__item__img"

       let productDivImg = document.createElement("div");
       productArticle.appendChild(productDivImg);
       productDivImg.className = "cart__item__img";
       
       //insertion d' image

       let productImg = document.createElement("img");
       productDivImg.apprendchild(productImg);

    });
}