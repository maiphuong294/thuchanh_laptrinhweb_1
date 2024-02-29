let userInfoForm = document.getElementById('userInfoForm');
let quizForm = document.getElementById('quizForm');
let resultDiv = document.getElementById('result');

function startQuiz() {
    if (!validateForm()){
        alert('Vui lòng điền đầy đủ thông tin.');
    }else{
        userInfoForm.style.display = 'none';
        quizForm.style.display = 'block';
    }
    
}

function submitQuiz() {
    const score = calculateScore();

    quizForm.style.display = 'none';
    resultDiv.style.display = 'block';

    document.getElementById('score').innerText = `Điểm số của bạn: ${score}/10`;
}

function calculateScore() {

    return Math.floor(Math.random() * 9) + 1;
}
function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var dob = document.getElementById('dob').value;
    var studentID = document.getElementById('studentID').value;
    var classValue = document.getElementById('class').value;

    if (fullName === '' || dob === '' || studentID === '' || classValue === '') {
        
        return false;
    }
    return true;
}
