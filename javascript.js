function checkName(guessedName){
 if(guessedName == "naruto"){
   return true;
}
 else{
   return false;
 }
}

function guessingGame(){
  var name = prompt("Who is the main character of the anime Naruto?");
  var guessedCorrectly = checkName(naruto);
    if(guessedCorrectly){
      alert("Correct Name Guessed!")
    }
    else{
      alert("Incorrect Name, Try Again!")
    }
}