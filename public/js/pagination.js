var items = $(".list-wrapper .menu-item");
var numItems = items.length;
var perPage = 5;
var pgNumber = 1;

items.slice(perPage).hide();

$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "&laquo;",
  nextText: "&raquo;",
  edges: 1,
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    console.log(showFrom);
    console.log(showTo);
    items.hide().slice(showFrom, showTo).show();
    console.log(location.href);
  },
});
$("#pagination-container").click(function(){
    pgNumber++
    console.log(pgNumber);
})
console.log(pgNumber);
document.getElementById("pagination-info").innerHTML = `Total ${numItems} ${menuType} Menu`;
