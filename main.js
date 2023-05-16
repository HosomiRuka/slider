let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");
let item = document.getElementsByClassName("p-index-fv__item");
let plus = 0;
let itemWidth = 0;


// window.addEventListener('resize' , function(){
//   let itemWidth = item[0].clientWidth;
//   console.log(itemWidth);
// })

const imgResize = function(){
     let itemWidth = item[0].clientWidth;
     console.log(itemWidth);
     console.log("imgResizeが発動しました");
   }

// imgResize();
window.addEventListener('resize', imgResize); //←これが動かない理由がわからない
imgResize();

// clickイベント内にresizeイベント内の変数を使用したい
// console.log(window.addEventListener('resize', imgResize)());

// 戻るボタン
backButton.addEventListener('click', function(){
  if(plus > 0){
    plus -= itemWidth;
    console.log("減ってます");
  }else{
    console.log("もう減らない：0です");
  }
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(-${plus}px)`;
  }
  console.log("戻る");  
});


// 次へボタン
nextButton.addEventListener('click', function(){
  // clickした時、plusがスライドの最大値(itemの長さから1引いた数にitemの横幅をかけた)より小さい場合itemの横幅を加算していく
  if(plus < (item.length - 1) * itemWidth){
    plus += itemWidth;
    console.log("増えてます");
  }else{
    console.log("もう増えないMAXです");
  }
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(-${plus}px)`;
  }
  console.log(plus);
  console.log("すすむ");
})