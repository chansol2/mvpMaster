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

  $target = $(".toggle-container").children();
  $target.removeClass("active");
  $(".toggle-dropdown").removeClass("active");
  if (!$($(this).parent()).hasClass("active")) {
    $(this).addClass("active");
    $($(this).parent()).addClass("active");
  } else {
    console.log("error");
  }
});

//드롭다운 버튼, 또는 드롭다운 메뉴 밖을 눌럿을 경우 드롭다운 메뉴 꺼짐

$(document).on("click", function (event) {
  event.stopPropagation();
  if (!$(event.target).hasClass("dropdown-id")) {
    $target = $(".toggle-container").children();
    $target.removeClass("active");

    //note
    // $("a").removeClass("active");
  }
});

$(".rcmd-large").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();

  console.log(this);
  console.log(event);

  //대분류 토글 버튼 엑티브 클래스 제거하고, 선택된 버튼만 엑티브로 바꾸기
  $(".rcmd-large-container").find("button").removeClass("active");
  $($(event.currentTarget).children()[0]).addClass("active");

  //대분류별 메인페이지로 랜더링되기 전, 각각의 대분류 메인 추천 페이지의 엑티브 클레스를 제거해주기
  $(".rcmd-section").children().removeClass("active");

  //눌린 대분류 버튼의 a 테그의 href에 적혀있는 타겟 id를 활용해 해당 대분류 메인 추천 페이지 엑티브 상태로 전환해줌
  let targetID = $($(event.currentTarget).children()[1]).attr("href");
  $(targetID).addClass("active");

  //rcmd-med-btn클라스를 갖고 있는 모든 테그들에서 active class 제거
  $(".rcmd-med-btn").removeClass("active");

  //타겟된 아이디를 갖고 있는 div 테그의 decendants들 중에 rcmd-med-btn 클라스를 갖고 있는 모든 테그들을 찾고, 그 중 첫번째에 active class 부여
  $($(targetID).find(".rcmd-med-btn")[0]).addClass("active");

  // //rcmd-item 클라스를 찾아서 모든 테그들에서 active 클라스 제거
  $(".rcmd-item").removeClass("active");

  // //눌린 대분류 버튼의 name attr 사용해서 해당 rcmd-product-container-{name}을 찾아 첫번째 child에 active 클라스 추가하기
  let name = $(event.currentTarget).attr("name");
  let r_target = ".rcmd-product-container-" + name;
  $($(r_target).children()[0]).addClass("active");
});

$(".rcmd-med-btn").on("click", function (e) {
  e.stopPropagation();
  e.preventDefault();

  $($(this).siblings()).removeClass("active");
  $(this).addClass("active");

  //클릭된 중분류 버튼에서 name attr을 가져와 알맞은 rcmd-product-container을 찾은 후, 모든 children active class 제거해주기
  let target = ".rcmd-product-container-" + $(this).attr("name");
  $($(target).children()).removeClass("active");

  let id_ = $(this).attr("href");
  $(id_).addClass("active");
});
