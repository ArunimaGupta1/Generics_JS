function display<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let str = display<string>(["Apple", "Ball", "Cat", "Dog", "Egg"]);
let num = display<number>([23, 34, 5, 67, 89, 90, 23]);

console.log("String Array");
console.log(str);
console.log("Number Array");
console.log(num);
