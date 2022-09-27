/*
  The Array truly is a beatiful thing.
  For this mini assignment we're going to have you go through some of the commonly used array methods.
  There are so many methods built onto the Array prototype so here is a refernce of where you can learn more about them.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  Array Methods you should use to complete these assignemnts:
  .pop(), .push(), .splice(), .slice(), .shift(), .unshift(), .map() .filter(),
*/

/* 
  Problem 1: Justice League
  Remove the side kick 'Robin' from the front of this List.
  Add a super hero `Green Lantern` to the end of this List.
  Add a super hero `Superman` to the front of this List.
  Your final array should look like this:
  ​​​​​[ 'Superman',​​​​​'Batman',​​​​​​​​​​ 'Wonder Woman',​​​​​ 'Flash',​​​​​'Aquaman',​​​​​ 'Green Lantern' ]​​​​​
*/

    console.log("1) Problem 1: Justice League")
    const justiceLeague = ['Robin', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman'];
    justiceLeague.shift();
    justiceLeague.push("Green Lantern");
    justiceLeague.unshift("Superman")
    console.log(justiceLeague)

/* 
  Problem 2: Middle Earth
  In our list of Characters from Middle Earth remove sauraman. He's a traitor.
*/

console.log("2) Problem 2: Middle Earth")
const middleEarth = ['Frodo', 'Samwise', 'Gandalf', 'Sauraman', 'Treebeard'];
middleEarth[3] = 'traitor';
console.log(middleEarth);

/* 
  Problem 3: Numbers
  map over this array, and return a new array of the numbers in it, multiplied by 10
*/

console.log("3) Problem 3: Numbers")
const numbers = [2, 3, 4, 5, 6];
var numsByTen = numbers.map((e) => e * 10);
console.log(numsByTen);

/* 
  Problem 4: Filter Friends
  Here you're going to create two new arrays. 
  One called femaleFriends (a list of all friends filtered where gender === 'F')
  One called maleFriends (a list of all friends filtered where gender === 'M')
*/

console.log("4) Problem 4: Filter Friends")
const friends = [
    { name: 'Monica', gender: 'F' },
    { name: 'Chandler', gender: 'M' },
    { name: 'Ross', gender: 'M' },
    { name: 'Phoebe', gender: 'F' },
    { name: 'Joey', gender: 'M' },
    { name: 'Rachel', gender: 'M' }
];

const femaleFriends = friends.filter(e => e.gender == "F");
console.log(femaleFriends);
const male = friends.filter(e => e.gender == "M");
console.log(male);

module.exports = {
  justiceLeague,
  middleEarth,
  numsByTen,
  femaleFriends,
  male
};
