function toggleNextButton(questionId, buttonId) {
    const questionContainer = document.getElementById(questionId);
    const inputs = questionContainer.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    const nextButton = document.getElementById(buttonId);

    inputs.forEach(input => {
        input.addEventListener('change', function () {
            const isAnySelected = Array.from(inputs).some(input => input.checked);
            nextButton.disabled = !isAnySelected;
        });
    });
}

toggleNextButton('question1', 'next1');
toggleNextButton('question2', 'next2');
toggleNextButton('question3', 'next3');

function showNextQuestion(currentQuestionId, nextQuestionId) {
    const currentQuestion = document.getElementById(currentQuestionId);
    currentQuestion.classList.remove('visible');

    setTimeout(function () {
        currentQuestion.style.display = "none";
        const nextQuestion = document.getElementById(nextQuestionId);
        nextQuestion.style.display = "block";
        setTimeout(function () {
            nextQuestion.classList.add('visible');
        }, 10);
    }, 500);
}

function collectAndSubmitData() {
const groups = [];

const timePeriodElement = document.querySelector('input[name="timePeriod"]:checked');
const timePeriod = timePeriodElement 
    ? timePeriodElement.nextElementSibling.innerText 
    : 'Niet geselecteerd';

if (document.getElementById('group3-4').checked) {
    groups.push('3-4');
} else if(document.getElementById('group5-6').checked){
    groups.push('5-6'); 
} else if (document.getElementById('group7-8').checked){
        groups.push('7-8');
}

const subjectElement = document.querySelector('input[name="subject"]:checked');
const subject = subjectElement 
    ? subjectElement.nextElementSibling.innerText 
    : 'Niet geselecteerd';

const themeElement = document.querySelector('#themaContainer input:checked');
let theme = 'Niet geselecteerd';
if (themeElement) {
    const labelElement = themeElement.closest('label');
    if (labelElement) {
        theme = labelElement.textContent.trim();
    }
}

if (!themeElement) {
    console.log('No theme selected, skipping the response generation.');
    return;
}

const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');
question4.classList.remove('visible');
question4.style.display = "none";
question5.style.display = "none";

const onderwerpContainer = document.getElementById('onderwerpContainer');
let question5Responses = [];

if (onderwerpContainer) {
    const selectedCheckboxes = onderwerpContainer.querySelectorAll('input[type="checkbox"]:checked');
    
    if (selectedCheckboxes.length > 0) {
        selectedCheckboxes.forEach(checkbox => {
            const labelElement = checkbox.closest('label');
            if (labelElement) {
                let selectedText = labelElement.textContent.trim();

                if (selectedText !== "Anders...") {
                    question5Responses.push(selectedText);
                }
            }
        });
    } else {
        console.log('No onderwerpen selected.');
    }

    const andersCheckbox = document.getElementById('onderwerpAnders');
    const andersInput = document.getElementById('onderwerpAndersInput');

    if (andersCheckbox.checked && andersInput.value.trim() !== '') {
        question5Responses.push(andersInput.value.trim());
    }
}

const prompt = `Genereer een lesspel voor groep ${groups.join(', ')}, vak ${subject}, thema ${theme}, onderwerpen: ${question5Responses.join(', ')}, tijd: ${timePeriod}. Max 150 woorden, focus op speluitleg.`;

console.log("prompt debug: " + prompt);

const responseDiv = document.getElementById('responseMessage');

question5.style.display = "none";
responseDiv.innerHTML = `
    <div class="spinner-container">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
`;
responseDiv.style.display = "block";

fetchResponse(prompt);


}

function fetchResponse(prompt){
    fetch("https://flask-game-generator.onrender.com/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        const generatedText = data.generated_text || "No response generated.";

        question5.classList.remove('visible');
        question5.style.display = "none";

        responseDiv.innerHTML = `
            <h3 class="text-center mb-2">Lesidee:</h3>
            <p>${generatedText}</p>
            <div class="info-row">
                <div class="info-item">
                    <strong>Vak:</strong> ${subject}
                </div>
                <div class="info-item">
                    <strong>Groep:</strong> ${groups.join(', ') || 'Niet geselecteerd'}
                </div>
                <div class="info-item">
                    <strong>Tijdsduur:</strong> ${timePeriod}
                </div>
                <div class="info-item">
                    <strong>Thema:</strong> ${theme}
                </div>
                <div class="info-item">
                    <p><strong>Onderwerpen:</strong> ${question5Responses.join(', ') || 'Niet geselecteerd'}</p>
                </div>
            </div>
        `;
        responseDiv.style.display = "block"; 

        const generateNewPromptButton = document.getElementById('generateNewPrompt');
        generateNewPromptButton.style.display = 'block';

        setTimeout(() => {
            generateNewPromptButton.disabled = false;
            generateNewPromptButton.style.cursor = "pointer";
            generateNewPromptButton.title = "";
        }, 5000);
    })
    .catch(error => {
        console.error("Error:", error);
        responseDiv.innerHTML = `
            <p style="color: red;">Er is iets misgegaan. Probeer het opnieuw.</p>
        `;
    });
    }


document.getElementById('generateNewPrompt').addEventListener('click', function () {
    const generateNewPromptButton = document.getElementById('generateNewPrompt');

    generateNewPromptButton.disabled = true;
    generateNewPromptButton.style.cursor = "not-allowed";
    generateNewPromptButton.title = "Wacht even voordat je een nieuw spel genereert!";

    const prompt = `Genereer een nieuw lesspel voor groep ${groups.join(', ')}, vak ${subject}, thema ${theme}, onderwerpen: ${question5Responses.join(', ')}, tijd: ${timePeriod}. Anders dan eerdere ideeën. Max 150 woorden, focus op speluitleg.`;

    fetchResponse(prompt);
    const responseDiv = document.getElementById('responseMessage');

    responseDiv.innerHTML = `
        <div class="spinner-container">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
    responseDiv.style.display = "block";
});


document.getElementById('next1').addEventListener('click', function () {
    showNextQuestion('question1', 'question2');
});

document.getElementById('next2').addEventListener('click', function () {
    showNextQuestion('question2', 'question3');
});

document.getElementById('next3').addEventListener('click', function () {
    const selectedSubjectElement = document.querySelector('input[name="subject"]:checked');
    const selectedSubject = selectedSubjectElement ? selectedSubjectElement.nextElementSibling.innerText : '';
    
    if (selectedSubject) {
        populateThemes(selectedSubject);
        showNextQuestion('question3', 'question4');
    }
});

document.getElementById('next4').addEventListener('click', function () {
    const selectedThemeElement = document.querySelector('#themaContainer input:checked');
    const selectedTheme = selectedThemeElement ? selectedThemeElement.value : '';

    if (selectedTheme) {
        populateSubjects(selectedTheme);
        showNextQuestion('question4', 'question5');
    }
});

document.getElementById('submitFinal').addEventListener('click', function () {
    collectAndSubmitData();
});

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var subject = "Nieuw Bericht van " + encodeURIComponent(name);
    var body = "Naam: " + encodeURIComponent(name) + "%0A" +
               "Email: " + encodeURIComponent(email) + "%0A" +
               "Bericht: " + encodeURIComponent(message);
    
    var mailtoLink = "mailto:Karlijnnijboer5@gmail.com?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
}