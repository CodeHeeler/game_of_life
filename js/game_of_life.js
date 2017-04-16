function getCell(x,y){
    return $("#cell_" + x + "_" + y);
}

function getNeighbors(currentCell){
    // x-1,y-1   x,y-1   x+1,y-1
    // x-1,y     x,y     x+1,y
    // x-1,y+1   x,y+1   x+1, y+1
    let y = currentCell.parentNode.rowIndex;
    let x = currentCell.cellIndex;
    let xe = x-1;
    let xw = x+1;
    let yn = y-1;
    let ys = y+1;
    let ne = getCell(xe, yn);
    let n  = getCell(x,  yn);
    let nw = getCell(xw, yn);
    let e  = getCell(xe, y);
    let w  = getCell(xw,  y);
    let se = getCell(xe, ys);
    let s  = getCell(x,  ys);
    let sw = getCell(xw, ys);

    return [ne,n,nw,e,w,se,s,sw];
}

function countNeighboringLife(neighbors) {
    let count = 0;
    for(let i = 0; i < neighbors.length; i++){
        if(neighbors[i].hasClass('life')){
            count++;
        }
    }
    return count;
}
