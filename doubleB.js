let width = 210;
let height = 297;

function calcBluebar(height) {
    const percentage = 0.08;
    return Math.round(height * percentage);
}

function calcBblock(width, height) {
    const percentage = 0.12;
    let largestEdge = Math.max(width, height) * percentage;
    return Math.round(largestEdge / 2);
}

let bluebarHeight = calcBluebar(height);
let bblockRadius = calcBblock(width, height);

function getLogoHeight(halfHeight) {
    return halfHeight / 2;
}

let logoHeight = getLogoHeight(bluebarHeight);

console.log(bluebarHeight);
console.log(bblockRadius);
console.log(logoHeight);