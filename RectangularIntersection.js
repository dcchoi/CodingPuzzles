function Rectangle(leftX, bottomY, width, height){
    this.leftX = leftX;
    this.bottomY = bottomY;
    this.width = width;
    this.height = height;
}

function Coordinates(x, y){
    this.x = x;
    this.y = y;
}

function Range(min, max){
    this.min = min;
    this.max = max;
}
function findRange(start, length){
    new Range(start, start + length);
}

function findOverlap(rangeR1, rangeR2) {
    //find which line can be caught as intersect
    if(rangeR1.min < rangeR2.min){
        if(rangeR1.max < rangeR2.min){ return; }
        else{
            return findRange(rangeR2.min, rangeR1.max - rangeR2.min);
        }
    }
    else if(rangeR1.min > rangeR2.min){
        if(rangeR2.max < rangeR1.min){ return; }
        else{
            return findRange(rangeR1.min, rangeR2.max - rangeR1.min);
        }
    }
    else{
        //if the mins are equal, we need to find the smaller max
            return findRange(rangeR1.min, rangeR2.max > rangeR1.max ? rangeR1.max : rangeR2.max);
    }
}

function createRectangle(xRange, yRange){
    new Rectangle(xRange.min, yRange.min, xRange.max - xRange.min, yRange.max - yRange.min);
}

let r1 = new  Rectangle(1, 1, 6, 3);
let r2 = new  Rectangle(5, 2, 3, 6);

let xOverlap = findOverlap(findRange(r1.leftX, r1.width), findRange(r2.leftX, r2.width));
let yOverlap = findOverlap(findRange(r1.bottomY, r1.height), findRange(r2.bottomY, r2.height));

createRectangle(xOverlap, yOverlap);