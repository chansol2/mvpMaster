// 햄버거 메뉴버튼, 또는 엑스 버튼 누를 시, 모바일 토글 메뉴가 각각 열리고 (열려있는 모든 모바일 메뉴 창)닫히는 로직

$("#hamburger,#escape").on("click", function (event) {
  if (this.id === "hamburger") {
    $(".mobile-toggle-menu-container.main").addClass("open");
  } else {
    $(".mobile-toggle-menu-container.main").removeClass("open");
    $(".mobile-toggle-menu-container.sub-menu").removeClass("open");
  }
});

// 대분류 아이템 클릭 시, 다음 뎊쓰 뷰로 이동되는 로직

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

// 뒤로가기 버튼 눌렀을 시, 열려있는 중간 뎁쓰 창 닫는 로직

$(".back").on("click", function (event) {
  target = this.id;
  $(".mobile-toggle-menu-container.sub-menu." + target).removeClass("open");
});

// 카테고리바에 a 버튼을 눌렀을 시, 해당 드롭다운 매뉴를 열어주는 로직

$(".toggle-dropdown").on("click", function (event) {
  event.stopPropagation();

  $target = $(".ff").children();
  $target.removeClass("active");
  console.log($target);

  console.log(!$($(this).parent()).hasClass("active"));
  if (!$($(this).parent()).hasClass("active")) {
    $($(this).parent()).addClass("active");
  } else {
    console.log("error");
  }
});

$(document).on("click", function (event) {
  event.stopPropagation();
  console.log(event.target);
  if (!$(event.target).hasClass("dropdown-id")) {
    $target = $(".ff").children();
    $target.removeClass("active");
    $("a").removeClass("active");
  }
});

$("a").on("click", function (event) {
  event.stopPropagation();
  $("a").removeClass("active");
  $(event.target).addClass("active");
});

$(".rcmd-large").on("click", function (event) {
  event.stopPropagation();
  $("a").removeClass("active");
  $($(event.currentTarget).children()[1]).addClass("active");
});

$(".rcmd-middle a").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log(event);
});
