const question_code = "Q0"; // Question code of were the other value will be taken

let row = Array.from(document.querySelectorAll("table > tbody > tr"));
row = row[row.length - 1];
let input = Array.from(document.querySelectorAll("table > tbody > tr > th"));
input = input[input.length - 1];

if (input.querySelector("#insertans")) {
    if (response.answers.some(question => question.questionCode === question_code)) {
        if (response.answers.some(question => question.questionCode === question_code && question.value != undefined)) {
            let ans = response.answers.find(question => question.questionCode === question_code && question.value != "").value;
            input.querySelector("#insertans").innerText = ans;
        } else {
            row.classList.add("d-none");
        }
    } else {
        alert(`${question_code} was not found`);
    }
} else {
    alert('Please add this into the other option in this page: <span id = "insertans">Question Holder</span>');
}