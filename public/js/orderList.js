// // click add to order btn to add item into list
// $(".menu ul li .row .btn-right .add-to-order").click(function() {
//   var itemTitle = $(this).parent().parent().parent().find('.row .item-title span').text();
//   var itemQuantity = $(this).parent().parent().parent().find('.row .item-quantity .stepper input').val();
//   var itemPrice = $(this).parent().parent().parent().find('.row .left .item-price').text();
//   var changeInt = itemPrice.slice(0, -5);
//   $(".order-list ul").append(`
//   <li class="list-group-item order-item">
//     <span class="left ordered-item">${itemTitle}</span>
//     <i class="fa fa-close close right"></i>
//     <span class="right m-g-r ordered-item ordered-price">${changeInt * itemQuantity} &nbsp;</span>
//     <span class="right m-g-r ordered-item  ordered-qty">${itemQuantity} &nbsp;x</span>
//   </li>`);
//   console.log("choose...")

//   // clear item from order list
//   $(".order-item .fa-close").click(function () {
//     $(this).parent().remove();
//     if ($(".order-list li").length < 5) {
//       $(".order-list").css('cssText', 'min-height: 200px !important;');
//     }
//   })
// });

//  // clear item from order list
//  $(".order-item .fa-close").click(function () {
//   $(this).parent().remove();
//   if ($(".order-list li").length < 5) {
//     $(".order-list").css('cssText', 'min-height: 200px !important;');
//   }
// })

$("#dish_list .menu ul li .row .btn-right .add-to-order").click(function () {
    var itemTitle = $(this).parent('div').parent('div').parent('div').parent('div').find('.menu ul li .text-blo3 .row .item-title span').text();
    console.log(itemTitle)
  })