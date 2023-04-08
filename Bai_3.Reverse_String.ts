
function reverseString(str: string): string {
    let arr: string[] = str.split('');
    // return arr.reverse().join('');

    // let first: number = 0;
    // let last: number = arr.length - 1;
    // while (first < last) {
    //     let temp = arr[first];
    //     arr[first] = arr[last];
    //     arr[last] = temp;
    //     first ++;
    //     last --;
    // }

    for (let i: number = 0; i < arr.length / 2; i++) {
        let temp: string = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr.join('');
}

console.log(reverseString('1234hello'));