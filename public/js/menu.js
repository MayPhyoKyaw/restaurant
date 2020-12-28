var name = test;
// append new for main navs in menu html
$(".menu1 .nav").append(`
<li class='nav-item click-test' onclick='testNav()' id='menuTest'><a href='#' id='test'>Test</a></li>`);

// append new for second sub navs in menu html
$(".sub-nav").append(`
  <nav class='sec-nav' role='navigation' id='test-nav'>
    <ol>
        <li class='sec-nav-item sec-nav-active'>
            <a href='#'>Test1</a>
        </li>
        <li class='sec-nav-item'><a href='#'>Test2</a></li>
        <li class='sec-nav-item'><a href='#'>Test3</a></li>
        <li class='sec-nav-item'><a href='#'>Test4</a></li>
        <li class='sec-nav-item'><a href='#'>Test5</a></li>
    </ol>
  </nav>`);

var navLength = $(".menu1 .nav-item").length;
var calculatedByLength = 100 / navLength;
console.log("Nav length => " + calculatedByLength);
$(".top-nav li").css('width', `${calculatedByLength}%`);

const menu_type_url = new URL(location);
const menuType = menu_type_url.searchParams.get("menuType");
console.log(menuType);

var menuDish = document.getElementById("dish").innerHTML;
var menuSnack = document.getElementById("snack").innerHTML;
var menuDessert = document.getElementById("dessert").innerHTML;
var menuDrink = document.getElementById("drink").innerHTML;
var menuTest = document.getElementById("test").innerHTML;

var dish = document.getElementById("dish-nav");
var snack = document.getElementById("snack-nav");
var dessert = document.getElementById("dessert-nav");
var drink = document.getElementById("drink-nav");
var test = document.getElementById("test-nav");


if (menuType === menuDish) {
  document.getElementById("menuDish").classList.add("active");
  dish.style.display = "block";
  snack.style.display = "none";
  dessert.style.display = "none";
  drink.style.display = "none";
  test.style.display = "none";
}
if (menuType === menuSnack) {
  document.getElementById("menuSnack").classList.add("active");
  snack.style.display = "block";
  dish.style.display = "none";
  dessert.style.display = "none";
  drink.style.display = "none";
  test.style.display = "none";
}
if (menuType === menuDessert) {
  document.getElementById("menuDessert").classList.add("active");
  dessert.style.display = "block";
  snack.style.display = "none";
  dish.style.display = "none";
  drink.style.display = "none";
  test.style.display = "none";
}
if (menuType === menuDrink) {
  document.getElementById("menuDrink").classList.add("active");
  drink.style.display = "block";
  snack.style.display = "none";
  dessert.style.display = "none";
  dish.style.display = "none";
  test.style.display = "none";
}

if (menuType === menuTest) {
  document.getElementById("menuTest").classList.add("active");
  test.style.display = "block";
  dish.style.display = "none";
  snack.style.display = "none";
  dessert.style.display = "none";
  drink.style.display = "none";
}
