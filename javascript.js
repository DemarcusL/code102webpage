function checkName(guessedName){
 if(guessedName == "Naruto"){
   return true;
}
 else{
   return false;
 }
}

function guessingGame(){

    var guessedCorrectly = false;
    while(guessedCorrectly == false){
    guessedCorrectly = checkName(prompt("Who is the main character of the anime Naruto?"));
    if(guessedCorrectly == true ){
      alert("You used summoning jutsu to gather that correct name!");
    guessedCorrectly = true;
    }
    else{
      alert("Incorrect Shinobi, Try Again!")
    }
  }
}




function displayTails(){
    var anime = parseInt(prompt("How many Nine Tails (Karuma) do you want at the bottom of the screen?"));
    for(let i = 0; i < anime; i++) {
      document.write('<img src="https://m.media-amazon.com/images/I/41BgUB8RcpL._AC_SS450_.jpg">');
      console.log(i); 
    } 
}

