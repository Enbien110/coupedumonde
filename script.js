tabbonnerep = [3, 2, 4];
reponse = [0, 0, 0];
currentQuestionIndex = 0;

function decoche(nq, nr) {
    for (i = 1; i <= 4; i++) {
        if (i != nr) {
            box = document.getElementById(nq.toString() + "." + i.toString());
            box.checked = false;
        }
    }
}

function check(nq) {
    var bonnerep = document.getElementById(nq.toString() + "." + tabbonnerep[nq - 1].toString());
    if (bonnerep.checked) {
        reponse[nq - 1] = 1;
        console.log(reponse[nq - 1]);
    } else {
        reponse[nq - 1] = 0;
        console.log(reponse[nq - 1]);
    }
    checkAnswer(nq);
}

function checkAnswer(nq) {
    var feedback = document.getElementById("feedback" + nq);
    var totalQuestions = 3;
    var correctAnswers = 0;

    if (reponse[nq - 1] === 1) {
        feedback.textContent = "Bonne réponse";
    } else {
        feedback.textContent = "Mauvaise réponse";
    }


    for (var i = 0; i < totalQuestions; i++) {
        if (reponse[i] === 1) {
            correctAnswers++;
        }
    }

    if (correctAnswers === totalQuestions) {
        var nameMdpElement = document.getElementById('nameMdpInfo');
        nameMdpElement.textContent = "Name: Tempez - Mdp: NSI";
    }
    currentQuestionIndex++; // Passer à la question suivante
}
