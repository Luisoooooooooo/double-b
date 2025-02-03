let width = 422;
let height = 266;

function calcBluebar(docHeight) {
    const percentage = 0.08;
    return docHeight * percentage;
}
let bluebarHeight = Math.round(calcBluebar(height));
console.log(bluebarHeight);

function calcBblock(largestEdge) {
    const percentage = 0.12;
    return (largestEdge * percentage) / 2;
}
let bblockRadius = Math.round(calcBblock(Math.max(width, height)));
console.log(bblockRadius);