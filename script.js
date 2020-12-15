var penColor = 'black'; 
var cleared = 'white';
var pixels =  [];

function setPixelColor(pixel) { 
  pixel.style.backgroundColor = penColor;
  pixels.push(pixel);    //Add to the list of pixels
}

function setPenColor (pen) {
  penColor = pen;
}

function clearAll( ) { 
  //Loop through all list items  https://www.w3schools.com/js/js_loop_for.asp

  for (var i = 0; i < pixels.length; i++) {
  //set each pixel to "clear", default color white
    //One specific element in the list  pixels[i]
    pixels[i].style.backgroundColor = 'white';
  }
  //clear the list
    pixels = [];
}
