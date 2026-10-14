//가장 먼저 하는 일 : console에 log로 해당 파일이 연결
console.log("complete");
console.log($(window).width());
console.log($(window)).height();
// 현재 브라우저 창의 가로 너비(px)와 세로 길이를 console에 출력

//현재 브라우저 창의 가로세로 길이를 변수에 각각 저장해서 사용할 수 있다
let wWidth = $(window).width();
let wHeight = $(window).height();
//변수에 할당된 값을 확인할 때 또 log를 찍어볼 수 있다.
//console.log(wWidth)
//console.log(wHeight)

//고양이랑 풀숲 배경 조정해보기
$(document).on("mousemove", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  //1. 마우스 이동에 따라 배경 이미지의 위치 움직이게 하기
  $(".bg-img").css("objectposition", "${mouseX / 10}% ${mouseY / 10}%");

  //2. 마우스 커서에 고양이 이미지 따라다니게 하기
  //고양이 이미지의 가로세로 너비를 각각 변수애 할당함
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();
  //let imgWidth = $(".cat-img").width() / 2;
  //let imgHeight = $(".cat-img").height() / 2;

  //이미지의 left, top의 값의 변화를 위에서 선언한 mouse X, Y의 좌표값을
  //가져오서 ㅎ=적용함
  $(".cat_img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat_img").css("top", mouseY - imgHeight / 2 + "px");
});

//mousemove 이벤트가 일어날때마다
//각자의 X,Y 값을 구해서 적용할 수 있습니다.

//mousemove가 일어날때마다 마우스의 X,Y값을 구해서 funct
$(document).mousemove(function (e) {
  //function(e)의 e는 event를 의미하며, 문서(document)에서 mousemove가 발생할 때마다
  //{}중괄호 안의 코드를 실행하라
  $("#status").html(e.pageX + "," + e.pageY);
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
});
