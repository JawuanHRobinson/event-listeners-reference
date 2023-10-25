"use strict"

window.onLoad = function (event){
let additionForm = document.getElementById("additionForm")
additionForm.onsubmit = handleSubmit

let ghostBoy = document.getElementById("👻")
ghostBoy.onclick = flipGhost
}
 function flipGhost(event){
        event.target.classlist.toggle("flipped")

 }



function handleSubmit(event) {
        event.preventDefault()
        let x = event.target.elements.leftOperand.valueAsNumber
        let y = event.target.elements.rightOperand.valueAsNumber
        let sum = x + y

        let resultDiv = document.getElementById("additionMessage")
        resultDiv.innerHTML = `<h4>${x} + ${y} = <span class="display-result-red">${sum}</h4>`


}

let stateInput = document.getElementById("stateInput")
stateInput.onsubmit = handleAddressForm

function handleAddressForm(event) {
        event.preventDefault()
        let country = event.target.elements.stateInput.value
        let state = event.target.elements.countryInput.value
        let city = event.target.elements.cityInput.value
        let addressMessage = country + state + city


        let resultDiv = document.getElementById("addressMessage")
        resultDiv.innerHTML = `<h4>Address:${country}, ${state}, ${city} <span class="display-result-red"></h4>`
}

document.onkeydown= function (event) {
console.log(event)

if (event.key === "?") {


} else if (event.key === "ArrowUp") {


}



}

















