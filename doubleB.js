let width = 210;
let height = 297;

const BLUEBAR_PERCENTAGE = 0.08;
const BBLOCK_PERCENTAGE = 0.12;

const calcBluebar = (height) => Math.round(height * BLUEBAR_PERCENTAGE);
const calcBblock = (width, height) => Math.round((Math.max(width, height) * BBLOCK_PERCENTAGE) / 2);
const getLogoHeight = (bluebarHeight) => bluebarHeight / 2;

const bluebarHeight = calcBluebar(height);
const bblockRadius = calcBblock(width, height);
const logoHeight = getLogoHeight(bluebarHeight);

console.log("Blue bar height:", bluebarHeight);
console.log("B block radius:", bblockRadius);
console.log("Logo height:", logoHeight);
