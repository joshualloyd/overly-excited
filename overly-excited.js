// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
    var consoleString = "";
    var exclamationStore = "!";
    for (var i = 0; i < sentence.length; i++) {
    	
    	if ( i % 3 === 2 ) {
    		consoleString += " " + sentence[i] + exclamationStore;
    		exclamationStore += "!"
    	} else {
    		consoleString = consoleString + " " + sentence[i];
    	}
    	console.log(consoleString);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)