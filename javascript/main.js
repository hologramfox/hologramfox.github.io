let myImage = document.querySelector('.displayed-img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc !== 'images/3.png') {
//       myImage.setAttribute('src','images/3.png');
//     } else {
//       myImage.setAttribute('src','images/1.png');
//     }
// }

// let myScore = document.querySelector('#result');


// Positive score

let myPosButton = document.querySelector('#posbutton');

function setScorePos() { 
  // myScore.textContent = 'Positive' + slideIndex;

  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8000/saveScore";
  xhr.open("POST", url, true);

  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //         var json = JSON.parse(xhr.responseText);
  //         console.log(json.email + ", " + json.password);
  //     }
  // };
  var data = JSON.stringify({"imageNum": slideIndex - 1, "scoreNum": "1"});
  xhr.send(data);

}

myPosButton.onclick = function() {
  setScorePos();
}

// Negative score

let myNegButton = document.querySelector('#negbutton');

function setScoreNeg() { 
  // myScore.textContent = 'Negative' + slideIndex;

  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8000/saveScore";
  xhr.open("POST", url, true);

  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //         var json = JSON.parse(xhr.responseText);
  //         console.log(json.email + ", " + json.password);
  //     }
  // };
  var data = JSON.stringify({"imageNum": slideIndex - 1, "scoreNum": "0"});
  xhr.send(data);
}

myNegButton.onclick = function() {
  setScoreNeg();
}






var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  // dots[slideIndex-1].className += " active";
}


