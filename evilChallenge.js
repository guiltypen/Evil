let floors = 6; //how many floors

buildTower(floors); //function call

//print the return using iteration method 😁

/** 
 * 😈 Introduce to you The evil javascript tower 😈
function recieves number of floors to build a tower
the function returns an array as the following

e.g.
*****[tower of 1 floor]*****
[
  '*'
]
*****[tower of 3 floors]*****
[
  '  *  ', 
  ' *** ', 
  '*****'
]
*****[tower of 6 floors]*****
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/
function buildTower(nFloors) {
  let i = 1;
  let floor = 1;
  let space = [""];
  let star = ["*"];
  let count = nFloors;
  let x = 0;
  let spaceString = [];
  let starString = ["*"];
  while (i <= nFloors) {
    while (count != 1) {
      space[x + 1] = space[0];
      count--;
      x++;
      //console.log(space);
      // console.log(count);
    }
    x = 0;
    let countStars = floor;
    while (countStars != 0) {
      star[x] = star[0];
      countStars--;
      x++;
      //console.log(space);
      // console.log(count);
    }
    floor++;
    count = nFloors - i;
    let spaceString = space.join(" ");
    let starString = star.join(" ");
    console.log(`'${spaceString + starString + spaceString}'`);
    space = [""];
    x = 0;
    i++;
  }
}
