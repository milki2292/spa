names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter){
        return names.filter(name => this.names[0].charAt(0)==letter)
    }

    sort() {
        return this.names.sort();
    }

    get() {
        return this.names
    }

    getFirst(n) {
        return this.names.slice(0,n)
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



