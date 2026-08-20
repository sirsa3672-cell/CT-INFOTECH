// console.log("Hello JavaScript");
// console.log("Welcome to CT INFOTECH");
// let studentName = "Rahul";
// let course = "Full Stack";
// let fees = 5000;

// console.log(studentName);
// console.log(course);
// console.log(fees);
document.querySelector("h1").innerText = "CT INFOTECH COMPUTER CENTRE";

document.querySelector("h1").style.color = "red";
document.querySelector(".HOME").innerText = "Learn Today, Lead Tomorrow";
document.querySelector(".HOME").style.color = "darkblue";
document.querySelector(".index").style.color = "RED";
document.querySelector(".index").style.fontSize = "35px";
document.querySelector(".index").style.textAlign = "center";
document.querySelector("#changeBtn").addEventListener("click", function () {

    document.querySelector("h1").innerText = "CT INFOTECH - Learn Today, Lead Tomorrow";

document.querySelector("h1").style.color = "blue";

    document.querySelector("h1").style.backgroundColor = "yellow";
// document.querySelector(".index").style.whiteSpace = "nowrap";

// document.querySelector(".index").style.position = "relative";
// document.querySelector(".index").style.top = "-20px";

});