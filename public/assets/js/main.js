$("#hamburger,#escape").on("click", function (event) {
  if (this.id === "hamburger") {
    $(".mobile-toggle-menu-container.main").addClass("open");
  } else {
    $(".mobile-toggle-menu-container.main").removeClass("open");
    $(".mobile-toggle-menu-container.sub-menu").removeClass("open");
  }
});

$(".mobile-toggle-menu-column > .item").on("click", function (event) {
  event.stopPropagation();
  let itemID = this.id;
  switch (itemID) {
    case "cafe":
      $(".sub-menu.cafe").addClass("open");
      break;
    case "home":
      $(".sub-menu.home").addClass("open");
      break;
    case "party":
      $(".sub-menu.party").addClass("open");
      break;
    case "game":
      $(".sub-menu.game").addClass("open");
      break;
    case "bed":
      $(".sub-menu.bed").addClass("open");
      break;
    case "living":
      $(".sub-menu.living").addClass("open");
      break;
    case "storage":
      $(".sub-menu.storage").addClass("open");
      break;
    case "book":
      $(".sub-menu.book").addClass("open");
      break;
    default:
      console.log("error on toggle menu column");
      break;
  }
});

$(".back").on("click", function (event) {
  target = this.id;
  $(".mobile-toggle-menu-container.sub-menu." + target).removeClass("open");
});
