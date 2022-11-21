/*

1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/
/*
function rectangle_square (lenght, width) {
    return lenght * width;
}

let x = rectangle_square(35, 33);
console.log(x);

*/
/*let square =( a,b) => (a*b)
console.log(square(10,10))*/

/*
2- створити функцію яка обчислює та повертає площу кола з радіусом r
*/
/*
function circle_square(r) {
    return 3.14 * (r * r);
    
}

let y = circle_square(11);
console.log(y)
*/

/*let squareCircle = (r) => Math.PI * Math.pow(r, 2);
console.log(squareCircle(11));*/
/*3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
/*function cylinder_square(cylinder_square_r, cylinder_square_h) {
    return 2*3.14*cylinder_square_r*cylinder_square_h
    
}

let c = cylinder_square(5, 87);
console.log(c);*/

/*
let squareCylinder = (r, h) => 2 * Math.PI * r * h;
console.log(squareCylinder(5, 87));
*/

/*4- створити функцію яка приймає масив та виводить кожен його елемент*/

 /*function aray(arr) {
     for (arrElement of arr) {
         console.log(arrElement);
    }

}

let users = [
    {name: 'vasja', age: 32, status: false},
    {name: 'ket', age: 34, status: false},
    {name: 'pit', age: 38, status: true},
    {name: 'lesya', age: 19, status: true},
    {name: 'sveta', age: 20, status: true},
    {name: 'dima', age: 22, status: true},
    {name: 'kjlya', age: 44, status: false},
    {name: 'nika', age: 7, status: true},
    {name: 'inna', age: 35, status: true},
    {name: 'valya', age: 60, status: true}];

aray(users)

let test = [11, 222, 2313, 3421, 344];
aray(test);*/
/*5- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
/*function html(text) {
    document.write(`<p1> ${text} </p1>`)

}
html('Hello');
html('good');*/


/*6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
/*function ulli(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);


}

ulli('rep');*/
/*function ulli(text) {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`);


}

ulli('rep');*/



/*
7- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/

/*
function ulli(text, nambe,) {
    for (let i = 0; i < nambe; i++) {
        const textElement = nambe[i];
        document.write(`<ul>`)
        document.write(`<li>${text}</li>`);
        document.write(`</ul>`);
    }
}

ulli('happy', 8);
*/
/*function ulli(text, nambe,) {
    document.write(`<ul>`)
    for (let i = 0; i < nambe; i++) {
        document.write(`<li>${text}</li>`); }
        document.write(`</ul>`);

}

ulli('happy', 8);*/



/*8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
/*
function arr(...array) {
    return array
}
let cat = arr(33, 334, 5664, [44, 444, 55, 4, 4], true, 'cat');
console.log(cat);
document.write(cat);
*/


/*
let array = [33, 334, 5664, [44, 444, 55, 4, 4], true, 'cat'];

function problem(ar) {
    document.write(`<ul>`)
    for (const arElement of ar) {
        document.write(`<li>${arElement}</li>`)
    }
    document.write(`</ul>`)
    
}
problem(array)
*/


/*9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для' +
' кожного об'єкту окремий блок.*/
/*let users = [
    {name: 'vasja', age: 32, status: false},
    {name: 'ket', age: 34, status: false},
    {name: 'pit', age: 38, status: true},
    {name: 'lesya', age: 19, status: true},
    {name: 'sveta', age: 20, status: true},
    {name: 'dima', age: 22, status: true},
    {name: 'kjlya', age: 44, status: false},
    {name: 'nika', age: 7, status: true},
    {name: 'inna', age: 35, status: true},
    {name: 'valya', age: 60, status: true}];



    function mystery(arrrr) {
        for (const argument of arrrr) {
            document.write(`<div>${argument.name} - ${argument.age} - ${argument.status}</div>`);
        }

    }

mystery(users);*/
/*10- створити функцію яка повертає найменьше число з масиву*/
/*let naber = [4, 35, 67, 88, 33, 2];

function min(arr) {
     let nammin = arr[0]
    for (const namminElement of arr) {
        if (namminElement <nammin ) {
            nammin=namminElement
        }

    }
    return nammin
}

console.log(min(naber));*/



/*
11- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
*/
/*
let summa = [4, 3, 2];
function sum(arr) {
 let arrsemma = 0
    for (const arrElement of arr) {
        arrsemma+=arrElement
    }

    return arrsemma;
}

console.log(sum(summa));*/
