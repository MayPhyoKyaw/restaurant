const menu_type_url = new URL(location);
const menuType = menu_type_url.searchParams.get("menuType");
console.log(menuType);

var menu1 = document.getElementById("dish").innerHTML;
var menu2 = document.getElementById("snack").innerHTML;
var menu3 = document.getElementById("dessert").innerHTML;
var menu4 = document.getElementById("drink").innerHTML; 

var dish = document.getElementById("dish-nav");
var snack = document.getElementById("snack-nav");
var dessert = document.getElementById("dessert-nav");
var drink = document.getElementById("drink-nav");

if (menuType === menu1) {
  document.getElementById("menu1").classList.add("active");
  dish.style.display = "block";
  snack.style.display = "none";
  dessert.style.display = "none";
  drink.style.display = "none";
}
if (menuType === menu2) {
  document.getElementById("menu2").classList.add("active");
  snack.style.display = "block";
  dish.style.display = "none";
  dessert.style.display = "none";
  drink.style.display = "none";
}
if (menuType === menu3) {
  document.getElementById("menu3").classList.add("active");
  dessert.style.display = "block";
  snack.style.display = "none";
  dish.style.display = "none";
  drink.style.display = "none";
}
if (menuType === menu4) {
  document.getElementById("menu4").classList.add("active");
  drink.style.display = "block";
  snack.style.display = "none";
  dessert.style.display = "none";
  dish.style.display = "none";
}
