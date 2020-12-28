$(".fa-close").click(function () {
  $(this).parent().remove();
  if ($(".order-list li").length < 5) {
    $(".order-list").css('cssText', 'min-height: 200px !important;');
  }
})

