//푸쉬가 되는지
// let = 이미 사용하고 있을 때 에러 출력  const = 수정도 안되는 상수
// 함수선언문은 초기화때 모든 함수를 실행 시켜놓음. 따라서 위에 있는 함수도 사용가능
// 함수 표현식은 내가 아는 그 함수(선언된 뒤 사용가능)
// const age = prompt("나이를 입력하세요!");
// if(age > 19){
//     console.log('안뇽안뇽');
//     alert('당신은 ' + age + '살이네요?');
// } else if(age == 19) {
//     console.log('수능 화이팅!');
//     alert('당신은 ' + age + '살이네요?');
// } else {
//     console.log("바이바이");
//     alert('당신은 ' + age + '살이네요?');
// }

// let i = 0;
// while(i < 10) {
//     console.log(i+1);
//     i++;
//     if(i == 2) {
//         break;
//     }
// } 
// const apple = 100;
// const banana = 200;
// const kiwi = 300;
// const melon = 500;
// const watermelon = 500;

// let i = 1;
// while(i == 1) {
//     const fruit = prompt('사고싶은 과일을 알려주세요 !(싫어! 치면 종료)');
//     switch(fruit) {
//         case '사과':
//             console.log(apple);
//             break;
//         case '바나나':
//             console.log(banana);
//             break;      
//         case '키위':
//             console.log(kiwi);
//             break;
//         case '멜론':
//             console.log(melon);
//             break;
//         case '수박':
//             console.log(watermelon);
//             break;
//         case '싫어!':
//             i = 0;
//             break;
//         default:
//             console.log('그런 과일 없어요!');
//             break;
//     }
// }

// let name = 'jjuneya';
// console.log(name);
// function showError(name) {
//     alert('반가워요 ' + name + '님!');
// }

// showError('jjun');
// console.log(name);

// function add(num1, num2) {
//     return num1 + num2 + 3;
// }

// const result = add(4, 5);
// console.log(result);




// let add = function(num1, num2) {
//     return num1+num2;
// } 

// let result = add(5, 4);
// console.log(result);

// const superman ={
//     name:'clark',
//     age:30,
// }

// superman.hairColor = 'black';
// superman.hobby = 'football';

// delete superman.age;
// console.log(superman);

// function makeObject(name, age) {
//     return {
//         name,
//         age,
//         hobby 'football'
//     }
// }

// const Mike = makeObject('Mike', 30);
// console.log(Mike);

// function isAdult(user) {
//     if(!('age' in user) || user.age < 20) { //user에 age가 x or u20
//         return false;
//     }
//     return true;
// }

// const Jun = {
//     name : 'Mike',
//     age : 30
// }

// const Jane = {
//     name : "Jane",
// }

// console.log(isAdult(Jun));
// console.log(isAdult(Jane));

// const Mike = {
//     name : 'Mike',
//     age : 30
// };

// for(key in Mike) {
//     console.log(Mike[key]);
// }

// const sonbaejun = {
//     name : 'baejun',
//     age : 24,
//     fly()  {
//         console.log('배준짱짱');
//     }
// }

// console.log(sonbaejun.fly());

// const user = {
//     name : 'Mike',
//     sayHello : function() {
//         console.log('Hello, Im ' + this.name);
//         return ;
//     }
// }

// let word = ['a', 'b', 'c'];
// word.push('d');
// word.push('e');
// word.pop();
// word.unshift('f','u','c','k');
// word.shift();

// for(let index = 0; index<word.length; index++) {
//     console.log(word[index]);
// }

// let number = ['one', 'two', 'three', 'four'];
// number[1] = 'two2';
// number.push('five');

// number.pop();

// number.unshift('five', 'six', 'seven');
// number.shift();
// for(let index = 4; index<number.length; index++){
//     console.log(number[index]);
// }

