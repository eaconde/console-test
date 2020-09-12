console.log('Outside of group');

console.group();
console.log('I am in a group');
console.log("This one too...");
console.groupEnd();

console.log("Outside of group again");