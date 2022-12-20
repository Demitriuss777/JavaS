
// //1   беру іформацію з іншого сайту і вивиду її
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(info => info.json())
//     .then(date => console.log(date));

/*
//2  тупер буду ітерувати та добовдяти в боді
let target= document.querySelector('.target')
fetch('https://jsonplaceholder.typicode.com/users')
.then(info=>info.json())
    .then(users=>{
        for (const item of users) {
           let li = document.createElement('li');
            li.innerText=item.id+" "+ item.name+ '/  /'+item.email
            target.append(li)
        }
        }
)
console.log(target)
*/


// 3


    fetch('https://reqres.in/api/users?page=2')
    .then(info => info.json())
        .then(value => {
        let{data}=value

    console.log(data);
    for (const item of data) {
        let divv = document.createElement('div');
        divv.classList.add('usersBox');
        let h2 = document.createElement('h2');
        let a = document.createElement('a');
        a.innerText = item.id+' '+item.first_name+' '+item.last_name
        h2.appendChild(a);
        a.href = 'detalis.html?id=' + item.id;

        let imj= document.createElement('img')
        imj.src=item.avatar
        divv.append(h2, imj);
        document.body.append(divv)

        }
    })



