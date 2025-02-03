let width = 210;
let height = 297;

const calcBluebar = (height) => Math.round(height * 0.08);
const calcBblock = (width, height) => Math.round((Math.max(width, height) * 0.12) / 2);
const getLogoHeight = (bluebarHeight) => bluebarHeight / 2;

let bluebarHeight = calcBluebar(height);
let bblockRadius = calcBblock(width, height);
let logoHeight = getLogoHeight(bluebarHeight);

console.log(bluebarHeight);
console.log(bblockRadius);
console.log(logoHeight);