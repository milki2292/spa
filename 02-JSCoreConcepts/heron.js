// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let p = 0.5*(a+b+c);
let P = p*Math.sqrt((p-a)*(p-b)*(p-c))

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${P}.`);