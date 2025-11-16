// All quiz questions
const questions = [
    {
        question: "Which is the most powerful language of 2025?",
        choice: ['Python', 'JavaScript', 'Java', 'PHP'],
        answer: 1
    },
    {
        question: "Which job will be more in demand in future?",
        choice: ['AI/ML Engineer', 'Web Developer', 'Gaming Developer', 'Software Developer'],
        answer: 3
    },
    {
        question: "Which is the top IT company in 2025?",
        choice: ['TCS', 'Wipro', 'EY', 'Infosys'],
        answer: 2
    }
];

// DOM elements
const questionTag = document.querySelector('.question');
const choiceTag = document.querySelector('.choice');
const submit = document.querySelector('.submit');

let questionIndex = 0;
let totalMarks = 0;
let selectedOption = null;

// Function to display choices
function displaychoiceoptions(choiceTag, choices) {
    choiceTag.innerHTML = ''; // clear previous options

    choices.forEach((text, index) => {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.value = index;
        btn.className = 'btn btn-outline-primary w-75 mt-2';

        // Handle option click
        btn.addEventListener('click', () => {
            // Remove highlight from all buttons
            [...choiceTag.children].forEach(item => item.classList.remove('selected'));

            // Highlight the selected one
            btn.classList.add('selected');
            selectedOption = index;
        });

        choiceTag.appendChild(btn);
    });
}

// Load each question
function loadQuestion() {
    if (questionIndex < questions.length) {
        const q = questions[questionIndex];
        questionTag.textContent = q.question;
        displaychoiceoptions(choiceTag, q.choice);
        selectedOption = null;
    } else {
        // Quiz completed
        questionTag.textContent = 'TEST COMPLETED';
        choiceTag.innerHTML = `<div class="fs-4 text-success">Total Marks = ${totalMarks} out of ${questions.length}</div>`;
        submit.style.display = 'none';
    }
}

// Handle submit button click
submit.addEventListener('click', () => {
    if (selectedOption === null) {
        alert('Please select an option!');
        return;
    }

    if (selectedOption === questions[questionIndex].answer) {
        totalMarks++;
    }

    questionIndex++;
    loadQuestion();
});

// Start the quiz
loadQuestion();
