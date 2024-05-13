const question_code = "Q0"; // Question code of the question wanted to filter
const columns = [1]; // Array of columns wanted, could be just one: [1], or many: [1, 2, 3]
const test = true; // set this true if you are testing, this will show the filter, set it as false and it will hide it

const checkboxes = document.querySelectorAll(".form-check input");

if (response.answers.some(question => question.questionCode === question_code)) {
    if (!response.answers.some(question => question.questionCode === question_code && columns.includes(Number(question.columnCode)))) {
        checkboxes[checkboxes.length -1].checked = true;
    } else {
        let checky = Array.from(response.answers.filter(question => question.questionCode === question_code && columns.includes(Number(question.columnCode)))).map(item => Number(item.rowCode) - 1);
    
        checky.forEach(check => {
            checkboxes[check].checked = true;
        });
    }
} else {
    alert(`${question_code} question was not found`);
}

if (!test) {
    document.querySelector("body").classList.add("d-none");
    document.querySelector("#p_next").click();
}