names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        // ...
    }

    startWith(letter){
        return // names (array) which starts with the letter
    }

    sort() {
        return // names (array) in alphabetical order 
    }

    get() {
        return // names (array) in natural order
    }

    getFirst(n) {
        return // get first 'n' names (array) 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



