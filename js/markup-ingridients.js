const renderArray = [
    {
        title: "MILK CHOCOLATE",
        img: "../images/img-1.png",
        altText: "milk chocolate",
        textButt: "chocolate",
        text: "Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is the most consumed type of chocolate. Chocolate was originally sold and consumed as a beverage in pre-Columbian times. Although four-fifths of all milk chocolate is sold in the United States and Europe."
    },
    {
        title: "MILK",
        img: "../images/img-2.png",
        altText: "milk",
        text: "Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system."
    },
    {
        title: "NUTS",
        img: "../images/img-3.png",
        altText: "nuts",
        text: "Almonds, pistachios, and walnuts are some types of nuts that contain healthy nutrients. When eaten as part of a nutrient-dense diet, these 9 nuts may offer benefits such as reducing your risk of heart disease. They’re a good source of fiber, healthy fats, and plant protein. Plus, they’re great on their own."
    },
    {
        title: "SEMI - SWEET CHOCOLATE",
        img: "../images/img-4.png",
        altText: "SEMI - SWEET CHOCOLATE",
        text: "Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate. Semisweet is darker than milk chocolate. In a taste comparison, it has a slightly bitter taste whereas milk chocolate is sweeter." 
    },
    {
        title: "CACAO",
        img: "../images/img-5.png",
        altText: "cacao",
        text: "Cocoa is a natural product obtained from the fruits of the cocoa tree (Theobroma cacao). This tropical fruit contains beans, from which cocoa mass, cocoa powder and chocolate are made. The history of the use of cocoa goes back to ancient times. Already in ancient Mesoamerica, the Mayan and Aztec civilizations used cocoa in their culture and rituals"
    },
    {
        title: "RASPBERRY",
        img: "../images/img-6.png",
        altText: "raspberry",
        text: "Raspberry is a tasty and aromatic berry plant that is popular all over the world. It belongs to the pink family and grows in many regions, including North America, Europe and Asia. Raspberries have many varieties and color variations, from red to yellow and black."
    },
    {
        title: "COCONUT OIL",
        img: "../images/img-7.png",
        altText: "coconut oil",
        text: "Cocoa is a natural product obtained from the fruits of the cocoa tree (Theobroma cacao). This tropical fruit contains beans, from which cocoa mass, cocoa powder and chocolate are made. The history of the use of cocoa goes back to ancient times. Already in ancient Mesoamerica, the Mayan and Aztec civilizations used cocoa in their culture and rituals"
    },
];

const ulEl = document.querySelector(".ingridients-list");
const buttonMoreEl = document.querySelector(".ingridients-button-more");
const buttonLessEl = document.querySelector(".ingridients-button-less");
let markup = "";
let currentItem = 3;


for (let i = 0; i < currentItem; i++) {
    markup += `<li class="ingridients-item">
        <div class="ingridients-container-img"><img src="${renderArray[i].img}" alt="${renderArray[i].altText}">
            <h3 class="ingridients-item-title">${renderArray[i].title}</h3>
        </div>  
        <div class="ingridients-wrap-text">
            <h3 class="ingridients-wrap-text-title">${renderArray[i].title}</h3>
            <button class="ingridients-wrap-text-button" type="submit" >${renderArray[i].altText}</button>
            <button class="ingridients-wrap-text-button" type="submit" >the benefits</button>
            <p class="ingridients-wrap-text-text">${renderArray[i].text}</p>
        </div>              
    </li>`;
}
ulEl.insertAdjacentHTML('beforeend', markup);

buttonMoreEl.addEventListener("click", function() {
    let newMarkup = "";
    const nextItems = currentItem + 2;
    for (let i = currentItem; i < nextItems && i < renderArray.length; i++) {
        newMarkup += `<li class="ingridients-item">
        <div class="ingridients-container-img"><img src="${renderArray[i].img}" alt="${renderArray[i].altText}">
            <h3 class="ingridients-item-title">${renderArray[i].title}</h3>
        </div>  
        <div class="ingridients-wrap-text">
            <h3 class="ingridients-wrap-text-title">${renderArray[i].title}</h3>
            <button class="ingridients-wrap-text-button" type="submit" >${renderArray[i].altText}</button>
            <button class="ingridients-wrap-text-button" type="submit" >the benefits</button>
            <p class="ingridients-wrap-text-text">${renderArray[i].text}</p>
        </div>              
    </li>`;
    }
    ulEl.insertAdjacentHTML('beforeend', newMarkup);
    currentItem += 2;
    if (currentItem >= renderArray.length) {
        buttonMoreEl.style.display = 'none';
    }
    if (currentItem >= 3) {
        buttonLessEl.style.display = 'block';
    }
});

buttonLessEl.addEventListener("click", () => {
    if (currentItem <= 3) {
        buttonLessEl.style.display = 'none';
    } else {
        buttonLessEl.style.display = 'block';
    }
    const itemsToRemove = 2;
    for (let i = 0; i < itemsToRemove; i++) {
        ulEl.lastElementChild.remove();
    }
    currentItem -= itemsToRemove;
    if (currentItem < renderArray.length) {
        buttonMoreEl.style.display = 'block';
    }
});

ulEl.addEventListener('click', function(evn) {
    if (evn.target.closest('li')) {
        evn.target.closest('li').classList.toggle('flipped');
    }
})