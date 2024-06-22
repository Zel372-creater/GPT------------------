const quizData = [
    {
        question: '1. Какая функция выполняет чат-бот?',
        answers: [
            { text: 'A) Оперирует тяжелыми строительными машинами', correct: false },
            { text: 'B) Заменяет реального оператора поддержки', correct: true },
            { text: 'C) Продает автомобили', correct: false },
            { text: 'D) Проводит медицинские операции', correct: false}
        ]
    },
    {
        question: '2. Каким образом пользователь взаимодействует с чат-ботом?',
        answers: [
            { text: 'A) Только в области музыки', correct: false },
            { text: 'B) Только в области литературы', correct: false },
            { text: 'C) В области клиентского обслуживания, маркетинга, образования и других', correct: true },
            { text: 'D) Только в области кулинарии', correct: false}
        ]
    },
    {
        question: '3. Какая функция выполняет чат-бот?',
        answers: [
            { text: 'A) Подавая сигналы света', correct: false },
            { text: 'B) Путем общения по текстовым сообщениям', correct: true },
            { text: 'C) По волновому индикатору', correct: false },
            { text: 'D) Танцуя хоровод', correct: false}
        ]
    },
    {
        question: '4. Каким образом чат-бот отвечает на сообщения пользователя?',
        answers: [
            { text: 'A) Используя телекинез', correct: false },
            { text: 'B) По принципу рандомного выбора ответа', correct: false },
            { text: 'C) Анализируя входные данные и выдача соответствующего ответа', correct: true },
            { text: 'D) Чтение мыслей пользователя', correct: false}
        ]
    },
    {
        question: '5. Какие преимущества имеет использование чат-ботов в бизнесе?',
        answers: [
            { text: 'A) Только увеличивает расходы', correct: false },
            { text: 'B) Ускоряет процессы решения проблем клиентов', correct: true },
            { text: 'C) Увеличивает количество ошибок', correct: false },
            { text: 'D) Уменьшает время работы с клиентами.', correct: false}
        ]
    },
];

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answers');
const resultsContainer = document.getElementById('results');
const scoreContainer = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    let currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtonsElement.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreContainer.innerText = `Вы набрали: ${score} из ${quizData.length}`;
}

showQuestion();