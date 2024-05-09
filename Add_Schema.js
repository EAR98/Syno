const schema = "Q3xSCHEMA";

if (document.querySelector(`#q_${schema}_card`)) {
    let inputValue = Array.from(document.querySelectorAll(".form-check input")).map(val => val.value).join(",");
    document.querySelector(`#q_${schema}_card > div.form-row > div > input`).value = inputValue;
    document.querySelector(`#q_${schema}_card`).classList.add("d-none");
    console.log("SCHEMA: " + document.querySelector(`#q_${schema}_card > div.form-row > div > input`).value);
} else {
    alert(`${schema} was not found`);
}