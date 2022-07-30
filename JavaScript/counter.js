//document.getElementById("count-el").innerText = 5
/*Java Script Varables
//let firstBatch = 5
//let secondBatch = 7 
//let count = firstBatch + secondBatch

console.log(count)*/
/* Human Dog age 
let myAge = 19
let humanDOgRatio = 7
myDogAge = myAge * humanDOgRatio

console.log(myDogAge)*/
/*Increase decrease practice
let bonusPoints = 50
bonusPoints = bonusPoints + 50
bonusPoints = bonusPoints - 75
bonusPoints = bonusPoints + 45

console.log(bonusPoints)*/
/*function increment()
{
    console.log("This button was clicked")
}*/
//race
/*function countdown(){

    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()*/
/*let lap1 = 34
let lap2 = 33
let lap3 = 36

function totalLapTime() {
    console.log(lap1+lap2+lap3)
}
totalLapTime()*/
/*let lapsCompleted = 0
function lapsCount(){
    lapsCompleted += 1
}
lapsCount()
lapsCount()
lapsCount()
console.log(lapsCompleted)*/



const message = "Previous entries: "
let count = 0
let saveEl = document.getElementById("save-el")
let entryLength = 0
function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
    document.getElementById("last-btn").style.pointerEvents = "all"
    document.getElementById("last-btn").innerText = "Last Value"
    
}
function decrement() {
    count -= 1
    document.getElementById("count-el").innerText = count
    document.getElementById("last-btn").style.pointerEvents = "all"
    document.getElementById("last-btn").innerText = "Last Value" 
}
function save() {   
    //console.log(count)
    let Entries = " "+ count + " -"
    entryLength = Entries.length
    saveEl.innerText += Entries
    //console.log(saveEl.innerText[3]);
    //document.getElementById("save-el").textContent += count + " - "
}
function reset() {
    count = 0
    document.getElementById("count-el").innerText = 0
}
function del() {
    count = 0
    document.getElementById("count-el").innerText = 0
    document.getElementById("save-el").textContent = message 
    document.getElementById("last-btn").style.pointerEvents = "none"
    document.getElementById("last-btn").innerText = "No Value"
}
function last() {
    let stringLength = saveEl.textContent.length
    let lastLength = stringLength - entryLength
    let newString = saveEl.innerText.substring(0, lastLength)
    if(stringLength >= 18)
    {  
        document.getElementById("save-el").textContent = newString
        console.log(saveEl.innerText)
    }
    else
    {
        document.getElementById("last-btn").style.pointerEvents = "none"
        document.getElementById("last-btn").innerText = "No Value"
    }
}





/*function last(){
    let splitText= saveEl.innerText.split(" ")
    saveEl.innerText = message + splitText.slice(1, splitText.length-1)
    
    //console.log(splitText.lastIndexOf(splitText.lenght-1))
}*/


/*let username = "per"
let message = "You have 3 new notifications"
let messageToUser = username + ", "+ message + "!"
console.log(messageToUser)*/

/* Challenge
let myName = "Arman Afridi"
let greeting = "Hi, my name is"
let myGreeting = greeting + " " + myName
console.log(myGreeting)*/

/*let points = 4
let bonusPoints = "10"

let totalPoints = points +bonusPoints
console.log(totalPoints)*/


/*let welcomeEl = document.getElementById("welcome-el")
let myName = "Arman Afridi"
let greeting = "Welcome back"

welcomeEl.innerText = greeting + " " + myName

welcomeEl.innerText += " 👋"*/