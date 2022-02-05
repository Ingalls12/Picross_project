function countSquares(arre){
    let num = 0;
    arre.forEach(ele => {
        if(ele==1){
            num ++;
        }
    });
    return num;
}
export {countSquares}