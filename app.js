//   1. Question

// function parentFunction(num1) {
//   return function (num2) {
//     console.log(num1 + num2);
//   };
// }
// let addition = parentFunction(10);
// addition(5);

//   2. Question

// function recursiveFunc(array, num) {
//   if (array.includes(num)) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return recursiveFunc(array, num);
//   }
// }
// recursiveFunc([1, 2, 3, 4, 5], 3);

//

//  3. Question

// function addText(text) {
//   let newPara = document.createElement("p");
//   newPara.innerText = text;
//   document.body.appendChild(newPara);
// }
// addText("this is new Para");

//

//  4. Question

// function addList(text) {
//   let ul = document.querySelector("ul");
//   let li = document.createElement("li");
//   li.textContent = text;
//   ul.appendChild(li);
// }
// addList("This is list 1");

//

//  5. Question

// let para = document.querySelector("p");
// function changeColor(element, color) {
//   para.style.backgroundColor = color;
// }
// changeColor(para, "red");

//

//  6. Question

// function localFunction(key, object) {
//   let stringify = JSON.stringify(object);
//   localStorage.setItem(key, stringify);
// }
// localFunction("student", { name: "Awais", id: 1, class: "javascript" });

//

//  7. Question

// function localData(name) {
//   let prevValue = localStorage.getItem(name);
//   let data = prevValue ? JSON.parse(prevValue) : [];
//   console.log(data);
// }
// localData("student");

//

//  8. Question

function localData(obj) {
  for (let key in obj) {
    let toString = JSON.stringify(obj);
    // data.push(toString);
    localStorage.setItem(key, obj[key]);
  }
  const newObject = {};
  for (let i = 0; i < localStorage.length; i++) {
    const keys = localStorage.key(i);
    const objValue = localStorage.getItem(keys);
    newObject[keys] = JSON.parse(objValue);
  }
  return newObject;
}
localData({ name: "Ali", id: 9 });
