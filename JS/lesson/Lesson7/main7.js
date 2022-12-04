/*
//1 try catch
 function foo(obj) {
    try {
        console.log(obj.name);
    } catch (e) {
        console.log(e);

    }console.log('fff')

 }
 foo()
*/

/*
//2 throw
function dibeder(a,b) {
    if (b === 0) {
        throw new Error('ooooo b is zero')
    }
    return a / b
}

console.log(dibeder(6,2));
try {
    console.log(dibeder(6, 0));
} catch (e){
    console.log(e
    )
}
console.log(dibeder(20, 2));*/
// 3  ?. одноокий елвіс, уникнення помилки
/*
 let users =
{
    name: 'vasya'
}

console.log(users?.name);
console.log(users?.wife?.name);
*/

/*
// 4 нагадування про з'єднання
let name = 'vasya';
let age = 32;
let users = {
    name,
    age
};
console.log(users);*/
 // 5 як розділити об'єкт
/*
let user = {
    name: 'roros',
    age: 31
};
let {name, age} = user;
console.log(name);
console.log(age);*/
 /*// деструктиризація розділення об'єкта в об'єкті
let user = {
    name: 'kokos',
    age: 33,
    wife: {
        name: 'inna',
        age: 34,

    }
};
let {name, age, wife, wife: {name: wname, age: wage}} = user;
console.log(name, age, wife);
console.log(wname, wage);*/
// клонування плюс заміна в об'єкті
/*let user ={
    name: 'den',
    age: 32
}
let user3 ={...user,status: true, name: 'denis'}
console.log(user3);
console.log(user);*/
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

/*
// 5  добавлениє в масив данних два варіанти
let kkk = users.map((value, index) => ({
    name: value.name,
    age: value.age,
    status: value.status,
    id: value.index + 1
}));
console.log(kkk);
console.log(users.map((value, index) => ({...value, id:index + 1})));
console.log(users);*/

//6 превод обэкта в стрінгу JSON

console.log(users)

let stringa = JSON.stringify(users);
console.log(stringa);

let parse = JSON.parse(stringa);  //це вже незалежний об'єкт
console.log(parse);

// це можна зробити через функцію три варіанта
let ppr = {
    name: 'kokos',
    age: 32
}


function copy(obj) {
    let s = JSON.stringify(obj);
    let p = JSON.parse(s);
    return p;

}

console.log(copy(ppr));
//  другий спосіб
 function ccopy (obj) {
     return JSON.parse(JSON.stringify(obj))
     
 }

console.log(ccopy(ppr));
 //  трейтій саосіб, стрілочна функція
const coppy = (obj) => JSON.parse(JSON.stringify(obj));
console.log(coppy(ppr));