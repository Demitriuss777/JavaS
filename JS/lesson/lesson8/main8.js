/*// 1  функція конструктор
/!* function user() {
     this.name = 'vesya';
     this.age= 31

 }

let user1 = new user();
console.log(user1)*!/
 // як зробити її правильною, розширюю
function user(name, age, skills, wife) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.wife = wife
    this.greting = function (msg) {
        return `${msg} my name is ${this.name}`
    };
    this.gree = (mssg) =>
            `${mssg} my name is ${this.name}`



}

let user1 = new user('vasya', 31);
console.log(user1);
let user2 = new user('kolya', 23);
console.log(user2)
let wife =new user('Dima', 33,['msg, js,frf,rgd,'],{name:'Inna', age: 33})
console.log(wife);
console.log(user1.greting('hi'));
console.log(user2.gree('ho=HO'));

let friend = {
    name: ' antin',
    age:'22'
}
console.log(user1.greting.call(friend, 'fff'));
console.log(user1.greting.apply(friend,['hirr', 'fdf']));
let gretingCopppy = user1.greting.bind(friend);  ///  підміняє на френда і створює нову копію з котрой можно
// працювати далі
console.log(gretingCopppy('ffffsss'));

Array.prototype.fignya = function () {
    console.log(this);

}
let namber = [1, 2, 4, 5];
namber.fignya()*/
// 2 все те саме але через конструктор  class
 class usersPuser {
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
     gree(){
         console.log(`hello ma name is ${this.name}`);

     }
 }
let usersPuserd = new usersPuser('Dims',33 )
console.log(usersPuserd)

// extends наслідування або копіювання стилю
class SuperUser extends usersPuser {

    constructor(name, age) {
        super(name, age);
    }
}

let SuerUser = new SuperUser('VVasaya', 654);
console.log(SuerUser);

function Admin(login, password) {
    this.login = login;
    this.password = password;

}

function SuperAdmin(login, password, authority) {
    Admin.apply(this, arguments);
    this.authority = authority;

}

let por = new SuperAdmin('fddfd', 34343, '4ffd');
console.log(por);
