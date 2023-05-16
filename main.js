let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");
let item = document.getElementsByClassName("p-index-fv__item");
let plus = 0;
let itemWidth = 0;


window.addEventListener('resize' , function(){
  let itemWidth = item[0].clientWidth;
  console.log(itemWidth);
  let resizeImg = itemWidth / 2;
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(-${resizeImg}px)`;
    console.log("リサイズが反映されています");  
    console.log("現在地" + resizeImg);  
  }
})

// const imgResize = function(){
//      let itemWidth = item[0].clientWidth;
//      console.log(itemWidth);
//      console.log("imgResizeが発動しました");
//    }

// imgResize();
// window.addEventListener('resize', imgResize); //←これが動かない理由がわからない
// imgResize();

// clickイベント内にresizeイベント内の変数を使用したい
// console.log(window.addEventListener('resize', imgResize)());

// 戻るボタン
backButton.addEventListener('click', function(){
  let itemWidth = item[0].clientWidth;
  if(plus > 0){
    plus -= itemWidth;
    console.log("減ってます");
  }else{
    console.log("もう減らない：0です");
  }
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(-${plus}px)`;
  }
  // 無理やりねじ込んだresizeイベント
  window.addEventListener('resize' , function(){
    let itemWidth = item[0].clientWidth;
    console.log(itemWidth);
    for (let i = 0; i < item.length; i++) {
      item[i].style.transform = `translateX(-${itemWidth}px)`;
      console.log("戻る反映されてると");  
    }
  })
  console.log("戻る");  
});


// 次へボタン
nextButton.addEventListener('click', function(){
  let itemWidth = item[0].clientWidth;
  // clickした時、plusがスライドの最大値(itemの長さから1引いた数にitemの横幅をかけた)より小さい場合itemの横幅を加算していく
  if(plus < (item.length - 1) * itemWidth){
    plus += itemWidth;
    console.log("増えてます");
    console.log(itemWidth);
  }else{
    console.log("もう増えないMAXです");
  }
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(-${plus}px)`;
  }
  // 無理やりねじ込んだresizeイベント
  window.addEventListener('resize' , function(){
    let itemWidth = item[0].clientWidth;
    console.log(itemWidth);
    for (let i = 0; i < item.length; i++) {
      item[i].style.transform = `translateX(-${itemWidth}px)`;
      console.log("すすむ反映されてると");  
    }
  })
  
  console.log(plus);
  console.log("すすむ");
})