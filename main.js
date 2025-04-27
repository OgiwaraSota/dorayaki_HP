$(document).ready(function () {
    function checkVisibility() {
      const viewportHeight = $(window).height(); // ビューポートの高さ
      const scrollTop = $(window).scrollTop(); // 現在のスクロール位置
  
      $(".background").each(function () {
        const sectionTop = $(this).offset().top; // セクションの上端位置
        const sectionHeight = $(this).outerHeight(); // セクションの高さ
  
        // セクションの位置をチェックして画像を切り替える
        if (sectionTop < scrollTop + viewportHeight * 0.6 && sectionTop + sectionHeight > scrollTop + viewportHeight * 0.4) {
          $(this).addClass("active").removeClass("inactive"); // フェードイン
        } else {
          $(this).addClass("inactive").removeClass("active"); // フェードアウト
        }
      });
    }
  
    // スクロールイベントでチェック
    $(window).on("scroll", checkVisibility);
  
    // 初期チェック
    checkVisibility();
  });
  