'use strict';
console.log("Heyyyy");

alert('Let\'s check your memory from introductions ^_^');

//Start Function for first Question
function questionOne(answer) {
  if (answer.trim().toLowerCase() === 'yes') {
   return alert('Nice');
  } else {
   return alert('Ooops!  Maybe you\'ll get the next one');
    }
}

var veteran = prompt('Did I serve in the Armed Forces?');
questionOne(veteran);

//Start function for second QuestionOne
function questionTwo(answer) {
    if(answer.trim().toLowerCase() === 'yes') {
      return alert('omg I LOVE watermelon');

    } else {
      return alert('incorrect');
    }

}
var food = prompt('Would you believe my favorite fruit is watermelon?');
console.log('love watermelon', food);
questionTwo(food);

// start function for third question
function questionThree(answer) {
    if(answer.trim().toLowerCase() === 'no') {
      return alert('Correct!  Too expensive!');

    } else {
    return alert('Sorry, I actually live across the Puget Sound');
    }
}
var home = prompt('Do I live in Seattle?');
console.log('live in Seattle?', home);
questionThree(home);

//start function for fourth question
function questionFour(answer) {
   if(answer.trim().toLowerCase() === 'yes') {
      return alert('YES!  I love wine! mmmm');

    } else {
      return alert('Actually I am a wine-o, haha');
    }
}
var wine = prompt('Am I a fan of wine?');
console.log('wine', wine);
questionFour(wine);

//start function for fifth question
function questionFive(answer){
    if(answer.trim().toLowerCase() === 'yes') {
      return alert('yeahhh I am becoming old');

    } else {
      return alert('awww thank you, unfortunely I am getting old');
    }
}
var age = prompt('Am I in my 30\'s?');
console.log('30s', age);
questionFive(age);

//start functoin for sixth question
function questionSix(){
  var myVehicle = 3;
  var guess;
  var answer = true

  for (var attempts = 4; attempts > 0 && answer; attempts--) {
    guess =  prompt('How many vehicles do you think I own including motorcyles?');
    guess = parseInt(guess);

    if(guess === myVehicle) {
      return alert('Correct!');
      console.log(answer1);
      answer = false
    } else if (attempts === 1){
      alert('Sorry you are out of chances');
    } else if(guess < 3){
      alert('Not quite, too low');
    } else {
      alert('Whoa! I am not made of money, try a lower number');
    }
  }
}
questionSix();

//
// var answer = true;
// var guess;
// var countries = ['Iraq','Afghanistan', 'Pakistan', 'Korea', 'Kuwait', 'Kazakhstan', 'Canada', 'Mexico', 'Netherlands', 'Germany', 'Iceland', 'Japan', 'Ireland', 'Scotland'];
// var i;
// var stopInnerLoop = true;
//
// for(var attempts = 6; attempts > 0 && answer; attempts--) {
//         guess = prompt('Can you name another country I have been to?');
//         console.log('out of for loop' + attempts);
//
//
//           for( i = 0; i < countries.length && stopInnerLoop; i++){
// console.log('inner for loop' + i);
//               if(guess === countries[i]) {
//                   answer = false;
//                   alert('Yes!  That\'s one of the answers, I would have also accepted: ' + countries + '.');
//                   stopInnerLoop = false;
//                   console.log('innerif ' + answer);
//
//             } else if(i === countries.length -1) {
//             alert('Unfortunely you are out of attempts.  Possible answers included: ' + countries + '.  Better luck next time!');
//             console.log('inner elseif' + i);
//
//         }
//
//   }
// }
