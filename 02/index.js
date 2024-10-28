/**const, let等の変数宣言 */
// var var1 = "var variables";
// console.log("aaa");
// console.log(var1);


// // var変数は上書き可能
// var1 = "var variables2"
// console.log(var1);

// // var変数は再宣言可能
// var var1 = "var variables3";
// console.log(var1);


// let let1 = "let変数";
// console.log(let1);

// // letは上書き可能
// let1 = "let変数を上書き";
// console.log(let1);

// // letは上書き不可能
// let let1 = "let変数再宣言";

// const const1 = "const変数";
// console.log(const1);

// const変数は上書き、再宣言不可能。
// const1 = "const上書き";



// // constで定義したオブジェクトはプロパティの変更が可能

// const val4 = {
//     name: "じゃけぇ",
//     age: 31
// };
// console.log(val4);

// // constで定義したオブジェクトはプロパティの変更が可能。
// val4.name = "jake";
// val4.address = "Hiroshima";

// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// // テンプレート文字列
// const name = "jake";
// const age = 31;

// // 私の名前はじゃけぇです。年齢は31歳です。

// // 従来の方法
// const message1 = "My name is " + name + ". I am " + age + " years old.";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `My name is ${name}. I am ${age} years old.`
// console.log(message2);


// アロー関数

// // 従来の関数は
// function func1(str) {
//     return str;
// };

// console.log(func1("Func1!!"));


// const func2 = function (str) {
//     return str;
// };

// console.log(func2("Func2!!!!"));


// // アロー関数の場合
// const func3 = (str) => {return str};
// console.log(func3("Func3!!!!!!"));

// const func3 = str => {return str};
// console.log(func3("Func3!!!!!"));

// const func3 = str => str;
// console.log(func3("STR!!"));


// // 練習問題。足し算。

// const add = (int1, int2) => {
//     return (int1 + int2);
// };

// console.log(add(1,3));


// const create_object = (num1, num2) => ({
//     hoge: num1,
//     huga: num2
// });
// console.log(create_object(3,4));


// // 分割代入じゃないとき
// const myprofile = {
//     name: "Minoru",
//     age: 41
// };
// console.log(myprofile);

// const message2 = `My name is ${myprofile.name}. I am ${myprofile.age} years old`;
// console.log(message2);

// // 分割代入
// const {name, age} = myprofile;
// const message3 = `My name is ${name}. I am ${age} years old.`;
// console.log(message3);

// // 配列の分割代入

// const array = ["Minoru", 42];
// const message1 = `My name is ${array[0]}. I am ${array[1]} years old.`;
// console.log(message1);

// const [name, age] = array;
// const message2 = `My name is ${name}. I am ${age} years old.`;
// console.log(message2);

// // デフォルト値（引数、分割代入）
// const sayhello = (name = "Guest") => console.log(`Hello, ${name}!!` );
// sayhello("Minoru");
// sayhello();


// const myProfile = {
//     age: 42, 
//     name: "BEBE"
// };

// const {age=22, name="Minoru"} = myProfile;
// console.log(age);
// console.log(name);



// const profile = {
//     name: "Minoru",
//     age: 42
// };

// console.log(profile);


// const {name, age} = profile;
// console.log(`My name is ${name}. I am ${age} years old.`);

// const name="Jake";
// const age = 42;

// const myProfile = {
//     name,
//     age
// };
// console.log(myProfile);

// スプレッド構文
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumfunc = (num1, num2) => console.log(num1 + num2);
// sumfunc(1,2);
// sumfunc(...arr1);


// // まとめる使い方
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);


// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// arr4[0] = 99;
// console.log(arr4);
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr1 = [10,20];
// const arr2 = [30,40];
// console.log(arr1);
// console.log(arr2);

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);


// const [num1, num2, num3, num4] = [...arr1, ...arr2];
// console.log(num1);


// const arr1 = ["Minoru", "Tatsumi", "Reiri"];
// for (let i=0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }
// arr1.map( (name) => {
//     console.log(name);
// });

// arr1.map( (name, index) => {
//     console.log(`${index +1} name is ${name}`);
// });

// const arr2 = [1,2,3,4,5]
// const arr3 = arr2.filter( (num) => {
//     return num % 2 == 1;
// });

// console.log(arr3);

// const arr3 = [1,2,3,4,5];
// const arr4 = arr3.map( (num) => {
//     return num*2;
// });

// console.log(arr4);

// const arr5 = ["Minoru", "Tatsumi", "Reiri"];
// const arr6 = arr5.map (name => `${name} san`);
// console.log(arr6);

// const arr7 = [1,2,3,4,5];
// const arr8 = arr7.map(num => num*2);
// console.log(arr8);

// const arr9 = arr7.filter(num => (num%2==1));
// console.log(arr9);

// const arr10 = ["Minoru", "Tatsumi", "Reiri"];

// const arr11 = arr10.map( name => {
//     if (name=="Minoru"){
//         return name;
//     } else {
//         return `${name} san`;
//     };
// });

// console.log(arr11);

// 三項演算子

// const num = "1300";
// console.log(num.toLocaleString());

// const message = typeof num === "number" ? num.toLocaleString() : "Please input number" ;
// console.log(message);

// const checkSum = (num1, num2) => {
//     return num1+num2 > 100 ? "許容範囲外です" : "許容範囲内です" ;
// }

// console.log(checkSum(51,50));





// 論理演算子の本当の意味を知ろう
// truthy, falsyについて
// "ABC" 0 10 undefined null false NaN "" [] {}

// const val = "";

// if (val) {
//     console.log(`${val} is truthy.`);
// } else {
//     console.log(`${val} is falsy.`);
// };

// const val2 = ["ABC", 0, -1, 10, undefined, null, false, NaN, "", [], {}];
// console.log(val2);

// val2.map( (value) => {
//     if (value) {
//         console.log(`${value} is truthy.`);
//     } else {
//         console.log(`${value} is falsy.`);
//     }
// });

// val2.map ( (value) => {
//     (value) ? console.log(`${value} is truthy.`) : console.log(`${value} is falsy.`);
// });

// val2.map ( value => (value ? console.log(`${value} is truthy.`) : console.log(`${value} is falsy.`)));

// const val3 = val2.filter( value => (value));
// console.log(val2);
// console.log(val3);

// || は左側がtruthyの時その時点で返却する
const num = "ABC";
const fee = num || "金額は未設定です";
console.log(fee);

const num1 = 5;
const num2 = 10;
const num3 = 4;
const num4 = 99;

const result = num1 || num2 || num3 || num4 || "全部だめ";
console.log(result);

// &&は左側がfalsyの時、その時点で返却する
const result2 = num1 && num2 && num3 && num4 &&  "何か設定されました";
console.log(result2);
