// создание карточек

function CreateCards() {
    let pag = document.querySelector('.pagination');
    for (let i = 0; i < productList.length; i++) {
        pag.before(productList[i].Init(i));
    }
};

//Выбор сортировки
function SetSort(selectObject) {
    currentSort = +selectObject.value;
    Sort(currentSort);
}

// ПАГИНАЦИЯ 

//Выбор отображения
function SetQuantity(selectObject) {
    quantityPerPage = +selectObject.value;
    RecalcButtons();
    Recalculate();
}

//На первую страницу
function ToStart() {
    selectedPage = 0;
    Recalculate();
}

//На последнюю страницу
function ToEnd() {
    selectedPage = lastPage;
    Recalculate();
}

//Перети на страницу
function ToPage(page) {
    selectedPage = +page.textContent - 1;
    Recalculate();
}

//Пересоздание кнопок навигации
function RecalcButtons() {
    let items = document.querySelector(".content").children;
    let pags = document.querySelector(".content").children[document.querySelector(".content").children.length - 1];
    let sel;

    if (selectedTypes.length == 0) {
        sel = Math.floor((items.length - 1) / quantityPerPage);
    } else {
        let kol = 0;
        for (let i = 0; i < items.length - 1; i++) {
            if (selectedTypes.includes(productList[items[i].children[5].id].type)) {
                kol++
            }
        }
        sel = Math.floor(kol / quantityPerPage);
    }
    lastPage = sel;


    //Если количество страниц в пагинации неправильное, то пересоздаём пагинацию
    if (pags.children.length != sel + 3) {
        for (let i = 0; i < pags.children.length; i++) {
            if (pags.children[i].getAttribute("class") == "pagination-page") {
                pags.children[i].remove();
                i--;
            }
        }
        for (let i = 0; i <= sel; i++) {
            let newPage = document.createElement("a");
            newPage.href = "#";
            newPage.setAttribute("class", "pagination-page");
            newPage.textContent = i + 1;
            newPage.setAttribute("onclick", "ToPage(this)");
            pags.insertBefore(newPage, pags.lastElementChild);
        }
        selectedPage = 0;
    }

    
}


//Пересчитать видимость в зависимости от пагинации и группировки
function Recalculate() {
    let items = document.querySelector(".content").children;
    if (selectedTypes.length != 0) {
        let j = 0;
        for (let i = 0; i < items.length - 1; i++) {
            if (selectedTypes.includes(productList[items[i].children[5].id].type) && 
            productList[items[i].children[5].id].price <= HighPrice && productList[items[i].children[5].id].price >= LowPrice) {
                if (j >= quantityPerPage * selectedPage && j < quantityPerPage * (selectedPage + 1)) {
                    items[i].hidden = false;
                }
                else {
                    items[i].hidden = true;
                }
                j++;
            }
            else items[i].hidden = true;
        }
    }else {        
        let j=0;
        console.log("tut");
        for (let i = 0; i < items.length - 1; i++) {
            console.log(productList[items[i].children[5].id].price + "  " + LowPrice);
            if (productList[items[i].children[5].id].price <= HighPrice && productList[items[i].children[5].id].price >= LowPrice) {
                
                if (j >= quantityPerPage * selectedPage && j < quantityPerPage * (selectedPage + 1)) {
                    items[i].hidden = false;
                }
                else {
                    items[i].hidden = true;
                }
                j++;
            }
            else items[i].hidden = true;
        }
    }

}



//Группировка
 function Grouping() {
    selectedTypes = [];
    let group = document.querySelector(".grouping");
    for (let i = 0; i < group.children.length; i++) {
        if (group.children[i].firstElementChild.checked == true  ) {
            selectedTypes.push(group.children[i].firstElementChild.value);
        }
    }
    GroupingPrice();
    RecalcButtons();
    Recalculate();
}


//Сбросить фильтры
function ResetFilters() {
    let group = document.querySelector(".grouping");
    for(let i = 0; i < group.children.length; i++) {
       group.children[i].firstElementChild.checked = false;
    }
    setValueInput();
    Grouping();
 }
 

 //Инициализировать документ
function InitDocument() {
    CreateCards();
    

    // создание чекбокс фильтров по типу обьекта
    let types = new Set();
    for(let i = 0; i < productList.length; i++) {
       types.add(productList[i].type);
    }
    
    let group = document.querySelector(".grouping");
    for (let t of types) {
       let newCheckbox = document.createElement("input");
       newCheckbox.type = "checkbox";
       newCheckbox.id = t;
       newCheckbox.value = t;
       newCheckbox.setAttribute("onclick", "Grouping()");
       
       let newLabel = document.createElement("label");
       newLabel.setAttribute("for", t);
       newLabel.textContent = " " + t;
       
       let newP = document.createElement("p");
       newP.setAttribute("class", "groupingCheckbox");
       newP.appendChild(newCheckbox);
       newP.appendChild(newLabel);

       group.appendChild(newP);
    }
    setValueInput();
    Sort();
        
    RecalcButtons();
    Recalculate();
    


    //Навесить обработчики событий на ссылки
let ul = document.querySelector("ul");
ul.children[0].firstElementChild.addEventListener("click", ShowMain);
ul.children[1].firstElementChild.addEventListener("click", ShowBasket);

 }

  


 //Перейти на Main
function ShowMain() {
    document.getElementById("mainD").style.display = 'flex';
    document.getElementById("basketD").style.display = 'none';
 }
 
 //Перейти на Basket
 function ShowBasket() {
    document.getElementById("mainD").style.display = 'none';
    document.getElementById("basketD").style.display = 'flex';
 }
 

 document.addEventListener("keydown", function(event) {
    switch (event.code) {
       case "KeyQ":
          ShowMain();
          
console.log(productList[1].price);
          break;
       case "KeyW":
          ShowBasket();
          break;
       case "Digit1":
          ToStart();
          break;
       case "Digit2":
          if (--selectedPage < 0) selectedPage = 0;
          Recalculate();
          break;
       case "Digit3":
          if (++selectedPage > lastPage) selectedPage = lastPage;
          Recalculate();
          break;
       case "Digit4":
          ToEnd();
          break;
    }
 });
 