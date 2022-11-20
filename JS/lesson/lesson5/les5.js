/*
function pro(shirt,long) {
    let resultat = (shirt+long)*2
    console.log(resultat);

}

pro(5, 5);
pro(123, 333);

function lep(a, b, c) {
    return (a+b+c)*2
}

let x= lep(10, 2, 3,);
console.log(x)
*/

// function cul(a, b, action) {
//     if (action ==='+'){
//         return a + b;
//     }
//      else if (action === '-') {
//         return a - b;
//     }
// }
//
// let date = cul(10,20,'-');
// console.log(date);
/*

/!*
function xxx(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);

    }
}

xxx([10, 4, 2]);*!/
 /!*function calc() {
     if (arguments.length === 2) {
         return arguments[0] + arguments[1];
     }
     else if (arguments.length === 3) {
         return arguments[0] - arguments[1] - arguments[2];
     }
return 0
 }


console.log(calc(10, 20));
console.log(calc(10, 22, 88));*!/


function asd(y, ...xxx) {
    return xxx;
}
let por = asd(3, 33, 33, 444, 333, {}, [22, 222, 33], 'dsadd');
document.write(por);
console.log(por);*/

/*
function html(tag,text) {
    document.write(`<${tag}>${text}</${tag}>`);
}

html('h2', 'Hekko');
html('h1', 'Yekko');
*/

let user ={
    imya: 'vasya',
    greeting: function () {
        console.log(`my name is ${this.imya}`);
        console.log(this);

    },
    wife:{
        imya: 'anya',
      hi: function () { return `my name is ${this.imya}`}
    }


}
user.greeting()
console.log(user.wife.hi());
