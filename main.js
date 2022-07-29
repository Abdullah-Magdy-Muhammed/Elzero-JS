// window.onload = function() {
//     document.querySelector("h1").style.color = "blue"
// };
// // window.alert("ok");

// document.write("<h1>OK</h1>");

// console.log("hello %cform %cjs","color: blue;","color:yellow;");
// console.log(hello);
// hello.innerHTML = "avvvvv";

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d * +e);
// console.log()

/* let name = "abd ullah";
 console.log(name.trim()); */

// let product = ["keyboard","mouse","pen","pad","monitor","iphone"];
// let colors = ["red","green","blue"];
// let showcount = 5;

// document.write(`<h1>show ${showcount} products</h1>`)

// for(i=0;i<showcount; i++) {
//     document.write(`<div>`)
//     document.write(`<h3>${i+1} ${product[i]}</h3>`)
//     for(j=0;j<colors.length; j++) {
//         // document.write(`<h4>${colors[j]}</h4>`)
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`)
//     document.write(`</div>`)
// }



// let myAdmin =["Ahmed","Osama","Sayed","stop","Samara"];
// let myEmpoyes=["Amged","Samah","Ameer","Omar","Othman","Amany","Samia"];

// document.write(`<div> we hava ${myAdmin.length}admin</div>`);
// document.write(`<hr>`);
// for(let i=0;i<myAdmin.length;i++){   
//     if(myAdmin[i] === "stop")break;
//     else{
//         document.write(`<div>`);
//         document.write(`<p> the admin For Team ${i+1} Is ${myAdmin[i]}</p>`);
//         document.write(`<h1>Team Members:</h1>`);
//         let t=1;
//         for(let j=0;j< myEmpoyes.length;j++){
            
//         if(myAdmin[i][0]===myEmpoyes[j][0]){  
//           document.write(`<p>-${t} ${myEmpoyes[j]} </P>`);
//             t++;
// }
//         }
//         document.write(`</div>`);
        
// }
//     document.write(`<hr>`);

// // }

// function create(a,b,c){
//   info = [a,b,c];
//   for(i=0;i<3;i++){
//     if (typeof info[i]==="string"){
//       first = info[i];
//     }else if(typeof info[i]==="number"){
//       second = info[i];
//     }else if(typeof info[i]==="boolean"){
//       third = info[i];
//     }else{"not available"}
//   }

// }
    
// create(21,true,"abdo");
// document.write(` Hello ${first}, Your Age Is ${second}, You Are ${third} To Hire`);

// let names =  (...names)=>names.join("][");


// console.log(names("abdo","mido","aloo"));

// let mystring = "1,2,3,EE,L,z,e,r,o,_,w,e,b,S,c,h,o,o,l,2,0,Z"

// let solution = mystring
//     .split("")
//     .filter(function (e) {
//       return isNaN(parseInt(e));
//     })
//     .filter(function (e) {
//       return e !== ",";
//     })
//     .slice(1, -1)
//     .map(function (e) {
//       return e === "_" ? " " : e;
//     })
//     .reduce(function (a, e) {
//       return `${a}${e}`;
//     }); 

// console.log(solution)

// let userInput = document.querySelector("[name='username']")
// let ageInput = document.querySelector("[name='age']")

// document.forms[0].onsubmit = function(event) {
//   let uservalid = false;
//   let agevalid = false;

//   if(userInput.value !== 0 && userInput.value.length<=10) {
//     uservalid = true;
//   }
//   if(ageInput.value !== ""){
//     agevalid = true;
//   }

//   if(uservalid === false || agevalid === false) {
//     event.preventDefault();
//   }
// }

// let two = document.querySelector(".two");

// window.onload = function(){
//   two.focus();
// }
document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;";

// Header Line 5 To 42

let header = document.createElement("header")
header.className = "website-head"
header.style.cssText = "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;"

let logoDiv = document.createElement("div")
logoDiv.style.cssText = "font-weight: bold; color: # 23a96e; font-size: 22px"
let logoText = document.createTextNode("Elzero")

let ul = document.createElement("ul")
ul.className = "menu"
ul.style.cssText = "padding: 0px; margin: 0px; display: flex; list-style: none; color: rgb(136, 136, 136)"

let li1 = document.createElement("li")
li1.style.cssText = "padding-right: 20px"
let li1Text = document.createTextNode("Home")
let li2 = document.createElement("li")
li2.style.cssText = "padding-right: 20px"
let li2Text = document.createTextNode("About")
let li3 = document.createElement("li")
li3.style.cssText = "padding-right: 20px"
let li3Text = document.createTextNode("Service")
let li4 = document.createElement("li")
li4.style.cssText = "padding-right: 5px"
let li4Text = document.createTextNode("Contact")

li1.appendChild(li1Text)
li2.appendChild(li2Text)
li3.appendChild(li3Text)
li4.appendChild(li4Text)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)

logoDiv.appendChild(logoText)

header.appendChild(logoDiv)
header.appendChild(ul)

// Content Div Lien 46 To 64

let contentDiv = document.createElement("div")
contentDiv.style.cssText = "background-color: # ececec; display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;"
for (let i = 1; i <= 15; i++) {
    let productDiv = document.createElement("div")
    productDiv.style.cssText = "padding: 20px; background-color: # ffffff; border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;"
    
    let tempSpan = document.createElement("span")
    tempSpan.style.cssText = "font-size: 40px; color: black; font-weight: normal; display; block; margin-bottom: 10px; margin-top: 10px"
    let tempText2 = document.createTextNode(`${i}`)
    tempSpan.appendChild(tempText2)

    let tempP2 = document.createElement("p")
    let tempText1 = document.createTextNode(`product`)
    tempP2.appendChild(tempText1)

    productDiv.appendChild(tempSpan)
    productDiv.appendChild(tempP2)
    contentDiv.appendChild(productDiv)
}

// Footer Line 68 To 73

let footer = document.createElement("footer")
footer.style.cssText = "background-color: #23a96e; font-size: 26px; text-align: center; padding: 5px; color: white;"
let footerP = document.createElement("p")
let footerPText = document.createTextNode("Copyright 2022")
footerP.appendChild(footerPText)
footer.appendChild(footerP)

document.body.appendChild(header)
document.body.appendChild(contentDiv)
document.body.appendChild(footer)