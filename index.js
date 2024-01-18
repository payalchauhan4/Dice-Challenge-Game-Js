//player 1 dice image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "/images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
console.log(image1);
image1.setAttribute("src", randomImageSource);

//palyer 2 dice image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "/images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
console.log(image2);
image2.setAttribute("src", randomImageSource2);

//winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}else {
document.querySelector("h1").innerHTML = "Draw!";
}
