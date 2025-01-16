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
toggleNextButton('question4', 'next4');
toggleNextButton('question5', 'submitFinal');

    function populateThemes(subject) {
    const themaContainer = document.getElementById('themaContainer');
    themaContainer.innerHTML = '';

    let themes = [];
    if (subject === 'Aardrijkskunde') {
        themes = [
            'Geografie van Europa'
            // 'Klimaatverandering',
            // 'Wereldzeeën',
            // 'Steden en hun geschiedenis',
            // 'Natuurverschijnselen'
        ];
    } else if (subject === 'Geschiedenis') {
        themes = [
            'De Tweede Wereldoorlog'
            // 'Romeinse Rijk',
            // 'De Middeleeuwen',
            // 'De Franse Revolutie',
            // 'De Gouden Eeuw'
        ];
    } else if (subject === 'Natuurkunde') {
        themes = [
            'Beweging en Kracht'
            // 'Energiebronnen',
            // 'Magnetisme',
            // 'Elektriciteit',
            // 'Optica'
        ];
    } else if (subject === 'Biologie') {
        themes = [
            'Cellen en Organismen'
            // 'Ecosystemen',
            // 'Genetica',
            // 'Planten en Dieren',
            // 'Menselijk Lichaam'
        ];
    } else if (subject === 'Techniek') {
        themes = [
            'Robots en Automatisering'
            // 'Circuits en Elektronica',
            // 'Machines en Mechanica',
            // '3D-printen',
            // 'Herbruikbare Energie'
        ];
    }

    themes.forEach((theme, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="thema" id="thema${index}" value="${theme}"> ${theme}`;
        themaContainer.appendChild(label);
        themaContainer.appendChild(document.createElement('br'));
    });

    toggleNextButtonForThemes();
}

function toggleNextButtonForThemes() {
    const themeInputs = document.querySelectorAll('#themaContainer input');
    const submitButton = document.getElementById('next4');

    themeInputs.forEach(input => {
        input.addEventListener('change', function () {
            const isAnySelected = Array.from(themeInputs).some(input => input.checked);
            submitButton.disabled = !isAnySelected;
        });
    });
}

function populateSubjects(theme) {
const onderwerpContainer = document.getElementById('onderwerpContainer');
onderwerpContainer.innerHTML = '';

let subjects = [];
if (theme === 'Geografie van Europa') {
    subjects = ['Landkaarten', 'Bevolking', 'Rivieren', 'Bergen', 'Klimaat'];
} else if (theme === 'Klimaatverandering') {
    subjects = ['Oorzaken', 'Gevolgen', 'Oplossingen', 'Wetenschap', 'Verdragen'];
} else if (theme === 'De Tweede Wereldoorlog') {
    subjects = ['Belangrijke gebeurtenissen', 'Leiders', 'Slagvelden', 'Dagelijks leven', 'Gevolgen'];
} else if (theme === 'Romeinse Rijk') {
    subjects = ['Architectuur', 'Leger', 'Politiek', 'Dagelijks leven', 'Invloed op de wereld'];
} else if (theme === 'Robots en Automatisering') {
    subjects = ['Geschiedenis van robots', 'Gebruik in industrie', 'Robotica in het dagelijks leven', 'Ethiek', 'Toekomstige trends'];
}

subjects.forEach((subject, index) => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" name="onderwerp" id="onderwerp${index}" value="${subject}"> ${subject}`;
    onderwerpContainer.appendChild(label);
    onderwerpContainer.appendChild(document.createElement('br'));
});

toggleNextButtonForSubjects();
}

function toggleNextButtonForSubjects() {
    const subjectInputs = document.querySelectorAll('#onderwerpContainer input');
    const submitButton = document.getElementById('submitFinal');

    subjectInputs.forEach(input => {
        input.addEventListener('change', function () {
            const isAnySelected = Array.from(subjectInputs).some(input => input.checked);
            submitButton.disabled = !isAnySelected;
        });
    });
}

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
    }, 1500);
}

let savedData = {};

function collectAndSubmitData() {
const groups = [];

const timePeriodElement = document.querySelector('input[name="timePeriod"]:checked');
const timePeriod = timePeriodElement 
    ? timePeriodElement.nextElementSibling.innerText 
    : 'Niet geselecteerd';

if (document.getElementById('group3-4').checked) {
    groups.push('3-4');
}
if (document.getElementById('group5-6').checked) {
    groups.push('5-6');
}
if (document.getElementById('group7-8').checked) {
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
setTimeout(function () {
    question4.style.display = "none";
    question5.style.display = "block";
    question5.classList.add('visible');
}, 1500);

const onderwerpContainer = document.getElementById('onderwerpContainer');
let question5Responses = [];

if (onderwerpContainer) {
    const selectedCheckboxes = onderwerpContainer.querySelectorAll('input[type="checkbox"]:checked');
    
    if (selectedCheckboxes.length > 0) {
        selectedCheckboxes.forEach(checkbox => {
            const labelElement = checkbox.closest('label');
            if (labelElement) {
                question5Responses.push(labelElement.textContent.trim());
            }
        });
    } else {
        console.log('No onderwerpen selected.');
    }
}

savedData = { groups, timePeriod, subject, theme, question5Responses };

const prompt = `Genereer een lesspel voor groep ${groups.join(', ')}, vak ${subject}, thema ${theme}, onderwerpen: ${question5Responses.join(', ')}, tijd: ${timePeriod}. Max 150 woorden, focus op speluitleg.`;

const responseDiv = document.getElementById('responseMessage');

responseDiv.innerHTML = `
    <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
`;
responseDiv.style.display = "block";

fetch("https://flask-game-generator.onrender.com/", {
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
    setTimeout(function () {
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
    }, 1500);
})
.catch(error => {
    console.error("Error:", error);
    responseDiv.innerHTML = `
        <p style="color: red;">Er is iets misgegaan. Probeer het opnieuw.</p>
    `;
});
}

document.getElementById('generateNewPrompt').addEventListener('click', function () {
    // Generate the new prompt with the same data
    const { groups, timePeriod, subject, theme, question5Responses } = savedData;

    const prompt = `Genereer een lesspel voor groep ${groups.join(', ')}, vak ${subject}, thema ${theme}, onderwerpen: ${question5Responses.join(', ')}, tijd: ${timePeriod}. Max 150 woorden, focus op speluitleg.`;

    const responseDiv = document.getElementById('responseMessage');

    responseDiv.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
    responseDiv.style.display = "block";

    fetch("https://flask-game-generator.onrender.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        const generatedText = data.generated_text || "No response generated.";

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
                    <strong>Onderwerpen:</strong> ${question5Responses.join(', ') || 'Niet geselecteerd'}
                </div>
            </div>
        `;
        responseDiv.style.display = "block"; 
    })
    .catch(error => {
        console.error("Error:", error);
        responseDiv.innerHTML = `
            <p style="color: red;">Er is iets misgegaan. Probeer het opnieuw.</p>
        `;
    });
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