
/*
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
    ];*/
  /*  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
   */
    /*for (const user of users) {
        document.write(`
<div class="bont">
     <h2>${user.name},${user.age}</h2>
<h3 class="fatr" >${user.status}</h3>
 </div>`
        );
    }*/

 /*   for (let i = 0; i < 10; i++) {
      const user = users[i];
      document.write(`
<div>довідьний текст</div>`)

    }*/
/*<!--
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
-->*/

/*
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        document.write(`
<div>
<h1>${i}</h1>
<h2> ${user.name} -${user.age} </h2>
<h3>${user.status}</h3>
</div>
`);
    }
*/

/*for (let i = 0; i < 10; i++) {
    document.write(`
<div>${i} text </div>`);

}*/
/*
-/!* За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 */

/*  let users = [
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
      {name: 'max', age: 31, status: true},
      {name: 'oleg', age: 28, status: false},
      {name: 'andrey', age: 29, status: true},
      {name: 'masha', age: 30, status: true},
      {name: 'olya', age: 31, status: false},
      {name: 'max', age: 31, status: true},
      {name: 'andrey', age: 29, status: true},
      {name: 'masha', age: 30, status: true},
      {name: 'olya', age: 31, status: false},
      {name: 'max', age: 31, status: true}
  ];*/
  /*
 let i=0
  while (i<users.length){
     document.write(`<h2>${users[i].name} ${users[i].age} </h2>
     `)
      i++
  }*/
/*
let i=0
while (i<20){
    document.write(`<h1> Text </h1>`)
i++
}
*/

/*
  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*//*
let i =0
  while (i<users.length){
    document.write(`
<h3>${i+=1}
${users[i].name} - ${users[i].age } </h3>
<h4>${users[i].status}</h4>
`)
  }*/
/*let i= 0
while (i<20){
    document.write(`
<h1> ${i}   text </h1>
`)
    i++
}*/
  /*- Використовуючи данні з масиву, за допомоги document.write та циклу
  побудувати структуру по шаблону
  Масив:
*//*<ul>
      <li>ITEM OF ARRAY</li>
      &lt;!&ndash;
      і тд інші об'єкти масиву
      ...
      ...
      ...
      &ndash;&gt;
  </ul>
*/

/*
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const listOfItem of listOfItems) {
    document.write(`<ul>`)
    document.write(`<li>${listOfItem} </li> `)
    document.write(`</ul>`)
}
*/



/*
  Використовуючи данні з масиву, за допомоги document.write та циклу
  побудувати структуру по шаблону  Зробити адекватну стилізацію
  Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
*/

  /*let products = [
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
    <h2> назва-${product.title}</h2>
    <img src="${product.image}" alt="product price">
    <h2> цінна- ${product.price}</h2>
    
    
</div>
`)}*/
 /* є масив
  за допомоги циклу вивести:
      - користувачів зі статусом true
  - користувачів зі статусом false
  - користувачів які старші за 30 років
*/
  /*let users = [
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


  for (const user of users) {

    if (user.status){
      document.write(`<div>  ${user.name}-${user.age}</div>`)
    }
    else if (!user.status){
      document.write(`<div class="fatr">${user.name}- ${user.age} </div>`)
    }
    else (user.age>30){
      document.write(`<div class="bont"> ${user.name}-${user.age}</div>`)
    }
  }
*/
