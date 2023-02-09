var fileNames = []; //To store image file names
var imageList = []; //To store html list that contain an image
var image; //To store the assemble image list codes
var openDiv = "<div class='column'>";
var closeDiv = "</div>";
var openList = "<li class='photo'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag
var opencaption = "<div class='caption'>";
var closecaption = "</div>";
var openDesc = "<div class='description'>";
var closeDesc = "</div>";
var photos;

for(var i=0; i<4; i++) {
  fileNames.push("doge" + (i+1)); //Create image file name and store in array
  photos.push("<img src='images/" + fileNames[i] + ".jpg'>"); //Assemble file name into image element
  image = openDiv + openList + photos[i] + closeList + opencaption + fileNames[i] + closecaption + openDesc + "<p>This is " + fileNames[i] + "</p>" + closeDesc + closeDiv; //Assemble image element from array with list elements and store in a variable
  imageList.push(image); //Store(push) the assembled list codes into an array
}

document.getElementById('dogList').innerHTML = imageList;