function isPerfectNumber(n: number): boolean {
    let arr: number[] = [];
    let sum: number = 0;
    for (let i: number = 1; i < n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    arr.forEach((element: number) => sum += element);
    return sum === n;
}

console.log(isPerfectNumber(8128));
console.log(isPerfectNumber(1234));
console.log(isPerfectNumber(6));