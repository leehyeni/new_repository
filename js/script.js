$(document).ready(function () {
  let played = false;

  $(document).on("click", function () {
    if (played) return;
    played = true;

    $(".kido-main").animate({ left: "750px" }, 500);
    $(".ghost1")
      .delay(40)
      .animate({ left: "750px" }, 500)
      .animate({ opacity: 0 }, 300);
    $(".ghost2")
      .delay(100)
      .animate({ left: "750px" }, 500)
      .animate({ opacity: 0 }, 300);
    $(".ghost3")
      .delay(160)
      .animate({ left: "750px" }, 500)
      .animate({ opacity: 0 }, 300);
    const track = document.getElementById("track");
    const line = document.getElementById("revealLine");
    const total = track.getTotalLength();

    line.style.strokeDasharray = total;
    line.style.strokeDashoffset = total;

    const $head = $(".head");
    const hw = $head.width() / 2;
    const hh = $head.height() / 2;

    $({ t: 0 }).animate(
      { t: 1 },
      {
        duration: 3000,
        easing: "linear",
        step: function (now) {
          const p = track.getPointAtLength(total * now);
          $head.css({ left: p.x - hw, top: p.y - hh });
          line.style.strokeDashoffset = total * (1 - now);
        },
        complete: function () {
          $(".jp").animate({ opacity: 1 }, 800);
        },
      },
    );
  });

  function makeSnow() {
    let x = Math.random() * 1512;
    let size = 3 + Math.random() * 5;
    let time = 4000 + Math.random() * 4000;

    let $snow = $("<div class='snow'></div>");
    $snow.css({
      left: x + "px",
      top: "-10px",
      width: size + "px",
      height: size + "px",
    });
    $(".stage").append($snow);

    $snow.animate(
      { top: "861px", left: x + 40 + "px" },
      time,
      "linear",
      function () {
        $snow.remove();
      },
    );
  }

  setInterval(makeSnow, 300);
});
