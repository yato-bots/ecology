const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");

let currentQuestionIndex, score;

const questions = [
  {
    question: "Is your business located in area XXX in Washington?",
    answers: [
      { text: "Yes, it is.", correct: true },
      { text: "No, it's not.", correct: false },
    ],
  },
  {
    question: "How many gallons of organic material waste does your business produce per year?",
    answers: [
      { text: "Less than 96 gallons. ", correct: false },
      { text: "Greater than 96 gallons.", correct: true },
      { text: "I don't know.", correct: "no answer" },
    ],
  },
  {
    question: "How much revenue does your business make per year?",
    answers: [
      { text: "Less than 500k. ", correct: false },
      { text: "Greater than 500k.", correct: true },
      { text: "I don't know.", correct: "no answer" },
    ],
  }
];

startQuiz();

function startQuiz() {
	score = 0;
	questionContainer.style.display = "flex";
	currentQuestionIndex = 0;
	nextButton.classList.remove("hide");
	restartButton.classList.add("hide");
	resultDiv.classList.add("hide");
	setNextQuestion();
}

function setNextQuestion() {
	resetState();
	showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
	questionElement.innerText = question.question;
	question.answers.forEach((answer, index) => {
		const inputGroup = document.createElement("div");
		inputGroup.classList.add("input-group");

		const radio = document.createElement("input");
		radio.type = "radio";
		radio.id = "answer" + index;
		radio.name = "answer";
		radio.value = index;

		const label = document.createElement("label");
		label.htmlFor = "answer" + index;
		label.innerText = answer.text;

		inputGroup.appendChild(radio);
		inputGroup.appendChild(label);
		answerButtons.appendChild(inputGroup);
	});
}

function resetState() {
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

nextButton.addEventListener("click", () => {
	const answerIndex = Array.from(
		answerButtons.querySelectorAll("input")
	).findIndex((radio) => radio.checked);
	if (answerIndex !== -1) {
		if(currentQuestionIndex == 0 && !questions[currentQuestionIndex].answers[answerIndex].correct) {
			endQuiz("Jump from question 1: the compliance policy start being effective on 2024-01-01. ");
		}
		if(currentQuestionIndex == 1) {
			if(!questions[currentQuestionIndex].answers[answerIndex].correct) {
				endQuiz("Jump from question 2: the compliance policy start being effective on 2024-01-01. ");
			} else if(questions[currentQuestionIndex].answers[answerIndex].correct == "no answer") {
				endQuiz("Please visit this page to find out your infromation.")
			}
		}
		if(currentQuestionIndex == 2) {
			if(!questions[currentQuestionIndex].answers[answerIndex].correct) {
				endQuiz("Jump from question 3: the compliance policy start being effective on 2024-01-01. ");
			} else if(questions[currentQuestionIndex].answers[answerIndex].correct == "no answer") {
				endQuiz("Please visit this page to find out your infromation.")
			}
		}
		currentQuestionIndex++;
		if (questions.length > currentQuestionIndex) {
			setNextQuestion();
		} else {
			endQuiz("End of the quiz: the compliance policy start being effective on 2025-01-01.");
		}
	} else {
		alert("Please select an answer.");
	}
});

restartButton.addEventListener("click", startQuiz);

function endQuiz(message) {
	questionContainer.style.display = "none";
	nextButton.classList.add("hide");
	restartButton.classList.remove("hide");
	resultDiv.classList.remove("hide");
	resultDiv.innerText = message;
}