// СОРТИРОВКА

//Выбор метода сортировки
function Sort () {
    switch (currentSort) {
        case 0:
            SortNameAZ();
            break;
        case 1:
            SortNameZA();
            break;
        case 2:
            SortIncrease();
            break;
        case 3:
            SortDecrease();
            break;
    }
}

//Функция сортировки
function MySort(func) {
    let items = document.querySelector(".content").children;
    let itemsArr = [];
    for (let elem in items) {
        if (items[elem].nodeType == 1) {
            itemsArr.push(items[elem]);
        }
    }
    itemsArr.sort(func);

    for (let i = 0; i < itemsArr.length; ++i) {
        document.querySelector(".content").appendChild(itemsArr[i]);
    }
}


//Отсортировать по имени А-Я
function SortNameAZ() {
    MySort(function (a, b) {
        if (a.getAttribute("class") == "pagination" || b.getAttribute("class") == "pagination") return 0;
        if (a.children[1].textContent > b.children[1].textContent) {
            return 1;
        }
        if (a.children[1].textContent < b.children[1].textContent) {
            return -1;
        }
        return 0;
    });
}

//Отсортировать по имени Я-А
function SortNameZA() {
    MySort(function (a, b) {
        if (a.getAttribute("class") == "pagination" || b.getAttribute("class") == "pagination") return 0;
        if (a.children[1].textContent > b.children[1].textContent) {
            return -1;
        }
        if (a.children[1].textContent < b.children[1].textContent) {
            return 1;
        }
        return 0;
    });
}

//Отсортировать в порядке убывания
function SortDecrease() {
    MySort(function (a, b) {
        
        if (a.getAttribute("class") == "pagination" || b.getAttribute("class") == "pagination") return 0;
        if ( parseInt(a.children[2].textContent.match(/\d+/))  > parseInt(b.children[2].textContent.match(/\d+/))) {
            return -1;
        }
        if (parseInt(a.children[2].textContent.match(/\d+/)) < parseInt(b.children[2].textContent.match(/\d+/))) {
            return 1;
        }
        return 0;
    });
}

//Отсортировать в порядке возрастания 
function SortIncrease() {
    MySort(function (a, b) {
        
        if (a.getAttribute("class") == "pagination" || b.getAttribute("class") == "pagination") return 0;
        if ( parseInt(a.children[2].textContent.match(/\d+/))  > parseInt(b.children[2].textContent.match(/\d+/))) {
            return 1;
        }
        if (parseInt(a.children[2].textContent.match(/\d+/)) < parseInt(b.children[2].textContent.match(/\d+/))) {
            return -1;
        }
        return 0;
    });
}

// Сортировка в границах установленной цены

// Нахождение максимума цены из продуктлист
function MaxPrice(price) {
    let ar = [];
    price.forEach(u => {
        ar.push(u.price);
    });
    return Math.max.apply(null, ar);
}

// Нахождение минимума цены из продуктлист
function MinPrice(price) {
    let ar = [];
    price.forEach(u => {
        ar.push(u.price);
    });
    return Math.min.apply(null, ar);
}


function setValueInput() {
    document.getElementById('high').value = MaxPrice(productList);
    document.getElementById('low').value = MinPrice(productList);
    HighPrice = +document.getElementById('high').value;
    LowPrice = +document.getElementById('low').value;
    if(HighPrice < LowPrice){
        document.getElementById('low').value = +document.getElementById('high').value;
        LowPrice = +document.getElementById('low').value ; 
    }
}


// Сортировка в установленных границах 
function GroupingPrice() {
    HighPrice = +document.getElementById('high').value;
    LowPrice = +document.getElementById('low').value;
    if(HighPrice < LowPrice){
        document.getElementById('low').value = +document.getElementById('high').value;
        LowPrice = +document.getElementById('low').value ; 
    }
    
}

function RecalculatePrice() {
    let items = document.querySelector(".content").children;
    if (HighPrice != MaxPrice(productList) || LowPrice != MinPrice(productList)) {
        for (let i = 0; i < items.length; i++) {
            if ((parseInt(items[i].children[2].textContent.match(/\d+/)) >= HighPrice) || (parseInt(items[i].children[2].textContent.match(/\d+/)) <= LowPrice)) {
                items[i].hidden = true;
            } else {
                items[i].hidden = false;
            }
        }

    }

}
