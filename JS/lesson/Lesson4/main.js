/*
let users = [
    {name: 'vasja', age: 32, status: false},
    {name: 'ket', age: 34, status: false},
    {name: 'pit',age: 38, status: true},
    {name: 'lesya', age: 19,status: true},
    {name: 'sveta', age: 20, status: true},
    {name: 'dima', age: 22, status: true},
    {name: 'kjlya', age: 44,status: false},
    {name: 'nika',age: 7,status: true},
    {name: 'inna', age: 35,status: true},
    {name: 'valya',age: 60,status: true}
];
console.log(users.length);
for ( let user of users) {
    console.log(user);
    document.write(`
<div class="userBox">
<h1>${user.age}</h1>
<p3>${ user.name} </p3> <h3>${user.status}</h3>

</div>`)

}*/

/*
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
document.write(`
  <div>
   <img src="${product.image}" alt="${product.title}">
  <h1> назва- ${product.title}  ціна ${product.price}</h1>
 
</div>`)
}*/

/*
let users = [
    {name: 'vasja', age: 32, status: false},
    {name: 'ket', age: 34, status: false},
    {name: 'pit',age: 38, status: true},
    {name: 'lesya', age: 19,status: true},
    {name: 'sveta', age: 20, status: true},
    {name: 'dima', age: 22, status: true},
    {name: 'kjlya', age: 44,status: false},
    {name: 'nika',age: 7,status: true},
    {name: 'inna', age: 35,status: true},
    {name: 'valya',age: 60,status: true}
];
for (const user of users) {
    if (!user.status) {
        document.write(`
<div class="userBox">
<h1>${user.name}, ${user.age}</h1>
<p2>${user.status}</p2>
</div>`)
    }
}
*/

/*
let x = 0;
x = x + 6;
console.log(x);
x *= 2;
console.log(x);
x++;
console.log(x);
*/
/*let x = 0;
console.log(x++); // 0
console.log(x);//1
console.log(++x); //2
console.log(--x);//1*/

/*let users = [
    {name: 'vasja', age: 32, status: false},
    {name: 'ket', age: 34, status: false},
    {name: 'pit',age: 38, status: true},
    {name: 'lesya', age: 19,status: true},
    {name: 'sveta', age: 20, status: true},
    {name: 'dima', age: 22, status: true},
    {name: 'kjlya', age: 44,status: false},
    {name: 'nika',age: 7,status: true},
    {name: 'inna', age: 35,status: true},
    {name: 'valya',age: 60,status: true}
];*/
/*debugger*/
/*
for (let i =2; i<users.length - 5 ;i++){
    console.log(users[i]);

}*/
/*

for (let i =Math.round(users.length/2); i < users.length; i++) {  // Бібліотека Math
    const user = users[i];
    console.log(user);

}*/

/*
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age < 30) {  //мохінації з віком
        console.log(user)
    }

}*/
/*
for (let i = users.length - 1; i >= 0; i--) { // ritar виводить навпаки
    const user = users[i];
    console.log(user);
}
*/

/*
let u = {name: 'vasja', age: 32, status: false}
for (const uKey in u) {
    console.log(uKey)

}*/
let users = [
    {name: 'vasja', age: 32, status: false},
    {name: 'ket', age: 34, status: false},
    {name: 'pit',age: 38, status: true},
    {name: 'lesya', age: 19,status: true},
    {name: 'sveta', age: 20, status: true},
    {name: 'dima', age: 22, status: true},
    {name: 'kjlya', age: 44,status: false},
    {name: 'nika',age: 7,status: true},
    {name: 'inna', age: 35,status: true},
    {name: 'valya',age: 60,status: true}
]
/*for (const user of users) { //виводить імя вік, те що є в масиві


    for (const ooo in user) {
        console.log(ooo, user[ooo]);

    }
    console.log('--------');

}*/
let i =0
while (i < users.length) {
    let user =users[i]
    if (!user.status){
    console.log(users[i]);}
    i++
}

