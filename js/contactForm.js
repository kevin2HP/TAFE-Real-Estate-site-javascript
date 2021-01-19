// Contact form validation
function validate() {
    // Setting each each input error message to blank
    // so the error message is removed when the user enters the correct value
    document.getElementById('nameError').innerHTML="";
    document.getElementById('phoneError').innerHTML="";
    document.getElementById('emailError').innerHTML="";
    document.getElementById('radioError').innerHTML="";
    document.getElementById('checkError').innerHTML="";
    document.getElementById('roomError').innerHTML="";
    document.getElementById('errorMessage').innerHTML="";
  
  
    // saving form data to variables
    var name = document.getElementById("fName").value;
    var phone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var radio = document.getElementsByName("rad");
    var checkbox = document.getElementsByName("check");
    var rooms = document.getElementById("roomQuantity").value;
    var message = document.getElementById("comment").value;
    var errorText;
  
    var i = 0;
    var checkItem;
  
    //Variables to store checked radio and checkbox values in a array,
    // as it makes it easier to get their values
    var checkRadio = [];
    var checkedBoxes = [];
  
    // replacing all white space from these inputs
    name = name.replace(/\s+/g, " ");
    phone = phone.replace(/\s+/g, " ");
    email = email.replace(/\s+/g, " ");
    rooms = rooms.replace(/\s+/g, " ");
    message = message.replace(/\s+/g, " ");
  
    for (i = 0; i < radio.length; i += 1) {
   // Iterate throught radio array
    //and push checked radio value to checkRadio array
      if (radio[i].checked) {
        checkItem = radio[i].value;
        checkRadio.push(checkItem);
      }
    }
  
  
    //Check if name value length is < 2 characters
    if (name.length < 2) {
      //set var to hold error text to be displayed
      errorText = "Please Enter valid Name";
      document.getElementById('nameError').innerHTML = errorText
      //return false otherwise the form will get submitted (IMPORTANT)
      return false;
    }
    
  
    // Check if phone isnt a number or length != 10
    // If any of these conditions are true display error message
    if (window.isNaN(phone) || phone.length !== 10) {
      errorText = "Please Enter valid Phone Number";
      document.getElementById('phoneError').innerHTML = errorText
      return false;
    }
  
    //If email value lacks "@" or email length less than 6
    //display error Text
    if (email.indexOf("@") === -1 || email.length < 6) {
      errorText = "Please Enter valid Email";
      document.getElementById('emailError').innerHTML = errorText
      return false;
    }
  
     // If none of the radio inputs are checked, display error message
    if (!(radio[0].checked || radio[1].checked || radio[2].checked)) {
      errorText = "Please Select Buy, Sell or Rent";
      document.getElementById('radioError').innerHTML = errorText
      return false;
    }
    //if none of the checkboxes are checked, display error message
    if (!(checkbox[0].checked || checkbox[1].checked || checkbox[2].checked)) {
      errorText = "Please Select All that apply (Unit,Townhouse or House)";
      document.getElementById('checkError').innerHTML = errorText
      return false;
    }
  
    //if a checkbox is checked
    // save its value to a variable then
    // push it to the checkboxes array
    if (checkbox[0].checked) {
      var cBox1 = checkbox[0].value;
      checkedBoxes.push(cBox1);
    }
    if (checkbox[1].checked) {
      var cBox2 = checkbox[1].value;
      checkedBoxes.push(cBox2);
  
    }
    if (checkbox[2].checked) {
      var cBox3 = checkbox[2].value;
      checkedBoxes.push(cBox3);
  
    }
  
    // if number of rooms < 1 or > 10 display errorMessage
    if (rooms < 1 || rooms > 10) {
      errorText = "Please Enter number of rooms required (1-10)";
      document.getElementById('roomError').innerHTML = errorText
      return false;
    }
  
  
    //If message length < 5 characters
    //display error message
    if (message.length < 5) {
      errorText = "Please leave a comment (At least 5 characters in length)";
       document.getElementById('errorMessage').innerHTML = errorText
  
      return false;
    }
  
  
  
    //If the user passes all validation, a confirm box will pop up,
    // displaying all their form data, asking if everything is correct
    var answer = window.confirm("Are these values correct\nName: " + name +
      "\nPhone #: " + phone + "\nEmail: " + email + "\nYou are looking to : " +
      checkRadio[0] + "\nYou are interested in: " +
      checkedBoxes.toString() + "\nNumber Of Rooms: " +
      rooms + "\nMessage: " + message);
  
    //If the user confirms
    if (answer === true) {
      window.alert("Thank you\nYour Form has been submitted");
      //They will recieve a confirmation and their message will be posted
      // return true;
    } else {
      window.alert("Your message has not been posted");
      return false;
    }
  
  }
    // end of contact form validation