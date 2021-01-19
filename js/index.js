/*jslint browser */

// Home Gallery/Slideshow
//slideIndex is to change to match specific images argument number,
//  i.e chosenSlide(3) will convert slideIndex to 3


//Display slide with argument number of 1 on initial page load
///(without this code, no image will be displayed on initial page load)
var slideIndex = 1;
displaySlides(slideIndex);

//Only called when the user clicks the arrows to go left or right
function plusSlides(num) {
  //add or minus by 1 to slideIndex depending on
  //whether the user clicks right or left on the image slides,
  //(-1 left ,+1 right)
  slideIndex += num;
  //and pass it as an arguement to displaySlides()
  displaySlides(slideIndex);
}

//chosenSlide, Only Called when a user clicks on a thumbnail
// get clickedSlide argument number
function chosenSlide(clickedSlide) {
  // change slideIndex num to clickedSlide argument num
  slideIndex = clickedSlide;
  //pass slideIndex new value into displaySlides function
  displaySlides(slideIndex);
}



//displaySlide(Handles displaying of slides
// and error handling-if slide is out of range)
function displaySlides(num) {
  var i;

  //saving all slideImages to variable as an [array]
  var slides = document.getElementsByClassName("slideImages");
  //saving all thumbnail images to variable as an [array]
  var thumbs = document.getElementsByClassName("thumbnails");

  // allows the user to move forwards and
  // backwards infinitely in a circular manner.
  //  by checking if the argument "num" is within slides.length
  if (num > slides.length) {
    slideIndex = 1;
  }
  if (num < 1) {
    slideIndex = slides.length;
  }

  //  Iterate through slides array and set all images to display:none
  //(without this for loop, images will be displayed incorrectly
  // , as they will remain on the screen)
  for (i = 0; i < slides.length; i+=1) {
    slides[i].style.display = "none";
  }
  //Selects image from slides array based on slideIndex - 1
  //(i.e image 9 will have an index of 8)
  // and changes the images display property to block,
  // and displays it in the center of the screen
  slides[slideIndex - 1].style.display = "block";
}
// End of Home Gallery/Slideshow





