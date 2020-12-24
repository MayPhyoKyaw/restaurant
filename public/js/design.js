//Get the button
var mybutton = document.getElementById("myBtn");

var originNav = document.getElementById("buffet-nav");
var planNav = document.getElementById("buffet-plan-nav");
var dish = document.getElementById("dish-nav");
var snack = document.getElementById("snack-nav");
var dessert = document.getElementById("dessert-nav");
var drink = document.getElementById("drink-nav");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var inc = document.getElementsByClassName("stepper");
for (i = 0; i < inc.length; i++) {
  var incI = inc[i].querySelector("input"),
    id = incI.getAttribute("id"),
    min = incI.getAttribute("min"),
    max = incI.getAttribute("max"),
    step = incI.getAttribute("step");
  document
    .getElementById(id)
    .previousElementSibling.setAttribute(
      "onclick",
      "stepperInput('" + id + "', -" + step + ", " + min + ")"
    );
  document
    .getElementById(id)
    .nextElementSibling.setAttribute(
      "onclick",
      "stepperInput('" + id + "', " + step + ", " + max + ")"
    );
}

function stepperInput(id, s, m) {
  var el = document.getElementById(id);
  if (s > 0) {
    if (parseInt(el.value) < m) {
      el.value = parseInt(el.value) + s;
    }
  } else {
    if (parseInt(el.value) > m) {
      el.value = parseInt(el.value) + s;
    }
  }
}

//toggle menu
// var theToggle = document.getElementById("toggle");

// // based on Todd Motto functions
// // https://toddmotto.com/labs/reusable-js/

// // hasClass
// function hasClass(elem, className) {
//   return new RegExp(" " + className + " ").test(" " + elem.className + " ");
// }
// // addClass
// function addClass(elem, className) {
//   if (!hasClass(elem, className)) {
//     elem.className += " " + className;
//   }
// }
// // removeClass
// function removeClass(elem, className) {
//   var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
//   if (hasClass(elem, className)) {
//     while (newClass.indexOf(" " + className + " ") >= 0) {
//       newClass = newClass.replace(" " + className + " ", " ");
//     }
//     elem.className = newClass.replace(/^\s+|\s+$/g, "");
//   }
// }
// // toggleClass
// function toggleClass(elem, className) {
//   var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
//   if (hasClass(elem, className)) {
//     while (newClass.indexOf(" " + className + " ") >= 0) {
//       newClass = newClass.replace(" " + className + " ", " ");
//     }
//     elem.className = newClass.replace(/^\s+|\s+$/g, "");
//   } else {
//     elem.className += " " + className;
//   }
// }

// theToggle.onclick = function () {
//   toggleClass(this, "on");
//   return false;
// };

// buffet menu
function buffetMenuChange1() {
  planNav.style.display = "block";
  originNav.style.display = "none";
}

function buffetMenuChange2() {
  planNav.style.display = "none";
  originNav.style.display = "block";
}

// Second Nav
function dishNav() {
  dish.style.display = "block";
  snack.style.display = "none";
  dessert.style.display = "none";
  drink.style.display = "none";
}

function snackNav() {
  snack.style.display = "block";
  dish.style.display = "none";
  dessert.style.display = "none";
  drink.style.display = "none";
}

function dessertNav() {
  dessert.style.display = "block";
  snack.style.display = "none";
  dish.style.display = "none";
  drink.style.display = "none";
}

function drinkNav() {
  drink.style.display = "block";
  snack.style.display = "none";
  dessert.style.display = "none";
  dish.style.display = "none";
}
