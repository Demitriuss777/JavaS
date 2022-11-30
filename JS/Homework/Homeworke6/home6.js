/*1- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
/*let string = ['hello world', 'lorem ipsum', 'javascript is cool'];*/
/*for (const string1 of string) {
    let ligh= string1.length
    console.log(ligh);
}*/
/*
string.forEach((strrr) =>
    console.log(strrr.length));
*/


/*2- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/

/*let string =['hello world','lorem ipsum', 'javascript is cool'];
for (const string1 of string) {

    console.log(string1.toUpperCase());
}*/

/*3- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
/*
let string = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (const string1 of string) {
    console.log(string1.toLowerCase());

}

string.forEach((str1) => {
    console.log(str1.toLowerCase());
});
*/






/*4- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/

/*
let str = ' dirty string   '
console.log(str.length);
*/

/*let nostr = (str.trim());
console.log(nostr.length);*/



/*
5- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/
/*
let str = 'Ревуть воли як ясла повні'
console.log(str);
let arr = str.split( ' ');
console.log(arr);*/




/*6- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на' +
' стрінгові.*/

/*let namder = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];*/
/*let mmap = namder.map(value => value.toString());*/
/*let mmap = namder.map(value => value+ '');*/
/*let mmap = namder.map(value => String(value));


console.log(mmap)*/

/*7- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/
/*let nums = [11, 21, 3];
let sortNums = nums.sort((a, b) => {
    return a -b
});
console.log(sortNums);
let sortNums1 = nums.sort(function (a,b)
{
    return b - a;

})
console.log(sortNums1);*/

/*let nums = [11, 21, 3];
let sortNums =((direction, ar) => {
    if (direction === 'ascending') {
        ar.sort((a, b) => a - b);
    }
    else if (direction === 'descending') {
        ar.sort((a, b) => b - a);
    }
    return ar
});
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));*/


/*8- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
/*
coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(coursesAndDurationArray)
*/
/*
let ff=coursesAndDurationArray.filter((x) => {
    return x.monthDuration > 5;
});
console.log(ff);
*/
/*let fun = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(fun)*/
/*
10 описати колоду карт // +
- знайти піковий туз //+
- всі шістки //+
- всі червоні карти//+
- всі буби// +
- всі трефи від 9 та більше
*/
/*
let card = [
    {value: 'ace', cardsuit: 'heart', color: 'red'},
    {value: 'king', cardsuit: 'heart', color: 'red'},
    {value: 'queen', cardsuit: 'heart', color: 'red'},
    {value: 'jack', cardsuit: 'heart', color: 'red'},
    {value: 'ten', cardsuit: 'heart', color: 'red'},
    {value: 'nine', cardsuit: 'heart', color: 'red'},
    {value: 'eight', cardsuit: 'heart', color: 'red'},
    {value: 'seven', cardsuit: 'heart', color: 'red'},
    {value: 'six', cardsuit: 'heart', color: 'red'},
    {value: 'ace', cardsuit: 'diamond', color: 'red'},
    {value: 'king', cardsuit: 'diamond', color: 'red'},
    {value: 'queen', cardsuit: 'diamond', color: 'red'},
    {value: 'jack', cardsuit: 'diamond', color: 'red'},
    {value: 'ten', cardsuit: 'diamond', color: 'red'},
    {value: 'nine', cardsuit: 'diamond', color: 'red'},
    {value: 'eight', cardsuit: 'diamond', color: 'red'},
    {value: 'seven', cardsuit: 'diamond', color: 'red'},
    {value: 'six', cardsuit: 'diamond', color: 'red'},
    {value: 'ace', cardsuit: 'spade', color: 'black'},
    {value: 'king', cardsuit: 'spade', color: 'black'},
    {value: 'queen', cardsuit: 'spade', color: 'black'},
    {value: 'jack', cardsuit: 'spade', color: 'black'},
    {value: 'ten', cardsuit: 'spade', color:  'black'},
    {value: 'nine', cardsuit: 'spade', color: 'black'},
    {value: 'eight', cardsuit: 'spade', color: 'black'},
    {value: 'seven', cardsuit: 'spade', color: 'black'},
    {value: 'six', cardsuit: 'spade', color: 'black'},
    {value: 'ace', cardsuit: 'clubs', color: 'black'},
    {value: 'king', cardsuit: 'clubs', color: 'black'},
    {value: 'queen', cardsuit: 'clubs', color: 'black'},
    {value: 'jack', cardsuit: 'clubs', color: 'black'},
    {value: 'ten', cardsuit: 'clubs', color: 'black'},
    {value: 'nine', cardsuit: 'clubs', color: 'black'},
    {value: 'eight', cardsuit: 'clubs', color: 'black'},
    {value: 'seven', cardsuit: 'clubs', color: 'black'},
    {value: 'six', cardsuit: 'clubs', color: 'black'},
    {value: 'joker', color: 'red'},
    {value: 'joker', color: 'black'}

];
let ace = card.filter((x) => {
    return x.value === 'ace' && x.cardsuit === 'clubs';
});
console.log(ace);
let six = card.filter((x) => {
    return x.value === 'six';
});
console.log(six);
let red = card.filter(function (x) {
    return x.color === 'red';
});
console.log(red);
let diamond = card.filter((x) => {
    return x.cardsuit === 'diamond'
});
console.log(diamond);
*/


let suit = [
    {cardsuit: 'spade', color: 'black'},
    {cardsuit: 'clubs', color: 'black'},
    {cardsuit: 'diamond', color: 'red'},
    {cardsuit: 'heart', color: 'red'}
];

let cardname = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];

let card =[]
for (const suits of suit) {
    for (const name of cardname) {
        let dtsk ={
            cardsuit: suits.cardsuit,
            value: name,
            color:suits.color

            }
        card.push(dtsk);


    }
}
console.log(card);


/*Додатково по reduce
Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}*/
