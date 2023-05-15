let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let plus = 0;

leftButton.addEventListener("click", function () {
  let img = document.getElementsByClassName("p-index-fv__item");
  console.log(img);
  plus += 1000;
  for (let i = 0; i < img.length; i++) {
    img[i].style.transform = `translateX(-${plus}px)`;
  }
  console.log("左が押されました！");
  console.log(img[0]);
});
rightButton.addEventListener("click", function () {
  let img = document.getElementsByClassName("p-index-fv__item");
  plus += 1000;
  for (let i = 0; i < img.length; i++) {
    img[i].style.transform = `translateX(${plus}px)`;
  }
  console.log("右が押されました！");
  console.log(img[0]);
});
// rightButton.addEventListener("click", function () {
//   console.log("右が押されました！");
// });
