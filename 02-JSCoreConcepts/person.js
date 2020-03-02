class Person{
    constructor(name, surname){
        this.name = name
        this. surname = surname
    }
    hello(){
        console.log(`${this.name} ${this.surname.toUpperCase()}`)
    }
    ini(){
        console.log(`${this.name.charAt(0)}.${this.surname.charAt(0)}.`)
    }
}
person = new Person("Kamil","Szmuc");
person.hello();
person.ini();
nowak = new Person("Jan","Nowak")
nowak.hello();
nowak.ini();