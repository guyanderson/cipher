var saySomething = function(whatToSay) {
  alert(whatToSay);
};                //basic function that creates a customised alert.

var sentence = prompt("Enter a sentence.");
sentence;    //prompt for user to enter a sentence that will be saved as a variable called "sentence'."

var firstChar = sentence.charAt(0); //stores the first caracter of the users sentence.

var lastChar = sentence.charAt(sentence.length-1); // stores the first caracter of the users sentence.

saySomething(lastChar);
