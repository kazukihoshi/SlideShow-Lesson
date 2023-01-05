const swiper = new Swiper('.swiper', {
  // オプションの設定
  // 最後までスライドしたら最初の画像に戻る
  loop: true, 
  
  // ページネーションの設定
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})