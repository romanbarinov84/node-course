
// console.log("Hello World");

// console.log("Меня зовут Роман");
// console.log("я изучаю Node.js");
// console.log("Моя цель — стать backend/fullstack разработчиком");

// //Немного от себятины

// let out = "";
// for (let i = 0; i < 10; i++)
// out += i + "_";
// console.log(out);


let out = "";

for (let i = 10; i > 0 ; i-- ){
    out += i + " "
}
console.log(out);


const arr = ["JavaScript","Node.js","React","Next.js","PostgreSQL"];
let exit = "";

for (let i = 0; i < arr.length; i++){
   exit +=(i + 1) + " " + "-" + " " +  arr[i] + " "
   console.log((i + 1) + " " + "-" + " " +  arr[i] + " ");
   
}

console.log(exit);
