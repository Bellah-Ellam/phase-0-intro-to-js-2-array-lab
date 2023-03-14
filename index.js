// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) { 
    cats.push('Ralph')}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    var newArray = [...cats, "Broom"]
    return newArray
}

function prependCat(name){
    var arrayNew = ["Arnold", ...cats]
    return arrayNew
}
function removeLastCat() {
    var lastSlice = cats.slice(0,cats.length-1)
    return lastSlice
}

function removeFirstCat(){
    var firstSlice = cats.slice(1)
    return firstSlice
}