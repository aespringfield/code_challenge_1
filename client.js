$(document).ready(onReady);

function onReady() {
  $(".generate").data("clickCount", 0);
  $(".generate").on("click", function () {
    $(this).parent().append("<div></div>");
    var clickCount = $(this).data("clickCount");
    clickCount++;
    $(this).data("clickCount", clickCount);
    var $newDiv = $(this).siblings().last();
    $newDiv.addClass("red");
    $newDiv.append("<p>" + clickCount + "</p>");
    $newDiv.append("<button class='swap'>Swap</button><button class='delete'>Delete</button>");
  });
  $(".container").on("click", ".swap", function() {
    $(this).parent().toggleClass("red").toggleClass("yellow");
  });
  $(".container").on("click", ".delete", function() {
    $(this).parent().remove();
  });
}
