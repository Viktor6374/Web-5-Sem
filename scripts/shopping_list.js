function write_item(item){
    let timetable = document.getElementsByClassName("shopping-list__timetable")[0]

    let itemHTML = `<div class="shopping-list__item">${item["product"]}</div>` +
        `<div class="shopping-list__item">${item["quantity"]}</div>` +
        `<div class="shopping-list__item">${item["store_department"]}</div>`;
    timetable.innerHTML += itemHTML;
}

function add_item_in_storage(item){
    let items = JSON.parse(localStorage.getItem('items')) || []
    items.push(item)
    localStorage.setItem("items", JSON.stringify(items))
}

function add_shopping_list_item(event){
    event.preventDefault();

    let product = document.getElementById("product")
    let quantity = document.getElementById("quantity")
    let store_department = document.getElementById("store_department")

    let item = {
        product: product.value,
        quantity: quantity.value,
        store_department: store_department.value
    };

    write_item(item)

    add_item_in_storage(item)

    product.value = "";
    quantity.value = "";
    store_department.value = "";
}

function clear_list(){
    localStorage.setItem("items", JSON.stringify([]))
    let timetable = document.getElementsByClassName("shopping-list__timetable")[0];

    timetable.innerHTML =`<div class="shopping-list__title">Название</div>` +
        `<div class="shopping-list__title">Количество</div>` +
        `<div class="shopping-list__title">Отдел магазина</div>`;
}

window.addEventListener('load', () => {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach((item) => write_item(item));
});