const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
 const name = event.target.value.trim();
 output.textContent = name !== "" ? name : "Anonymous";
});
