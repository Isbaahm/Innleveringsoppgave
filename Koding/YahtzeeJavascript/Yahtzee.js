function navnFunksjon() {
    let spillerInput = document.querySelector("#spillerInput");
    let melding = document.querySelector("#melding");

    melding.innerHTML = "Velkommen " + spillerInput.value;

}