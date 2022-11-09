// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 3;
// if(x !== 0){
//     console.log('вірно');
// }
// else{
//     console.log('невірно');
// }


// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
/*let time =prompt(`0-59 хв`);
if (time <15){
    document.write('перша частина');

} else if (time >=15 && time <30) {
    document.write( 'друга частина')
} else if (time >=30 && time <45) {
    document.write('трея частина');
}
else if ( time >= 45 && time <=60) {
    document.write( 'четверта частина')

}
else if (time > 60) {
    document.write('введіть число менше 60')
} else {
    document.write('введіть число')
}*/


/*
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt(' month');
if (day <= 9){
    document.write('one');
}
else if (day >= 10 && day <= 19) {
    document.write('two');
}
else if (day >=20 && day <= 31) {
    document.write('tree');


}else{
    document.write('????')
}


*/
/*
let day = 22;
day > 0 && day <= 9 ? console.log('first') : day > 10 && day <= 20 ? console.log('second') :
    day > 21 && day <= 31 ? console.log('tree') : console.log('false');*/


/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/
/*
let week = prompt('week');
switch (week){
    case'1':
        console.log('monday')
    break;
    case'2':
    console.log('tuesday');
    break;
    case'3':
    console.log('wendnesday');
    break;
    case '4':
    console.log(thursday);
    break;
    case '5':
        console.log('friday');
        break;
    case'6':
        console.log('saturday');
        break;
    case'7':
        console.log('sunday');
    default:
        console.log('????');


}
*/

/*
- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/
/*
let a = +prompt('one')
let b = +prompt('two');
if (a<b){
    console.log(b);
}
else if (a > b) {
    console.log(a);
}
else if (a === b) {
    console.log('equal');
} else {
    console.log('error')
}
*/
/*

- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
 Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної
    х являється falsy (хибноподыбне, тобто кастується до false)*/
let x = +prompt('namber') || 'default';
console.log(x);