//Create event Listener
document.getElementById('askButton').addEventListener('click', function () {
    let answer = '';
    let randomIndex = Math.floor(Math.random() * 5);
    if (randomIndex === 0) {
        answer = "It is certain";
    } else if (randomIndex === 1) {
        answer = "Ask again later";
    } else if (randomIndex === 2) {
        answer = "Yes";
    } else if (randomIndex === 3) {
        answer = "No";
    } else if (randomIndex === 4) {
        answer = "It is uncertain";
    } else {
        answer = "Certainly Not";
    }

    let question = document.getElementById('question').value;
    if (question.trim() === ''){
        alert("Please enter a question.");
    } else {
        document.getElementById('answer').textContent = answer;
    }
});