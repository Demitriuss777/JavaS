/*
// 1 створення прароля при натисканні кнопки його видно при відпуски ні
let input = document.querySelector("input");
let btn = document.querySelector('button');

btn.onmousedown=function () {
    input.type='text'

}
btn.onmouseup=function () {
    input.type='password'

}*/

//2 p,зберігаємо гнформацію коли людина заходила в браузер
let ul = document.createElement('ul');  // создаємщ ліжку , будемо додавати наші сесіїї
document.body.appendChild(ul);
let visit = localStorage.getItem('visit')
if (!visit) {
    visit = []
    localStorage.setItem('visit', JSON.stringify(visit))
      }
    // або можна записати по другому  let visit = localStorage.getItem('visit')|| JSON.stringify([])
    // далі візіт перетворюємщ назад в обєкт
    let arrayofvisits = JSON.parse(localStorage.getItem('visit'))
        arrayofvisits.push(new Date())//  через date котра буде показувати часові вирази
    // тепер знову перетворюємо га стрінгу і добовляєм в local
localStorage.setItem('visit', JSON.stringify(arrayofvisits))

// і тільки тепер можимо ітерувати
for (const visitItem of arrayofvisits) {
    let li = document.createElement('li');
    li.innerText=visitItem
    ul.appendChild(li)

}



