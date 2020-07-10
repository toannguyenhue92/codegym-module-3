interface LabeledValue {
  label: string;
}

function printLabel(a: LabeledValue) {
  console.log(a.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);