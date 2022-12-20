/*

зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
    вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
(замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
(всі 15 полів) отримана через додатковий запит
(https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)*/

fetch(' http://jsonplaceholder.typicode.com/users')
  .then(value =>value.json() )
.then(value => {
        console.log(value)
    for (const item of value) {
      let div =document.createElement('div')
      let h2 = document.createElement('h2')
        let a = document.createElement('a')
        a.innerText=`${item.id} ${item.name}`
        h2.appendChild(a);
      a.href= 'user-details.html?id='+ item.id
        div.append(h2);
      document.body.appendChild(div)


    }

    }
)