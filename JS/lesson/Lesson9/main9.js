/*console.log(document);
console.log(document.head);
console.log(document.body.innerHTML);
let data = document.body.children;
console.log(data);
// 1 пошук по індуфікаторам getElementById якщо вони є
let ppp = document.getElementById('list-1');
console.log(ppp);
console.log(ppp.children);

// 2 пошук по  класам getElementsByClassName шукає богато
let ulMenu = document.getElementsByClassName('menu');
console.log(ulMenu);

// 3 пошук по тегу getElementsByTagName
let allUll = document.getElementsByTagName('ul');
console.log(allUll)


//  пошук по селектору
//  шукає тількт один елемент querySelector
let one = document.querySelector('.menu');
console.log(one);
// шукає всі елементи querySelectorAll
let all = document.querySelectorAll('.menu');
console.log(all);

//
let lilist = document.getElementsByTagName('li');
console.log(lilist);
for (const lilistElement of lilist) {
    console.log(lilistElement);
}
let lione = lilist[0];
console.log(lione);
// змінити ліжко
lione.innerHTML = 'hello';
// змінити стиль
lione.style.background = 'red';
// можна додати класи
lione.classList.add('yyy');
lione.classList.add('xxx');
// удолить класи
lione.classList.remove('yyy');*/


/*
let lilist = document.getElementsByTagName('li');
console.log(lilist);
for (const lilistElement of lilist) {
  /!*  console.log(lilistElement);*!/
// добалення елементов в ліжка типа стиля
    // language=HTML
  /!*  lilistElement.innerHTML= '<b> hello </b>'; // змінюю всі елементи на hello*!/
    let text = lilistElement.innerText // работаю з текстом
    /!*text='<b>'+text+'</b>' // 1 варіант*!/
    text = `<b>${text}</b>`;
    lilistElement.innerHTML=text
}*/
/*  // form
let forms = document.forms;   // пошук всіх форм
console.log(forms);

let f2 = (document.forms.f2)
console.log(f2);
console.log(f2.name);
console.log(f2.name.value); // при добавденні value ми получимо інфу яка міститься в інпуті

//  як дізнатися які назви мають input
let children = f2.children
for (const child of children) {
    let atrib = child.getAttribute("name") // використовуємо getAttribute вказуємо іммя
    if (atrib != null && atrib != '') { // щоб не булоо null яке дає кнопка

        console.log(atrib);
    }

}*/

//як добавити елемент div або p
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
let div = document.createElement('div'); //  створили едемент
/!*
document.body.append(div); //  за допомогою append вставляємо, але спочатку вказуємо куди всавити

console.log(div); *!/ //
let p = document.getElementsByTagName('p');
console.log(p)

let p1 = p[0];
console.log(p1);
p1.appendChild(div); // тепер div можно наповнити контентом
div.innerText = "fdfdfd";
console.log(p1);

let h1 = document.getElementsByTagName('h1')[1];
document.body.insertBefore(p1, h1);*/

// є ил створити ліжка і запихнути масив юзерів
let userss = document.getElementsByClassName('users');
let usersNtw = userss[0];
console.log(usersNtw)
for (const user of users) {
    let li = document.createElement('li');
    li.innerText =`${user.name} ${user.age} `
    usersNtw.appendChild(li)  // добавляє інформацію

    console.log(user);

}

console.log(usersNtw)

// події
/*
document.body.onmousemove=function (){
    console.log('?')
}*/
 /*document.body.onmousemove=function (e) {
     console.log(e.pageX, e.pageY);  //  визночає кординати
 }*/
document.body.onmousemove = function (e) {
    document.body.style.background = `rgb(${e.pageX}, ${e.pageY}, ${e.pageY})`;
}