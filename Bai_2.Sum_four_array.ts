
function sumArray(arr: number[]): number {
    let sum: number = 0;
    arr.forEach((element: number) => sum += element);
    return sum;
}
function findMaxSumArray(...arr: number[][]) {
    let sumArr: number[] = [];
    arr.forEach((element: number[]) => sumArr.push(sumArray(element)));
    let max: number = Math.max(...sumArr);
    arr.forEach((element: number[]) => {
        if (sumArray(element) === max) {
            console.log(element);
        }
    })
}

let arr_1: number[] = [1,2,3,5,0,-2];
let arr_2: number[] = [2,10,0,5,8];
let arr_3: number[] = [10,2,0,5,8];
let arr_4: number[] = [0,1,2,4,5];

findMaxSumArray(arr_1, arr_2, arr_3, arr_4);


