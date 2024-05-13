let questionCode = "Q11"; // Question code of the question the code will be added
let questionSchema = "Q11xSCHEMA"; // Create a new open text question and set the question code as "QuestionCode"xSCHEMA
let randomization = [[1, 2, 3, 4, 5], [99]]; // Add the question answer codes wanted to randomize in one list ([1, 2]) and the ones not wanted to randomized add them to another list ([99])
let questionFilteredCode = "Q1"; // Question code of the question wanted to filter from
let questionFilteredCodeSchema = "Q1xSCHEMA"; // Question code of the question wanted to filter from
let inclusiveOrExclusive = "inclusive"; // Set as "inclusive" to get questions selected // Set as "exclusive" for questions not selected
let min = 2; // Define a minimum amount of checkboxes to be check
let max = 3; // Define a maximum amount of checkboxes to be check

document.querySelector(`#q_${questionSchema}_card`).classList.add("d-none");

let scripts = ["https://synocdn.com/js/survey/library/multiple_choice.js"];

let promises = scripts.map((script) => {
  return new Promise((resolve, reject) => {
    document.querySelector("body").style.opacity = "0";
    let s = document.createElement("script");
    s.src = script;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
});

Promise.all(promises)
  .then(() => {
    /* Function to use */
    multiple_choice({
      question_code: questionCode,
      schema: questionSchema,
      randomize: { 
        answer_groups: randomization,
        randomize_groups: false, // Always set this to false
      },
      array_filter: { 
        filter: questionFilteredCode,
        filter_schema: questionFilteredCodeSchema,
        type: inclusiveOrExclusive,
      },
      validation: {
        min_limit: min,
        max_limit: max
      }
    });
    document.querySelector("body").style.opacity = "1";})
  /* If a library could not be imported throw an error */
  .catch((error) => {
    console.error(`Failed to load script: ${error}`);
  });