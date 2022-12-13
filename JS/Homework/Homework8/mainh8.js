/*
/!* 1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*!/

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let user1 = new User(1, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user2 = new User(2, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user3 = new User(3, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user4 = new User(4, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user5 = new User(5, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user6 = new User(6, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user7 = new User(7, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user8 = new User(8, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user9 = new User(9, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let user10 = new User(10, 'Galya', 'fif', 'afqfq@gmail.com', 3423432);
let users = [];
users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(users)

/!*- 2  Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id
 (filter)*!/

let filtr = users.filter((x)=>{
    return x.id % 2 ===0;
})
console.log(filtr);


/!*-  3 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*!/// зробив на
// зменшуваенея

let sort = users.sort((a, b) => {
    return b.id - a.id;

});
console.log(sort);
*/

/*/!* 4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
 товарів)
створити пустий масив, наповнити його 10 об'єктами Client*!/

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let user1 = new Client(1, 'Galya', 'fif', 'afqfq@gmail.com', 3423432, [1,2,]);
let user2 = new Client (2, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[5,4]);
let user3 = new Client(3, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[1,2,4,5,]);
let user4 = new Client(4, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[1,2,4,5,4.2]);
let user5 = new Client(5, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[1,2,4,]);
let user6 = new Client(6, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[1,23,5,]);
let user7 = new Client(7, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[1,2,4,5,4,5,4,4]);
let user8 = new Client(8, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[1,2,4,5,4,3,2,3,4,3,44]);
let user9 = new Client(9, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[1,2,4,5,]);
let user10 = new Client(10, 'Galya', 'fif', 'afqfq@gmail.com', 3423432,[1,]);

let clients = [];
clients.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(clients);

/!*-5 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*!/
let sorycl = clients
sorycl.sort((a, b) => {
    return a.order.length - b.order.length
});
console.log(sorycl);*/

/*
/!*- 6 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,' +
' максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*!/

function car(model, made, year, maxSpeed, enjine) {
    this.model=model
    this.made = made
    this.year = year
    this.maxSpeed= maxSpeed
    this.enjine=enjine
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    this.info= function () {
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function')
            console.log(` назва поля - ${carKey}  -- значення поля -  ${this[carKey]}`)
        }
    }
    this.increaseMaxSpeed= function (newSpeed) {console.log(this.maxSpeed += newSpeed)}
    this.changeYear=function (newValue){ console.log(this.year = newValue)}
    this.addDriver= function (driver){console.log(this.driver = driver)}
}
let cars = [];

let car1= new car('reno', 'logon', 2015, 135, 1.6 );
let car2= new car('reno', 'logon', 2015, 200, 1.6 );
cars.push(car1)
console.log(cars);
car1.drive();
car2.drive();
car1.info();
car1.increaseMaxSpeed(50);
car2.changeYear(2020);
car1.addDriver('dsdsad')
console.log(car1);
*/


/*-7 (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class car {
    constructor(model, made, year, maxSpeed, enjine) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.enjine = enjine;
    }
    drive(){
       console.log( `їдемо зі швидкістю ${this.maxSpeed} на годину`)
}

    infor() {
        for (const argumentsKey in this) {
            if (typeof this[argumentsKey] !== "function") {
                console.log(`${argumentsKey}---${this[argumentsKey]}`)
            }}}


}

let car1 = new car('pegout', 'fruncia', 2022, 185, 1.2);
car1.drive()
car1.infor();


/*
-8 створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}
let Cinderellas =[]
let girl1 = new Cinderella('Alla', 24, 38);
let girl2 = new Cinderella('Galya', 34, 41);
let girl3 = new Cinderella('Inna', 26, 36);
let girl4 = new Cinderella('Sveta', 44, 35);
let girl5 = new Cinderella('Kattay', 34, 32);
let girl6 = new Cinderella('Masha', 65, 31);
let girl7 = new Cinderella('Ira', 23, 40);
let girl8 = new Cinderella('Olya', 45, 39);
let girl9 = new Cinderella('Nika', 55, 38);
let girl10 = new Cinderella('Lora', 23, 37);
Cinderellas.push(girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10);
console.log(Cinderellas)

class princ {

    constructor(name, age, boot) {
        this.name = name;
        this.age = age;
        this.boot = boot;
    }
}
let princ1 = new princ('Dima', 33, 36);

let para = function (cindis, boy) {
    for (const item of cindis) {
        if (item.footSize === boy.boot) {
            console.log(`My para is ${item.name}`)
        }

    }

}
para(Cinderellas, princ1);
let find = Cinderellas.find(value => value.footSize === princ1.boot);
console.log(find);
