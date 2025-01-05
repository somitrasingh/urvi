const mainD = document.getElementById("main-dashboard");
const productsD = document.getElementById("product-dash");
const operationsD = document.getElementById("operations-dash");
const marketingD = document.getElementById("marketing-dash");
const financeD = document.getElementById("finance-dash");
const techD = document.getElementById("tech-dash");


function hideMainDashboard(){
    console.log(mainD);
    mainD.style.display = 'none';
}

function product(){
    hideMainDashboard();
    productsD.style.display = 'block';
}

function operations(){
    hideMainDashboard();
    operationsD.style.display = 'block';
}

function marketing(){
    hideMainDashboard();
    marketingD.style.display = 'block';
}

function finance(){
    hideMainDashboard();
    financeD.style.display = 'block';
}

function tech(){
    hideMainDashboard();
    techD.style.display = 'block';
}

function inventoryPurchaseLog(){
    document.getElementById("inventory-purchase-log").style.display = 'block';
}

function receipeDesigning(){
    document.getElementById("recipe-designing").style.display = 'block';
}

function blogwriting(){
    document.getElementById("blog-writing").style.display = 'block';
}
