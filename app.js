// 'use strict';
// console.log("Heyyyy");
//
// alert('Let\'s check your memory from introductions ^_^');
//
//
// var veteran = prompt('Did I serve in the Armed Forces?');
// console.log('Veteran?', veteran);
//
//  if( veteran.toLowerCase() == 'yes') {
//   alert('Nice!');
//
//  } else {
//   alert('Ooops!  Maybe you\'ll get the next one');
//  }
//
// var food = prompt('Would you believe my favorite fruit is watermelon?');
// console.log('love watermelon', food);
//
//   if(food.toLowerCase() == 'yes') {
//     alert('omg I LOVE watermelon');
//
//   } else {
//     alert('incorrect');
//   }
//
// var home = prompt('Do I live in Seattle?');
// console.log('live in Seattle?', home);
//
//   if(home.toLowerCase() == 'no') {
//     alert('Correct!  Too expensive!');
//
// } else{
//     alert('Sorry, I actually live across the Puget Sound');
//   }
//
// var wine = prompt('Am I a fan of wine?');
// console.log('wine', wine);
//
//  if(wine.toLowerCase() == 'yes') {
//     alert('YES!  I love wine! mmmm');
//
//   }else {
//     alert('Actually I am a wine-o, haha');
//   }
//
// var age = prompt('Am I in my 30\'s?');
// console.log('30s', age);
//
//   if(age.toLowerCase() == 'yes') {
//     alert('yeahhh I am becoming old');
//
//   } else {
//     alert('awww thank you, unfortunely I am getting old');
//   }


// var myVehicle = 3;
// var guess;
//var answer = true
// for (var attempts = 4; attempts > 0 && answer; attempts--) {
//   guess = prompt('How many vehicles do you think I own including motorcyles?');
//   guess = parseInt(guess);
//
//   if(guess === myVehicle) {
//     alert('Correct!');
//     answer = false
//   } else if (attempts === 1){
//     alert('Sorry you are out of chances');
//   } else if(guess < 3){
//     alert('Not quite, too low');
//   } else {
//     alert('Whoa! I am not made of money, try a lower number');
//   }
// }

var answer = true;
var guess;
var countries = ['Iraq',' Afghanistan', ' Pakistan', ' Korea', ' Kuwait', ' Kazakhstan', ' Canada', ' Mexico', ' Netherlands', ' Germany', ' Iceland', ' Japan', ' Ireland', ' Scotland'];

for(var attempts = 6; attempts > 0 && answer; attempts--) {
  guess = prompt('Can you name another country I have been to?');
  console.log(guess)

  for(var i = 0; i < countries.length; i++){

    if(guess.toLowerCase(guess) === countries[i].trim().toLowerCase()) {
      answer = false;
      attempts = 0;
      alert('Yes!  That\'s one of the answers, I would have also accepted: ' + countries + '.');
      console.log(answer)

    }else if(attempts === 1) {
      alert('Unfortunely you are out of attempts.  Possible answers included: ' + country + '.  Better luck next time!');
      console.log(answer)

    } else {
      alert('Try again, I believe in you!');
      console.log(answer);
    }

  }
}
//       if(guess === country[i]) {
//         alert( 'On the money! ' + country);
//         answer = false;
//       } else if(attempts === 1) {
//         alert('Unfortunely you are out of attempts.  Possible answers include: ' + country + ' . Better luck next time!');
//
//       } else {
//         alert('Try again, I believe in you!');
//       }
//
// }
