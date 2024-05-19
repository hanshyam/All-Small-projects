
let questionBox = document.querySelectorAll('.queston-box');
let questionBoxopen = document.querySelectorAll('.question-box-open');

for (let i = 0; i < questionBox.length; i++) {
    questionBox[i].addEventListener('click', () => {
        if(questionBoxopen[i].className === "question-box-open"){
            questionBox[i].getElementsByTagName('img')[0].src = "img/crosss.svg"
            questionBoxopen[i].className = "question-box-open-toggle";
        }
       else if(questionBoxopen[i].className === "question-box-open-toggle"){
            questionBoxopen[i].className = "question-box-open";
            questionBox[i].getElementsByTagName('img')[0].src = "img/plus (2).svg"
        }
    });
}




