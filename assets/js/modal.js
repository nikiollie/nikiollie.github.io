
// Get the modal
var modal = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('myModal');
var modal4 = document.getElementById('second_Modal');
var modal5 = document.getElementById('gas_Modal');
var modal6 = document.getElementById('home_pet');

// Get the button that opens the modal
var img = document.getElementById("img");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("myImg");
var img4 = document.getElementById("myImg2");
var gasImg = document.getElementById("gasImg");
var petImg = document.getElementById("homepetImg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];
var span2 = document.getElementsByClassName("close")[5];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[1];
var span6 = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal
img.onclick = function() {
    modal.style.display = "block";
    captionText.innerHTML = this.alt;
}
img2.onclick = function() {
    modal2.style.display = "block";
}

img3.onclick = function() {
   modal3.style.display = "block";
   captionText.innerHTML = this.alt;
}
img4.onclick = function() {
   modal4.style.display = "block";
}
gasImg.onclick = function() {
   modal5.style.display = "block";
}
petImg.onclick = function() {
    modal6.style.display = "block";
 }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
   modal3.style.display = "none";
}
span4.onclick = function() {
   modal4.style.display = "none";
}
span5.onclick = function() {
   modal5.style.display = "none";
}
span6.onclick = function() {
    modal6.style.display = "none";
 }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
       modal3.style.display = "none";
   }
   if (event.target == modal4) {
       modal4.style.display = "none";
   }
   if (event.target == modal5) {
       modal5.style.display = "none";
   }
   if (event.target == modal6) {
    modal6.style.display = "none";
    }
}
