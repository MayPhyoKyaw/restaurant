var items = $(".list-wrapper").find(".menu-item");
console.log(items);
var numItems = items.length;
console.log(numItems);
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
    console.log("showFrom => " + showFrom);
    console.log("showTo => " + showTo);
    items.hide().slice(showFrom, showTo).show();
    console.log(location.href);
  },
});
// document.getElementById("pagination-info").innerHTML = `Total ${numItems} ${menuType} Menu`;
