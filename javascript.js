function checkName(guessedName){
 if(guessedName == "Naruto"){
   return true;
}
 else{
   return false;
 }
}

function guessingGame(){
  var name = prompt("Who is the main character of the anime Naruto?");
  var guessedCorrectly = checkName(name);
    if(guessedCorrectly){
      alert("You used summoning jutsu to gather that correct name!")
    }
    else{
      alert("Incorrect Shinobi, Try Again!")
    }
}


/*var tailCount= prompt("Enter a tail number");

attempts = 0;

 while(attempts < tailCount){
  console.log(attempts);

  attempts = attempts + 1
} */


// do {
//   num = prompt("Enter the number of tails Naruto has!", 0);
// } while (num <= 9 && num);

function displayTails(){
    var anime = parseInt(prompt("How many Nine Tails (Karuma) do you want at the bottom of the screen?"));
    for(let i = 0; i < anime; i++) {
      document.write('<img src="https://m.media-amazon.com/images/I/41BgUB8RcpL._AC_SS450_.jpg">');
      console.log(i); 
    } 
}

