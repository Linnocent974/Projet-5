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
       productImg.src = article.articleImg;
       productImg.alt = article.articleImgAlt;

       // Insertion de l'élément "div --> cart__item__content"

       let productItemContent = document.createElement("div");
       productArticle.appendChild(productItemContent);
       productItemContent.classeName = "cart__item__content";

       // Insertion de l'élément "div --> cart__item__content"

       let productItemContentTitlePrice = document.createElement("div");
        productItemContentTitlePrice.appendChild(productItemContentTitlePrice);
        productItemContentTitlePrice.className = "cart__item__content";


       // insertion du titre h2
       
       let producTitle = document.createElement("h2");
       productItemContentTitlePrice.appendChild(productTitle);
       producTitle.innerHTML = article.articleName;

       // Insertion du prix
    });
}