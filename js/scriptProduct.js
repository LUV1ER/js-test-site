//Класс товары
class Product {
    constructor(head, image, price, presence, text, type) {
        this.head = head;
        this.image = image;
        this.price = price;
        this.presence = presence;
        this.text = text;
        this.type = type;
    }

    Init(i) {
        let newImage = document.createElement("img");
        newImage.setAttribute("class", "image");
        newImage.src = this.image;
        newImage.alt = this.head;

        let newCardImage = document.createElement("div");
        newCardImage.setAttribute("class", "card-image");
        newCardImage.appendChild(newImage);

        let newCardHead = document.createElement("h2");
        newCardHead.setAttribute("class", "card-head");
        newCardHead.textContent = this.head;

        let newCardPrice = document.createElement("p");
        newCardPrice.setAttribute("class", "card-price");
        newCardPrice.textContent = this.price + " грн.";

        let newCardPresence = document.createElement("p");
        if (this.presence > 0) {
            newCardPresence.setAttribute("class", "card-presence well");
            newCardPresence.textContent = "В наличии";
        }
        else {
            newCardPresence.setAttribute("class", "card-presence badly");
            newCardPresence.textContent = "Нет в наличии";
        }

        let newCardText = document.createElement("p");
        newCardText.setAttribute("class", "card-text");
        newCardText.textContent = this.text;

        let newCardButton = document.createElement("button");
        newCardButton.setAttribute("class", "mybtn1");
        newCardButton.setAttribute("onclick", "basket.AddProduct(this.id)");
        newCardButton.textContent = "Добавить в корзину";
        newCardButton.id = i;

        let newCard = document.createElement("div");
        newCard.setAttribute("class", "card");

        newCard.appendChild(newCardImage);
        newCard.appendChild(newCardHead);
        newCard.appendChild(newCardPrice);
        newCard.appendChild(newCardPresence);
        newCard.appendChild(newCardText);
        newCard.appendChild(newCardButton);

        return newCard;
    }

    toString() {
        return this.head + " " + this.image + " " + this.price + " " + this.presence + " " + this.text + " " + this.type;
    }
}

let productList = [
    new Product("Дриль Bosch GBM 1600 RE", "image/1.png", 5469, 0, "Дрель BOSCH GBM 1600 RE Professional - высокопроизводительный и эргономичный сетевой инструмент для смешивания строительных растворов и сверления в бетоне, древесине, металлах и других материалах. Модель электродрели BOSCH GBM 1600 RE Professional оснащена мощным электромотором 0,85 кВт, создающим высокий крутящий момент для решения сложных задач.", "BOSCH"),
    new Product("Кутова шліфмашина Makita GA5030", "image/2.png", 1590, 10, "Кутошліфувальна машина Makita GA5030 — це високоефективний інструмент для виконання різних будівельних і ремонтних робіт із різання, зачищення і шліфування різних поверхонь.", "Makita"),
    new Product("Ударний дриль BOSCH GSB 13 RE Professional ЗВП", "image/3.png", 2205, 12, "Bosch GSB 13 RE – ударний електродриль для свердління отворів в бетоні, металі, сталі і цегляній кладці.", "BOSCH"),
    new Product("Кутова шліфмашина Bosch Professional GWS 750-125", "image/4.png", 1499, 3, "Чудова продуктивність шліфування/різання завдяки високій потужності та крутному моменту кутової шліфувальної машини Bosch Professional.", "BOSCH"),
    new Product("Дриль ударний Milwaukee HD28 PDM28", "image/5.png", 27551, 2, "Дриль ударний Milwaukee HD28 PDM28", "Milwaukee"),
    new Product("Кутова шліфмашина Makita GA9050", "image/6.png", 2957, 23, "GA9050 є найлегшою професійною болгаркою на Ø 230. Вирізняється високою міцністю й надійністю механізму", "Makita"),
    new Product("Дриль ударна Intertool DT-0107", "image/7.png", 549, 0, "Невеликий компактний ударний дриль Intertool DT-0107 — незамінний інструмент для хатнього майстра та аматора-професіонала.", "Intertool"),
    new Product("Кутова шліфмашина Metabo WQ 1100-125", "image/8.png", 3368, 5, "Кутова шліфмашина Metabo WQ 1100-125 призначена для роботи з дисками діаметром до 125 мм.", "Metabo"),
    new Product("Дриль ударний Makita HP1640", "image/9.png", 2018, 2, "Ударний дриль Makita HP1640 за невеликої ваги (1.8 кг) оснащений потужним двигуном 6.0 A. Дриль має великий діаметр свердління: до 16 мм. в бетоні — 13 мм. в сталі — 30 мм. в дереві, а також може працювати у двох режимах — свердління та свердління з ударом.", "Makita"),
    new Product("Кутова шліфмашина DWT WS10-125T", "image/10.png", 1243, 6, "Кутова шліфмашина DWT WS10-125T — це сучасний, легкий у використанні та безпечний електроінструмент, що дає змогу виконувати різні види робіт (різання, шліфування, полірування, обробку щітками, використання в стаціонарному режимі тощо).", "DWT")];
