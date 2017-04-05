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
//   if(wine.toLowerCase() == 'yes') {
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


var myVehicle = 3;
var answer = true;
var guess;

for (var attempts = 4; attempts > 0 && answer; attempts--) {
  guess = prompt('How many vehicles do you think I own including motorcyles?');
  guess = parseInt(guess);

  if(guess === myVehicle) {
    alert('Correct!');
    answer = false
  } else if (attempts === 1){
    alert('Sorry you are out of chances');
  } else {
    alert('Not quite, try again');
  }
}
