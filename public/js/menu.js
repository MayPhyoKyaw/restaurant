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

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm, '');
}

var value = [];
var timeLeft;
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  timeLeft = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 00;
      console.log("stop");
      $('#order-btn').attr("disabled", true);
      $('#edit-verification-btn').attr("disabled", true);
      showTimeoutModal();
    }
  }, 1000);
}

const { to, set, timeline, registerPlugin } = gsap

registerPlugin(MorphSVGPlugin)

document.querySelectorAll('.password-field').forEach(field => {
  let input = field.querySelectorAll('input'),
    button = field.querySelector('button'),
    time = timeline({
      paused: true
    }).to(field.querySelector('svg .top'), {
      morphSVG: 'M2 10.5C2 10.5 6.43686 15.5 10.5 15.5C14.5631 15.5 19 10.5 19 10.5',
      duration: .2
    }).to(field, {
      keyframes: [{
        '--eye-s': 0,
        '--eye-background': 1,
        duration: .2
      }, {
        '--eye-offset': '0px',
        duration: .15
      }]
    }, 0)
  button.addEventListener('click', e => {
    if (field.classList.contains('show')) {
      field.classList.remove('show')
      time.reverse(0)
      return
    }
    field.classList.add('show')
    time.play(0)
  })
  field.addEventListener('pointermove', e => {
    const rect = button.getBoundingClientRect()
    const fullWidth = rect.width
    const halfWidth = fullWidth / 2
    const fullHeight = rect.height
    const halfHeight = fullHeight / 2
    let x = e.clientX - rect.left - halfWidth,
      y = e.clientY - rect.top - halfHeight

    field.style.setProperty('--eye-x', (x < -halfWidth ? -halfWidth : x > fullWidth ? fullWidth : x) / 15 + 'px')
    field.style.setProperty('--eye-y', (y < -halfHeight ? -halfHeight : y > fullHeight ? fullHeight : y) / 25 + 'px')
  })
  field.addEventListener('pointerleave', e => {
    field.style.setProperty('--eye-x', '0px')
    field.style.setProperty('--eye-y', '0px')
  })
  input.forEach(single =>
    single.addEventListener('input',
      e => input.forEach(
        i =>
          // {
          i.value = e.target.value,
        //   console.log(i.value)
        // }
      )
    )
  )
  // console.log(input);
})

var msgForReset = document.getElementById('Rmsg');
var warningForReset = document.getElementById('Rpwd-warning');
var focusInputForReset = document.getElementById('focusR');

var msgForEdit = document.getElementById('Emsg');
var warningForEdit = document.getElementById('Epwd-warning');
var focusInputForEdit = document.getElementById('focusE');

var noOfCustomers = document.getElementById("input-number-mod");
var tableNo = document.getElementById("option");
var transID = document.getElementById("order-id");

