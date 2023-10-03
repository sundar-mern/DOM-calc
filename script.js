let title = document.createElement("h1")
title.innerHTML = "Calculator"
title.setAttribute("id", "title")
document.body.appendChild(title)

let description = document.createElement("p")
description.innerHTML = "Calculator created using DOM."
description.setAttribute("id", "description")
document.body.appendChild(description)

let calculator_container = document.createElement("div")
calculator_container.setAttribute("id", "calculator_container")
document.body.appendChild(calculator_container)

let calculator = document.createElement("div")
calculator.setAttribute("id", "calculator")
calculator_container.appendChild(calculator)

let result = document.createElement("input")
result.value = ""
result.placeholder = "0"
result.setAttribute("id", "result")
calculator.appendChild(result)

let button_wrapper = document.createElement("div")
button_wrapper.setAttribute("id", "button_wrapper")
calculator.appendChild(button_wrapper)

let btnArr = ["c","←",".","*",7,8,9,"/",4,5,6,"-",1,2,3,"+",0,"00","="]

for(let i=0; i<btnArr.length; i++)
{
    let btn = document.createElement("button")
    btn.setAttribute("id", btnArr[i])
    button_wrapper.appendChild(btn)
    btn.innerHTML = btnArr[i]

if(btn.innerHTML === "c") {btn.setAttribute("id", "clear")}
if(btn.innerHTML === "←") {btn.setAttribute("id", "backspace")}
if(btn.innerHTML === ".") {btn.setAttribute("id", "point")}
if(btn.innerHTML === "*") {btn.setAttribute("id", "multiply")}
if(btn.innerHTML === "/") {btn.setAttribute("id", "divide")}
if(btn.innerHTML === "-") {btn.setAttribute("id", "subtract")}
if(btn.innerHTML === "+") {btn.setAttribute("id", "add")}
if(btn.innerHTML === "=") {btn.setAttribute("id", "equal")}

btn.addEventListener("click", calculate)
function calculate() 

    {

result.value += btn.innerHTML
if(btn.innerHTML === "=") {result.value = eval(result.value.substring(0,result.value.length-1))}
if(btn.innerHTML === "c") {result.value = ""}
if(btn.innerHTML === "←") {result.value = result.value.slice(0,-1)}

    }
    
}