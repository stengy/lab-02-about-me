'use strict';
console.log("Heyyyy");
var userName = prompt('Hello there!  Whom do we have the pleasure of talking with today?');

alert('It\'s a pleasure to meet you ' + userName + ', We\'re going play a quick game and see what you can tell about me with some good ol intuition.');

var scoreKeeper = 0;

var veteran = prompt('Did I serve in the Armed Forces?');
console.log('Veteran?', veteran);

 if( veteran.toLowerCase() == 'yes') {
  alert('See off to a good start already!  I was in the Army for 6 years.');
  scoreKeeper++;

 } else {
  alert('Ooops!  Maybe you\'ll get the next one');
 }

var food = prompt('Would you believe my favorite fruit is watermelon?');
console.log('love watermelon', food);

  if(food.toLowerCase() == 'yes') {
    alert('Of course right?!  How could anyone not love watermelon!  Look at you go with the 2 piece ^_^ .');
    scoreKeeper++;

  } else {
    alert('Actually I am pretty crazy about watermelon!  I once ate two large watermelons in one sitting...it was not the best idea but it was delicious!');
  }

var home = prompt('Do I live in Seattle?');
console.log('live in Seattle?', home);

  if(home.toLowerCase() == 'no') {
    alert('Correct!  Too expensive!');
    scoreKeeper++;

} else{
    alert('Nah, I actually live across the Puget Sound');
  }

var wine = prompt('Am I a fan of wine?');
console.log('wine', wine);

 if(wine.toLowerCase() == 'yes') {
    alert('YES!  I love wine! mmmm');

  }else {
    alert('Actually I am a wine-o, haha');
  }

var age = prompt('Am I in my 30\'s?');
console.log('30s', age);

  if(age.toLowerCase() == 'yes') {
    alert('yeahhh I am becoming old');

  } else {
    alert('awww thank you, unfortunely I am getting old');
  }


var myVehicle = 3;
var guess;
var answer = true
for (var attempts = 4; attempts > 0 && answer; attempts--) {
  guess = prompt('How many vehicles do you think I own including motorcyles?');
  guess = parseInt(guess);

  if(guess === myVehicle) {
    alert('Correct!');
    answer = false
  } else if (attempts === 1){
    alert('Sorry you are out of chances');
  } else if(guess < 3){
    alert('Not quite, too low');
  } else {
    alert('Whoa! I am not made of money, try a lower number');
  }
}

var answer = true;
var guess;
var countries = ['test1','test2'];
var i;
var secondaryCon = true;

for(var attempts = 6; attempts > 0 && answer; attempts--) {
        guess = prompt('Can you name another country I have been to?');
        console.log('out of for loop' + attempts);


          for( i = 0; i < countries.length && secondaryCon; i++){
console.log('inner for loop' + i);
              if(guess === countries[i]) {
                  answer = false;
                  secondaryCon = false;
                  alert('Yes!  That\'s one of the answers, I would have also accepted: ' + countries + '.');
                  console.log('innerif ' + answer);

            } else if(i === countries.length -1) {
            alert('Unfortunely you are out of attempts.  Possible answers included: ' + countries + '.  Better luck next time!');
            console.log('inner elseif' + i);

        }

  }
}

alert('Well this concludes our little game!  I do hope you enjoyed yourself.  You answered ' + scoreKeeper + ' out of 7 correctly!')