var numItems, items;
$(document).ready(function () {

  var serveTime = 60 * 30 + 3600;
  var totalCost;
  var choose = document.getElementById("choose");
  var start = document.getElementById("before-countdown");
  var display = document.getElementById("countdown");

  $('#order-btn').attr("disabled", true);
  $('#edit-verification-btn').attr("disabled", true);

  // click start timer btn to calculate bill and start timer
  $('#before-countdown').on('click', function () {
    startTimer(serveTime, display);
    start.style.display = "none";
    display.style.display = "block";
    document.getElementById("order-list").style.display = "block";
    // document.getElementById("choose-tb").style.display = "none";
    var inputNumberPeople = $("#input-number-mod").val()
    $(".no-of-customers").html(`x  ${inputNumberPeople}  People`);
    var stringCost = $(".cost").html();
    stringCost.slice(0, -4)
    var cost = parseInt(stringCost);
    var noOfPeople = parseInt(inputNumberPeople);
    var calculation = cost * noOfPeople;
    var toPlus = (calculation / 100) * 10;
    totalCost = calculation + toPlus
    $(".total-cost").html(`${totalCost} MMK`);
    $('#order-btn').attr("disabled", false);
    $('#edit-verification-btn').attr("disabled", false);
  })

  $('#choose').on('click', function () {
    choose.style.display = "none";
    start.style.display = "block";
    transID.style.display = "none";
    noOfCustomers.disabled = true;
    tableNo.disabled = true;
    // console.log("hello")
  })

  $('#reset-verification-btn').click(function (event) {
    showResetModal();
    focusInputForReset.focus();
    event.stopPropagation();
    // console.log("hello")
  });
  $('#edit-verification-btn').click(function (event) {
    showEditModal();
    focusInputForEdit.focus();
    event.stopPropagation();
    // console.log("hello")
  });
  $('#resetModalClose').click(function () {
    hideResetModal();
  });
  $('#editModalClose').click(function () {
    hideEditModal();
  });
  $('#resetTimeoutModalClose').click(function (event) {
    // console.log("click");
    hideTimeoutModal();
    event.stopPropagation();
    clearInterval(timeLeft);
  });
  $('#timeout').click(function (event) {
    // console.log("click");
    hideTimeoutModal();
    event.stopPropagation();
    clearInterval(timeLeft);
  });

  // Do nothing when clicking on the modal content
  $('.modal-content').click(function (event) {
    event.stopPropagation();
  });

  fetch('/menu.html/selectDish', { method: 'GET' })
    .then(function (response) {
      if (response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function (data) {
      // console.log(data)
      var result = [];
      var menuItems = [];
      var firstMenuLists = [];
      data.forEach(dish => {
        var appetizer = document.getElementById("appetizer").innerHTML;
        var dishmeat = [];
        // var type = dish.meat.type;
        // console.log(dish["meat"], typeof(dish.meat), dish)
        var meats;
        if (typeof (dish.meat) === 'string') {
          meats = dish["meat"].split(",");
          // console.log(meats)
        } else {
          meats = dish.meat;
          // console.log(meats)
        }
        // console.log(meats)
        meats.map(dm => {
          // console.log(dm)
          var Meats = `
            <span class="badge-${dm}">
              ${dm}
            </span>
          `
          dishmeat.push(Meats);
        })
        var dishMeat = dishmeat.join(' ');
        // console.log(dishMeat)

        var menuItem = `
          <li class="blo3 flex-w flex-col-l-sm  menu-item">
            <div class="row menu-row">
              <div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28 column left">
                  <a href="#"><img src="images/lunch-03.jpg" alt="IMG-MENU" height=150 /></a>
              </div>
              <div class="text-blo3 size21 flex-col-l-m column right">
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
                      ${dishMeat}
                    </div>
                </div>
                <div class="row" style="width: 100%;">
                    <div class="column left item-quantity">
                      <span class="stepper">
                          <button class="minus">–</button>
                          <input
                              type="number"
                              class="input-count"
                              id=${dish._id}
                              value="1"
                              min="1"
                              max="100"
                              step="1"
                              readonly
                          />
                          <button class="plus">+</button>
                      </span>
                    </div>

                    <div class="btn-blo3 btn-right column">
                      <button class="btn1 btn-8 btn-8a add-to-order">Add to order</button>
                    </div>
                </div>
              </div>
            </div>
            <hr>
          </li>
        `

        if (dish.dishMenu === appetizer) {
          result.push(menuItem);
          // $('.menu ul').append(result)
        }

        // click on nav bar
        $("#dishes").on('click', 'li', function () {
          $(this).addClass("sec-nav-active").siblings().removeClass("sec-nav-active");
          var dishMenu = $(this).find("a").html();
          console.log(dishMenu);
          if (dish.dishMenu === dishMenu) {
            menuItems.push(menuItem);
          }
        });

        $('#verify-reset').click(function () {
          if (dish.dishMenu === appetizer) {
            firstMenuLists.push(menuItem);
          }
        })
      });

      fetch('/menu.html/identification', { method: 'GET' })
        .then(function (response) {
          // console.log(response)
          if (response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(function (data) {
          // console.log(serveTime);
          // console.log(data)
          // console.log(data[0].password)
          data.forEach(id => {
            $('#verify-reset').click(function () {
              console.log($('.reset-pwd').val(), id.password)
              var pwdForReset = $('.reset-pwd').val();
              if (id.password === pwdForReset) {
                hideResetModal();
                clearInterval(timeLeft);
                choose.style.display = "inline-block";
                display.style.display = "none";
                transID.style.display = "none";
                totalCost = '';
                $(".no-of-customers").html('');
                $(".total-cost").html(`${totalCost}`);
                noOfCustomers.disabled = false;
                noOfCustomers.value = 1;
                tableNo.disabled = false;
                tableNo.value = '';
                $('#order-btn').attr("disabled", true);
                $('#edit-verification-btn').attr("disabled", true);
                $(".order-list ul").empty();
                var transNo = $('#order-id').text();
                $('#dishes').children('li:first-child').addClass("sec-nav-active").siblings().removeClass("sec-nav-active");
                // delete rransaction table in db
                $('.menu ul').html('');
                $('.menu ul').append(firstMenuLists)
                fetch('/menu.html/DeleteOrder', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    delete_transaction_id: transNo,
                  })
                })
                  .then(function (response) {
                    console.log(response)
                    if (response.ok) {
                      console.log('clicked!!');
                      return;
                    }
                    throw new Error('Failed!!');
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              } else {
                msgForReset.style.display = "none";
                warningForReset.style.display = "block";
                focusInputForReset.focus();
                focusInputForReset.value = '';
              }
            })
            $('#verify-edit').click(function () {
              console.log($('.edit-pwd').val(), id.password)
              var pwdForEdit = $('.edit-pwd').val();
              if (id.password === pwdForEdit) {
                hideEditModal();
                $(".cancel-order").css('visibility', 'visible');
              } else {
                msgForEdit.style.display = "none";
                warningForEdit.style.display = "block";
                focusInputForEdit.focus();
                focusInputForEdit.value = '';
              }
            })
          })
        })
        .catch(function (error) {
          console.log(error);
        });

      var trans_id;
      var tCount = 0;
      $('#before-countdown').on('click', function () {
        // var date = new Date();
        // var day = date.getDate();
        tCount++;
        trans_id = `TRXN-${tCount}`;
        console.log(trans_id);
        // document.getElementById("order-id").style.display = "block";
        $('#order-id').html(`${trans_id}`);
      })

      $('.menu ul').append(result);
      var itemsName = [];
      var quantities = [];
      // click items into order list
      $(".menu ul li .row .btn-right .add-to-order").click(function () {
        // var itemTitle = $(this).parent().parent().parent().parent().find('.menu ul li .text-blo3 .row .item-title span').text();
        var itemTitle = $(this).parent().parent().parent().find(".row .item-title .lang-name").text();
        var itemQuantity = $(this).parent().parent().parent().find('.row .item-quantity .stepper input').val();
        console.log(itemQuantity)
        // var checkedValue = $('input[name="size"]:checked').val();
        // var changeInt = "";
        // if (checkedValue === "Large") {
        //   var largePrice = $(this).parent().parent().find('.column #large_item span').text();
        //   var changeInt = largePrice.slice(0, -5);
        // } else {
        //   var smallPrice = $(this).parent().parent().find('.column #small_item span').text();
        //   var changeInt = smallPrice.slice(0, -5);
        // }
        var item = myTrim(itemTitle);
        var qty = myTrim(itemQuantity);
        console.log(item, qty)
        $(".order-list ul").append(`
        <li class="list-group-item order-item">
          <span class="left ordered-item ordered-title">${itemTitle}</span>
          <i class="fa fa-close close cancel-order right" id="close"></i>
          <span class="right m-g-r ordered-item  ordered-qty">${itemQuantity}</span>
        </li>`);
        itemsName.push(item);
        quantities.push(qty);
        // console.log(changeInt)

        // clear item from order list
        $(".order-item .fa-close").click(function () {
          $(this).parent().remove();
          if ($(".order-list li").length < 5) {
            $(".order-list").css('cssText', 'min-height: 200px !important;');
          }
        })
        $(this).parent().parent().parent().find('.row .item-quantity .stepper input').val(1);
      })
      var orderCount = 0;
      // click order btn
      $('#order-btn').click(function () {
        // $('#order_list').each(function () {
        //   var getOrderedTitles = $(this).find('li .ordered-title');
        //   var trim = getOrderedTitles.text().trim();
        //   var orderedTitles = trim.replace(/(\r\n|\n|\r)/gm, " ");
        //   console.log(orderedTitles);
        //   var getOrderedQuantities = $(this).find('li .ordered-qty')
        //   var orderedQuantities = getOrderedQuantities.text();
        //   console.log(orderedQuantities.split(","));
        // })
        console.log(itemsName, quantities, itemsName.length);
        // console.log(trans_id)
        // $('#order_list').each(function () {
          var date = new Date();
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          var hour = date.getHours();
          var minute = date.getMinutes();
          var second = date.getSeconds();

          if (month < 10) month = "0" + month;
          if (day < 10) day = "0" + day;
          if (minute < 10) minute = "0" + minute;
          if (second < 10) second = "0" + second;
          var orderedDate = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
          // var cancelOrder = document.getElementById("close");
          // var getOrderedValue = $(this).find('li .ordered-item');
          // var orderedItems = getOrderedValue.text()
          // if(cancelOrder.style.visibility === 'visible'){
            // var getOrderedTitles = $("#order_list #ordered_list_ul li .ordered-title ");
            // var orderedTitles = getOrderedTitles.map(function() {
            //   return this.textContent.trim();
            // }).get();
            // // console.log(orderedTitles);
            // var getOrderedQuantities = $("#order_list #ordered_list_ul li .ordered-qty ");
            // var orderedQuantities = getOrderedQuantities.map(function() {
            //   return this.textContent.trim();
            // }).get();
            // console.log(orderedQuantities);
          // }else{
          //   console.log("can't")
          // }
          // var getOrderedQuantities = $(this).find('li .ordered-qty')
          // var orderedQuantities = getOrderedQuantities.text();
          // console.log(orderedQuantities.split(","));
          var tableNo = $( "#option option:selected" ).text();
          var transNo = $('#order-id').text();
        
          orderCount++;
          orders_no = `O-${orderCount}`;
          // console.log(transNo);
          console.log(trans_id);
          // orderedNo = orderNo();
          console.log(orders_no)
          // var transID = [];
          // fetch('/menu.html/transaction', { method: 'GET' })
          //   .then(function (response) {
          //     if (response.ok) return response.json();
          //     throw new Error('Request failed.');
          //   })
          //   .then(function (data) {
          //     console.log(data)
          //     data.forEach(txn => {
          //       // console.log(txn._id);
          //       transID.push(txn._id);
          //     })
          //     console.log(transID)
          //     console.log(itemsName, quantities, itemsName.length);
          //   })
          //   .catch(function (error) {
          //     console.log(error);
          //   });
            // console.log(transID);
            console.log(itemsName, quantities, itemsName.length);
              fetch('/menu.html/Orders', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  trans_ID: trans_id,
                  orders:  {
                    ordered_titles: itemsName,
                    ordered_quantities: quantities,
                    ordered_no: orders_no,
                    table_no: tableNo,
                    ordered_at: orderedDate,
                    cooked_status: 0,
                    take_status: 0,
                    placed_status: 0,
                    deleted_status: 0,
                  }
                })
              })
                .then(function (response) {
                  console.log(response)
                  if (response.ok) {
                    console.log('clicked!!');
                    return;
                  }
                  throw new Error('Failed!!');
                })
                .catch(function (error) {
                  console.log(error);
                });
            $(".cancel-order").css('visibility', 'hidden');
            itemsName = [];
            quantities = [];
        // })
      })

      // for dish quantity
      var quantity = 0;
      $('.stepper .minus').click(function () {
        quantity = parseInt($(this).siblings('.input-count').val());
        quantity--;
        $(this).siblings('.input-count').val(quantity);
        if (quantity == 0) {
          $(this).siblings('.input-count').val(1);
        }
      })
      $('.stepper .plus').click(function () {
        quantity = parseInt($(this).siblings('.input-count').val());
        quantity++;
        $(this).siblings('.input-count').val(quantity);
        if (quantity == 100) {
          $(this).siblings('.input-count').val(100);
        }
      })

      items = $(".list-wrapper .menu-item");
      // console.log(items);
      numItems = items.length;
      // console.log(numItems);
      // Show Total Dish Menu Info
      document.getElementById("pagination-info").innerHTML = `Total ${numItems} ${menuType} Menu`;
      //Pagination JS
      //how much items per page to show
      var show_per_page = 5;
      //getting the amount of elements inside pagingBox div
      var number_of_items = numItems;
      //calculate the number of pages we are going to have
      var number_of_pages = Math.ceil(number_of_items / show_per_page);

      //set the value of our hidden input fields
      $('#current_page').val(0);
      $('#show_per_page').val(show_per_page);

      //now when we got all we need for the navigation let's make it '

      var navigation_html = '<a class="previous_link" href="javascript:previous();">&laquo;</a>';
      var current_link = 0;
      while (number_of_pages > current_link) {
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
        current_link++;
      }
      navigation_html += '<a class="next_link" href="javascript:next();">&raquo;</a>';

      $('#pagination-container').html(navigation_html);

      //add active_page class to the first page link
      $('#pagination-container .page_link:first').addClass('active_page');

      //hide all the elements inside pagingBox div
      items.css('display', 'none');

      //and show the first n (show_per_page) elements
      items.slice(0, show_per_page).css('display', 'block');

      $("#dishes").on('click', 'li', function () {
        $('.menu ul').html('');
        $('.menu ul').append(menuItems)
        var len = menuItems.length;
        // console.log(len);
        while (len >= 0) {
          menuItems.shift();
          len -= 1;
          // console.log(len)
        }

        $(".menu ul li .row .btn-right .add-to-order").click(function () {
          var itemTitle = $(this).parent().parent().parent().find(".row .item-title .lang-name").text();
          var itemQuantity = $(this).parent().parent().parent().find('.row .item-quantity .stepper input').val();
          
          // add items to order list
          var item = myTrim(itemTitle);
          var qty = myTrim(itemQuantity);
          $(".order-list ul").append(`
          <li class="list-group-item order-item">
            <span class="left ordered-item ordered-title">${itemTitle}</span>
            <i class="fa fa-close close cancel-order right" id="close"></i>
            <span class="right m-g-r ordered-item  ordered-qty">${itemQuantity}</span>
          </li>`);

          itemsName.push(item);
          quantities.push(qty);
          // clear item from order list
          $(".order-item .fa-close").click(function () {
            $(this).parent().remove();
            if ($(".order-list li").length < 5) {
              $(".order-list").css('cssText', 'min-height: 200px !important;');
            }
          })
          $(this).parent().parent().parent().find('.row .item-quantity .stepper input').val(1);
        })

        var quantity = 0;
        $('.stepper .minus').click(function () {
          quantity = parseInt($(this).siblings('.input-count').val());
          quantity--;
          $(this).siblings('.input-count').val(quantity);
          if (quantity == 0) {
            $(this).siblings('.input-count').val(1);
          }
        })
        $('.stepper .plus').click(function () {
          quantity = parseInt($(this).siblings('.input-count').val());
          quantity++;
          $(this).siblings('.input-count').val(quantity);
          if (quantity == 100) {
            $(this).siblings('.input-count').val(100);
          }
        })

        items = $(".list-wrapper .menu-item");
        // console.log(items);
        numItems = items.length;
        console.log(numItems);
        // Show Total Dish Menu Info
        document.getElementById("pagination-info").innerHTML = `Total ${numItems} ${menuType} Menu`;
        var show_per_page = 5;
        var number_of_items = numItems;
        var number_of_pages = Math.ceil(number_of_items / show_per_page);
        $('#current_page').val(0);
        $('#show_per_page').val(show_per_page);

        var navigation_html = '<a class="previous_link" href="javascript:previous();">&laquo;</a>';
        var current_link = 0;
        while (number_of_pages > current_link) {
          navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
          current_link++;
        }
        navigation_html += '<a class="next_link" href="javascript:next();">&raquo;</a>';

        $('#pagination-container').html(navigation_html);

        $('#pagination-container .page_link:first').addClass('active_page');

        items.css('display', 'none');

        items.slice(0, show_per_page).css('display', 'block');
      })
    })
    .catch(function (error) {
      console.log(error);
    });

})

//Pagination JS

function previous() {

  new_page = parseInt($('#current_page').val()) - 1;
  //if there is an item before the current active link run the function
  if ($('.active_page').prev('.page_link').length == true) {
    go_to_page(new_page);
  }

}

function next() {
  new_page = parseInt($('#current_page').val()) + 1;
  //if there is an item after the current active link run the function
  if ($('.active_page').next('.page_link').length == true) {
    go_to_page(new_page);
  }

}
function go_to_page(page_num) {
  //get the number of items shown per page
  var show_per_page = parseInt($('#show_per_page').val());

  //get the element number where to start the slice from
  start_from = page_num * show_per_page;

  //get the element number where to end the slice
  end_on = start_from + show_per_page;

  //hide all children elements of pagingBox div, get specific items and show them
  $('#pagingBox').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

  /*get the page link that has longdesc attribute of the current page and add active_page class to it
  and remove that class from previously active page link*/
  $('.page_link[longdesc=' + page_num + ']').addClass('active_page').siblings('.active_page').removeClass('active_page');

  //update the current page input field
  $('#current_page').val(page_num);
}

function showEditModal() {
  $('#edit-modal').fadeIn('slow');
  (function fun1() {
    $('.modal-content').css({ 'transform': 'translateY(-50px)' });
  })();
  msgForEdit.style.display = "block";
  warningForEdit.style.display = "none";
}

function hideEditModal() {
  $('#edit-modal').fadeOut('fast');
  (function fun2() {
    $('.modal-content').css({ 'transform': 'translateY(0px)' });
    const inputs = document.querySelectorAll('.passcode-area input');
  })();
  focusInputForEdit.value = '';
}

function showResetModal() {
  $('#reset-modal').fadeIn('slow');
  (function fun3() {
    $('.modal-content').css({ 'transform': 'translateY(-50px)' });
  })();
  msgForReset.style.display = "block";
  warningForReset.style.display = "none";
}

function hideResetModal() {
  $('#reset-modal').fadeOut('fast');
  (function fun4() {
    $('.modal-content').css({ 'transform': 'translateY(0px)' });
    const inputs = document.querySelectorAll('.passcode-area input');
  })();
  focusInputForReset.value = '';
}

function showTimeoutModal() {
  $('#timeout-modal').fadeIn('slow');
  (function fun() {
    $('.modal-content').css({ 'transform': 'translateY(-50px)' });
  })();
}

function hideTimeoutModal() {
  $('#timeout-modal').fadeOut('fast');
  (function fun() {
    $('.modal-content').css({ 'transform': 'translateY(0px)' });
  })();
  // value = [];
}

$(document).on("click", function () {
  //click outside of ".nav__dropdown" class itself and menu will be hidden
  hideTimeoutModal();
  hideEditModal();
  hideResetModal();
})