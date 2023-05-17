let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");
let item = document.getElementsByClassName("p-index-fv__item");
let currentLocation = 0;
let currentSlideIndex  =  0;
let itemWidth = item[0].clientWidth;


// 画面幅を常に取得
window.addEventListener('resize' , function(){
  itemWidth = item[0].clientWidth;
  currentLocation = itemWidth * currentSlideIndex;
  console.log(itemWidth);
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(-${currentLocation}px)`;
    // console.log("リサイズが反映されています");  
    // console.log("現在地" + resizeImg);  
    console.log(currentLocation);  
  }
})


// 戻るボタン
backButton.addEventListener('click', function(){
  if(currentLocation > 0){
    currentSlideIndex--
    currentLocation -= itemWidth;
    console.log("減ってます");
    console.log(currentSlideIndex);
  }else{
    console.log("もう減らない：0です");
  }
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(-${currentLocation}px)`;
  }
  console.log("戻る");  
});


// 次へボタン
nextButton.addEventListener('click', function(){
  // clickした時、currentLocationがスライドの最大値(itemの長さから1引いた数にitemの横幅をかけた)より小さい場合itemの横幅を加算していく
  if(currentLocation < (item.length - 1) * itemWidth){
    currentSlideIndex++
    currentLocation += itemWidth;
    console.log("増えてます");
    console.log(itemWidth);
    console.log(currentSlideIndex);
  }else{
    console.log("もう増えないMAXです");
  }
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translateX(-${currentLocation}px)`;
  }  
  console.log(currentLocation);
  console.log("すすむ");
})

console.log(currentSlideIndex);