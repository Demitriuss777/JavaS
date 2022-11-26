/*
function dsds() {
 return undefined;
}
*/

/*
let str = 'hello Dyma';
console.log(str);
console.log(str[6]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.startsWith('he'));
console.log(str.endsWith('ma'));
let sub = str.substring(0, 7);
console.log(sub);
let indexofh = str.indexOf(history);
let indrxofy = str.indexOf(history);
console.log(str.substring(indexofh, indrxofy));
console.log(str.charAt(8));
 let phone = '(067)12-21-212'
let wine = phone
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', '');

console.log(wine);
console.log(phone);
let obj = 'name: "vasya" , agt:31';
let spl = obj.split(',');
console.log(spl);
console.log(obj);
let ddd = spl[0];

console.log(ddd);
console.log(obj[2]);
let sss = ddd.split(':');
console.log(sss);

*/

/*
let arr = [222, 'fdfd', 23, 44, 67];
console.log(arr);
arr[arr.length]='hello'
console.log(arr)
console.log(arr[arr.length] = '3');
console.log(arr.push(454));
arr.push('priv');
console.log(arr);
console.log(arr.pop());
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.shift());
console.log(arr);
arr.unshift('dsd');
console.log(arr);
let pp = arr.join(" , ");
console.log(pp);
let num = [1, 2, 3, 4, 5];
let pr = arr.concat(num);
console.log(pr);*/
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
/*console.log(users);*/
/*
let spl = users.splice(1, 2, '2sx');
console.log(spl);
console.log(users);
console.log(users.reverse())

let arar = [2,4,5,33,55, 'dgd']
console.log(arar.includes('dgd'));
console.log(users.includes('oleg'));
let str = 'fg ff ';
console.log(str.length)
let s= str.trim()
console.log(s.length)*/
/*for (const user of users) {
    console.log(user)
}*/
/*
function name(uss) {     // 1 спосіб вивести інформацію
    console.log(uss);
}
users.forEach(name)
  */
/*
 users.forEach(function (uss) {
     console.log(uss);

 })
*/
/*users.forEach((user) =>
    console.log(user));*/
/*let ff = [];
for (const x of users) {
    if (x.age === 28) {
        ff.push(x)
    }
}
console.log(ff);

let cc = users.filter(function (xfd) {
    return xfd.age > 30;
});
console.log(cc);
let dd = users.filter((df) => {
    return df.age === 29
});
console.log(dd)*/
 // функція map
/*let map = users.map(function (user) {
    let newUsers = {name:user.name, aaage: user.age}
    return newUsers
})
console.log(map)*/
 // другий варіант
/*let map = users.map((user) => ({namee: user.name, aggga: user.age}));
console.log(map);*/

// як додати номерацію id
/*

let map= users.map((user,index)=>({namber:index +1, namee:user.name, agggge: user.age}))
console.log(map)
*/
/*
let map = users
    .map((user, index) => ({namber: index + 1, name: user.name, age: user.age}))
    .filter(value => value.namber % 2 === 0)
    .forEach(value => console.log(value));
*/

// сортуівння sort

/*
console.log(users.sort(function (a,b){
    return a.age - b.age }))*/

 // сортування по  длінні ім'ю
/*
console.log(users.sort(function (a,b){
    return a.name.length - b.name.length
}))*/
// сортування по алфавіту
/*
console.log(users.sort(function (a,b){
    if (a.name< b.name){
        return -1}
    if (a.name>b.name){
        return 1
    }
    if (a.name===b.name){
        return 0
    }
    }

))*/

// reduce  зменшувач , фасування
/*
let reduce = users.reduce((acam, ppp) => {
    acam.name.push(ppp.name);
    acam.age.push(ppp.age);
    acam.status.push(ppp.status);
    return acam
},
{ name:[], age:[], status:[]}
);
console.log(reduce);*/
