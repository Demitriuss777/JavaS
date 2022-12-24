/*
На странице user-details.html:
4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули //
5 Додати кнопку "post of current user", при кліку на яку, з'являються title
всіх постів поточного юзера
(для получения постов используйте
эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

    6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід
     на сторінку post-details.html, котра має детальну інфу про поточний пост.

    На странице post-details.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

Стилизація проєкта -
index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
    user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
    блоки з короткою іфною про post - в ряд по 5 .
    post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
    Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
*/
const url =new  URL(location.href)
console
/*console.log(url);*/
const Id = url.searchParams.get('id')/*
console.log(id)*/
fetch('https://jsonplaceholder.typicode.com/users/'+Id)
.then(value => value.json())
.then(info =>{
    console.log(info)
    for (const user in info) {
        const divUser = document.createElement('div')
        if (typeof info[user] !== 'object') {
            divUser.innerText = `${user} ${info[user]}`;
        } else {
            divUser.innerText= `${user} :`
            for (const Key in info[user]) {
                const divUserIn = document.createElement('div');
                if (typeof info[user][Key] !== 'object' ){
                    divUserIn.innerText=`${Key} ${info[user][Key]} `
                }
                else {
                    divUserIn.innerText=`${Key} :`
                    for (const InKey in info[user][Key]) {
                        const divUserInIn=document.createElement('div')
                        if (typeof info[user][Key][InKey] !== 'object'){
                            divUserInIn.innerText=`${InKey} - ${info[user][Key][InKey]}`
                        }
                        else {
                            divUserInIn.innerText=`${InKey} :`
                        }
                        divUserIn.appendChild(divUserInIn)
                    }

                }
                divUser.appendChild(divUserIn)
            }

        }
        document.body.appendChild(divUser)

    }

})

const btn = document.createElement('button');
btn.innerText='post of current user'
document.body.appendChild(btn)



btn.onclick=function () {


    fetch(`https://jsonplaceholder.typicode.com/users/${Id}/posts`)
        .then(value => value.json())
        .then(value => {
            console.log(value)
            for (const post of value) {
                const title = document.createElement('div')
                const ult = document.createElement('ul')
                const ilt = document.createElement('il')
                ilt.innerText = post.title
                ult.appendChild(ilt);
                const a = document.createElement('a');
                a.innerText='more details'
                a.href='post-details.html'

                title.append(ult,a);

                document.body.appendChild(title)

            }


        })
}