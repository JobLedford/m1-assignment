var fileNames = []; //To store image file names
var fileNames2 = [];
var fileNames3 = [];
var dogList = []; //To store html list that contain an image
var snakeList = [];
var catList = [];
var photos = [];
var photos2 = [];
var photos3 = [];
var image; //To store the assemble image list codes
var openDiv = "<div class='column'>";
var closeDiv = "</div>";
var openList = "<li class='photo'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag
var opencaption = "<div class='caption'>";
var closecaption = "</div>";
var openDesc = "<div class='description'>";
var closeDesc = "</div>";

//Code for the dogs page
for (var i = 0; i < 4; i++) {
  fileNames.push("doge" + (i + 1)); //Create image file name and store in array
  photos.push("<img src='images/" + fileNames[i] + ".jpg'>"); //Assemble file name into image element
  image =
    openDiv +
    openList +
    photos[i] +
    closeList +
    opencaption +
    fileNames[i] +
    closecaption +
    openDesc +
    "<p>This is " +
    fileNames[i] +
    "</p>" +
    closeDesc +
    closeDiv; //Assemble image element from array with list elements and store in a variable
  dogList.push(image); //Store(push) the assembled list codes into an array
}
document.getElementById("dogList").innerHTML = dogList.join(" ");

//Codes for the snakes on the animals page
for (var e = 0; e < 2; e++) {
  fileNames2.push("snek" + (e + 1)); //Create image file name and store in array
  photos2.push("<img src='images/" + fileNames2[e] + ".jpg'>"); //Assemble file name into image element
  image =
    openDiv +
    openList +
    photos2[e] +
    closeList +
    opencaption +
    fileNames2[e] +
    closecaption +
    openDesc +
    "<p>This is " +
    fileNames2[e] +
    "</p>" +
    closeDesc +
    closeDiv; //Assemble image element from array with list elements and store in a variable
  snakeList.push(image); //Store(push) the assembled list codes into an array
}
document.getElementById("snakeList").innerHTML = snakeList.join("snakeList");

//Code for the cats on animals page
for (var a = 0; a < 3; a++) {
  fileNames3.push("cat" + (a + 1)); //Create image file name and store in array
  photos3.push("<img src='images/" + fileNames3[a] + ".jpg'>"); //Assemble file name into image element
  image =
    openDiv +
    openList +
    photos3[a] +
    closeList +
    opencaption +
    fileNames3[a] +
    closecaption +
    openDesc +
    "<p>This is " +
    fileNames3[a] +
    "</p>" +
    closeDesc +
    closeDiv; //Assemble image element from array with list elements and store in a variable
  catList.push(image); //Store(push) the assembled list codes into an array
}
document.getElementById("catList").innerHTML = catList.join("catList");
