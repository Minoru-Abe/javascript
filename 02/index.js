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


const myProfile = {
    age: 42, 
    name: "BEBE"
};

const {age=22, name="Minoru"} = myProfile;
console.log(age);
console.log(name);