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
// console.log("Nav length => " + calculatedByLength);
$(".top-nav li").css('width', `${calculatedByLength}%`);

const menu_type_url = new URL(location);
const menuType = menu_type_url.searchParams.get("menuType");
// console.log(menuType);

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
$(document).ready(function () {
  fetch('/menu.html/selectDish', { method: 'GET' })
    .then(function (response) {
      if (response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function (data) {
      console.log(data)
      // document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`;
      data.forEach(dish => {
        var appetizer = document.getElementById("appetizer").innerHTML;
        if (dish.dishMenu === appetizer) {
          console.log(dish);
          $('.menu ul').append(`
              <li class="blo3 flex-w flex-col-l-sm m-b-30 menu-item">
                <div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
                    <a href="#"><img src="images/lunch-03.jpg" alt="IMG-MENU" /></a>
                </div>

                <div class="text-blo3 size21 flex-col-l-m">
                  <span class="txt19 m-b-3">
                      ${dish.dishName}
                  </span>
                  <div class="row" style="width: 100%;">
                      <div class="column left item-title">
                          <span class="txt19 m-b-3 lang-name">
                              ${dish.langName}
                          </span>
                      </div>
                      <div class="badge-right column">
                          <span class="badge-pork">
                              Pork
                          </span>
                          <span class="badge-chicken">
                              Chicken
                          </span>
                          <span class="badge-seafood">
                              Seafood
                          </span>
                      </div>
                  </div>
                  <div class="row" style="width: 100%;">
                      <div class="column left item-quantity">
                          <div id="small_item" ><input type="radio" name="size" value="Small">
                          <label for="small">Small</label> -------<span class="txt19 m-t-10 item-price"> ${dish.smallDishPrice} MMK </span>
                          </div>
                          <div id="large_item" ><input type="radio" name="size" value="Large">
                          <label for="large">Large</label> -------<span class="txt19 m-t-10 item-price"> ${dish.largeDishPrice} MMK </span>
                          </div>
                          <span class="stepper">
                              <button>–</button>
                              <input
                                  type="number"
                                  id="stepper2"
                                  value="1"
                                  min="1"
                                  max="100"
                                  step="1"
                                  readonly
                                  />
                              <button>+</button>
                          </span>
                      </div>

                      <div class="btn-blo3 btn-right column">
                          <button class="btn1 btn-8 btn-8a add-to-order">Add to order</button>
                      </div>
                  </div>
                </div>
              </li>
            `)
        }
        // click items into order list
        $(".menu ul li .row .btn-right .add-to-order").click(function () {
          // var itemTitle = $(this).parent().parent().parent().parent().find('.menu ul li .text-blo3 .row .item-title span').text();
          var itemTitle = $(this).parent().parent().parent().find(".row .item-title .lang-name").text();
          var itemQuantity = $(this).parent().parent().parent().find('.row .item-quantity .stepper input').val();
          var checkedValue = $('input[name="size"]:checked').val();
          var changeInt = "";
          if (checkedValue === "Large") {
            var largePrice = $(this).parent().parent().find('.column #large_item span').text();
            var changeInt = largePrice.slice(0, -5);
          }else {
            var smallPrice = $(this).parent().parent().find('.column #small_item span').text();
            var changeInt = smallPrice.slice(0, -5);
          }
          $(".order-list ul").append(`
            <li class="list-group-item order-item">
              <span class="left ordered-item">${itemTitle}</span>
              <i class="fa fa-close close right"></i>
              <span class="right m-g-r ordered-item ordered-price">${changeInt * itemQuantity} &nbsp;</span>
              <span class="right m-g-r ordered-item  ordered-qty">${itemQuantity} &nbsp;x</span>
            </li>`);
          console.log(changeInt)
        })
        // click on nav bar
        $("#dishes").on('click', 'li', function () {
          $(this).addClass("sec-nav-active").siblings().removeClass("sec-nav-active");
          var dishMenu = $(this).find("a").html();
          // console.log(dishMenu);
          if (dish.dishMenu === dishMenu) {
            console.log(dish.dishMenu, dish)
            $('.menu ul').empty();
            $('.menu ul').append(`
                <li class="blo3 flex-w flex-col-l-sm m-b-30 menu-item">
                  <div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
                      <a href="#"><img src="images/lunch-03.jpg" alt="IMG-MENU" /></a>
                  </div>

                  <div class="text-blo3 size21 flex-col-l-m">
                    <span class="txt19 m-b-3">
                        ${dish.dishName}
                    </span>
                    <div class="row" style="width: 100%;">
                        <div class="column left item-title">
                            <span class="txt19 m-b-3 lang-name">
                                ${dish.langName}
                            </span>
                        </div>
                        <div class="badge-right column">
                            <span class="badge-pork">
                                Pork
                            </span>
                            <span class="badge-chicken">
                                Chicken
                            </span>
                            <span class="badge-seafood">
                                Seafood
                            </span>
                        </div>
                    </div>
                    <div class="row" style="width: 100%;">
                      <div class="column left item-quantity">
                          <div id="small_item" ><input type="radio" name="size" value="Small">
                          <label for="small">Small</label> -------<span class="txt19 m-t-10 item-price"> ${dish.smallDishPrice} MMK </span>
                          </div>
                          <div id="large_item" ><input type="radio" name="size" value="Large">
                          <label for="large">Large</label> -------<span class="txt19 m-t-10 item-price"> ${dish.largeDishPrice} MMK </span>
                          </div>
                          <span class="stepper">
                              <button>–</button>
                              <input
                                  type="number"
                                  id="stepper2"
                                  value="1"
                                  min="1"
                                  max="100"
                                  step="1"
                                  readonly
                                  />
                              <button>+</button>
                          </span>
                      </div>

                      <div class="btn-blo3 btn-right column">
                          <button class="btn1 btn-8 btn-8a add-to-order">Add to order</button>
                      </div>
                  </div>
                  </div>
                </li>
              `)
          }
          // click items into order list
        $(".menu ul li .row .btn-right .add-to-order").click(function () {
          // var itemTitle = $(this).parent().parent().parent().parent().find('.menu ul li .text-blo3 .row .item-title span').text();
          var itemTitle = $(this).parent().parent().parent().find(".row .item-title .lang-name").text();
          var itemQuantity = $(this).parent().parent().parent().find('.row .item-quantity .stepper input').val();
          var checkedValue = $('input[name="size"]:checked').val();
          var changeInt = "";
          if (checkedValue === "Large") {
            var largePrice = $(this).parent().parent().find('.column #large_item span').text();
            var changeInt = largePrice.slice(0, -5);
          }else {
            var smallPrice = $(this).parent().parent().find('.column #small_item span').text();
            var changeInt = smallPrice.slice(0, -5);
          }
          $(".order-list ul").append(`
            <li class="list-group-item order-item">
              <span class="left ordered-item">${itemTitle}</span>
              <i class="fa fa-close close right"></i>
              <span class="right m-g-r ordered-item ordered-price">${changeInt * itemQuantity} &nbsp;</span>
              <span class="right m-g-r ordered-item  ordered-qty">${itemQuantity} &nbsp;x</span>
            </li>`);
          console.log(changeInt)
        })
        });
        // console.log(dish);
      });

      // Show Total Dish Menu Info
      // console.log(data.length)
      document.getElementById("pagination-info").innerHTML = `Total ${data.length} ${menuType} Menu`;
    })
    .catch(function (error) {
      console.log(error);
    });
})

