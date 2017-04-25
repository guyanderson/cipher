var saySomething = function(whatToSay) {
  alert(whatToSay);
};                //basic function that creates a customised alert.

var sentence = prompt("Enter a sentence.");
sentence;    //prompt for user to enter a sentence that will be saved as a variable called "sentence'."

var firstChar = sentence.charAt(0); //stores the first caracter of the users sentence.

var lastChar = sentence.charAt(sentence.length-1); // stores the first caracter of the users sentence. (-1 means first, starting from the end)

var firstAndLast = firstChar + lastChar; // declairs a variable to store the first and last Chars.

var upperCase = firstAndLast.toUpperCase(); //changes firstAndLast to caps.

saySomething(upperCase);
