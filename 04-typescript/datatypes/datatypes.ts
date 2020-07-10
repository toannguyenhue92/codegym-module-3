function greeter(person: string): string {
  let s = "[Typescript] ";
  return s + "Hello, " + person;
}

let x: [string, number];
x = ["hello", 10];

let list: Array<number> = [1, 2, 3, 4, 5];

list.forEach(element => {
  console.log(element);
});

