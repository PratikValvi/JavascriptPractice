let flagHeight = 13;
let longJump = 6;
let shortJump = 1;

let numberOfShortJumpsRequired = flagHeight % longJump;

let numberOfLongJumpsRequired = (flagHeight - numberOfShortJumpsRequired) / longJump;

let numberOfTotalJumpsRequired = numberOfShortJumpsRequired + numberOfLongJumpsRequired;

console.log(numberOfTotalJumpsRequired);