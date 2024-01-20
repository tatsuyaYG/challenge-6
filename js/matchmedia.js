const mediaQuery = window.matchMedia('(max-width: 768px)');
var gallery = document.getElementById('js-matchmedia--gallery');
var reserv = document.getElementById('js-matchmedia--reserv');

// ページが読み込まれた時に実行
handle(mediaQuery);

// ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
mediaQuery.addEventListener("change",handle);

function handle(mm) {
  if (mm.matches) {
    gallery.classList.add("u-font--8rem");
    reserv.classList.remove("u-lineheight--50");
    console.log("if")
  } else {
    gallery.classList.remove("u-font--8rem");
    reserv.classList.add("u-lineheight--50");
    console.log("else")
  }
}
