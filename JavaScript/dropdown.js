function showPup() {
  var selectPupbob = document.getElementById("bob");
  var selectPupcoop = document.getElementById("coop");
  var selectPupdoug = document.getElementById("doug");
  var selectPupbilly = document.getElementById("billy");

  var dogbob = document.getElementById("pBob");
  var dogcoop = document.getElementById("pCoop");
  var dogdoug = document.getElementById("pDoug");
  var dogbilly = document.getElementById("pBilly");
  var tellushere = document.getElementById("tellushere");

  if (selectPupbob.selected) {
    dogbob.style.display = "block";
    tellushere.style.display = "block";
    dogcoop.style.display = "none";
    dogdoug.style.display = "none";
    dogbilly.style.display = "none";
  } else if (selectPupcoop.selected) {
    dogbob.style.display = "none";
    tellushere.style.display = "block";
    dogcoop.style.display = "block";
    dogdoug.style.display = "none";
    dogbilly.style.display = "none";
  } else if (selectPupdoug.selected) {
    dogbob.style.display = "none";
    tellushere.style.display = "block";
    dogcoop.style.display = "none";
    dogdoug.style.display = "block";
    dogbilly.style.display = "none";
  } else if (selectPupbilly) {
    dogbob.style.display = "none";
    tellushere.style.display = "block";
    dogcoop.style.display = "none";
    dogdoug.style.display = "none";
    dogbilly.style.display = "block";
  } else {
    dogbob.style.display = "none";
    tellushere.style.display = "none";
    dogcoop.style.display = "none";
    dogdoug.style.display = "none";
    dogbilly.style.display = "none";
  }
  document.getElementById("choosePup").addEventListener(change, showPup);
}
