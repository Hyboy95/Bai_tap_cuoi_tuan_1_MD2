
function creat2DimArray(n: number, arr: number[]): number[][] {
    let newArr: number[][] = [];
    for (let i: number = 0; i < arr.length; i += n) {
        newArr.push(arr.slice(i, n+i));
    }
    return newArr;
}

let n: number = 3;
let arr_1: number[] = [1,2,3,4,5,10,9,8];
console.log(creat2DimArray(n, arr_1));