// let과 const 위주로 써라

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function(){
//         console.log(this.name);
//     }
// }
// let user5 =  new User('Han', 40);
// user5.sayName();

// function Item(title, price) {
//     // this = {};
//     this.title = title;
//     this.price = price;
//     this.showPrice = function(){
//         console.log('price is ' + price + 'that');
//     }

//     //return this;
// }

// const item1 = new Item('doll', 3000);
// const item2 = new Item('dol', 4000);
// const item3 = new Item('do', 5000);


// item1.showPrice();

// Object.assign()
// Object.keys()
// Object.values()
// Object.entries()
// Object.fromEntries()

// const user = {
//     name : 'Mike',
//     age : 30,
//     gender : 'male',
// }

// console.log(Object.entries(user));

// function makeObject(key, val) {
//     return {
//         [key] : val
//     };
// }

// const obj = makeObject("준이", 33);
// console.log(obj);


//const user = {
//   name : 'Mike',
//    age : 30,
//}

//const showName = Symbol('show name');
//user[showName] = function() {
//    console.log(this.name);
//};

//user[showName] ();

//for (let key in user) {
//    console.log('His ' + key + ' is ' + user[key]);
//}

//let userRate = 30.1234;
//const uR = Number(userRate.toFixed(2));
//console.log(uR);
//console.log(Math.floor(Math.random()*100)+1);

// let desc = 'Hello World';
// console.log(desc.indexOf('World'));

// let arr = [1,2,3,4,5];
// let result = arr.slice(1,4);
// console.log(result);

// console.log(arr); 

// let userList = [
//     {name : "Mike" , age : 30},
//     {name : "Jane" , age : 27},
//     {name : "Tom" , age : 10},
// ];

// let newUserList = userList.map((user, index) => {
//     return Object.assign({}, user, {
//         istrue : 30,
//         isAdult: user.age > 19,
//     });
// });

// console.log(newUserList);

// let arr = [27,8,5,13];

// function fn(prev, cur) {
//     return prev + cur;
// }



// const result = arr.reduce(fn);
// console.log(result);

// let dateToday = "2022-07-13";
// let [year, month, day=12] = dateToday.split('-');

// console.log(year);
// console.log(month);
// console.log(day);

// let user = {name: 'Mike', age:30};
// let {name: baejun, age: old} = user;

// console.log(baejun);
// console.log(old);

// function User(name, age, ...skills) {
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
// }

// const user1 = new User('Jun', 24, 'html', 'css', 'js');
// const user2 = new User('Juju', 25, 'c', 'java', 'python');

// console.log(user1);
// console.log(user2);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// arr2.forEach(num => {
//     arr1.unshift(num);
// })

// arr1 = [...arr2];
// console.log(arr1);

// let one;
// one = 1;

// function addOne(num) {
//     console.log(one+num);
// }
// addOne(5);

// function fn(name) {
//     console.log(name);
// }
// // setTimeout(fn, 3000, 'Mike');

// const mike = {
//     name: "Mike"
// };

// function showThisName(){
//     console.log(this.name);
// }

// showThisName.call(mike);

// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// update.call(mike, 1999, 'singer');
// console.log(mike);

// const car = {
//     wheel:4,
//     drive(){
//         console.log("drive..");
//     },
// };

// const bmw = {
//     color:"red",
//     navigation:1,
// };

// const benz = {
//     color:"black",
// };

// const audi = {
//     color:"blue",
// };

// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;

// console.log(bmw.wheel); 

// const User = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.showName = function(){
//         console.log(this.name);
//     };
// };


// const mike = new User("Mike", 30);

// class User2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     showName() {
//         console.log(this.name);
//     }
// }
// const jun = new User2("jun", 24);
// jun.showName();
// console.log(jun.age);

// class Car {
//     constructor(color) {
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {
//         console.log("drive..");
//     }
//     stop() {
//         console.log("STOP!");
//     }
// }

// class Bmw extends Car {
//     park() {
//         console.log("PARK");
//     }
// }
// const z4 = new Bmw("blue");

// const pr = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         // resolve('OK');
//         reject(new Error("err...."));
//     }, 1000)
// })

// console.log('start');
// pr.then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// }).finally(() => {
//     console.log("끝");
// });

// const f1 = () => {
//     return new Promise((res, rej) => {
//        setTimeout(() => {
//          res("1번 주문 완료");
//     },1000);  
//   });
// };

// const f2 = (message) => {
//     console.log(message);
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("xxx");
//         },3000);
//     });
// };

// const f3 = (message) => {
//     console.log(message);
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("3번 주문 완료");
//         },2000);
//     });
// };

// console.log('시작');
// f1().then((res) => f2(res))
//     .then((res) => f3(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(() => {
//         console.log("끝");
//     });

//Promise.all
// Promise.all([f1(), f2(), f3()])
// .then((res) => {
//     console.log(res);
// });

function fetchItems() {
    return new Promise(function(resolve, reject) {
        var items = [1,2,3];
        resolve(items);
    });
};

async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems);
};

logItems();