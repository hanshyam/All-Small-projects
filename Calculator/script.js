//variable declair

let numberbox = document.getElementsByClassName('numberbox');
let answerdigit = document.getElementsByClassName('answerdigit')[0];
let ans = "";
let count = 0;

Array.from(numberbox).forEach(element => {
    element.addEventListener('click', () => {
        num = element.querySelector('.num');
        if (num.innerText === '=') {
            ans = eval(ans);
        }
        else if(num.innerText === 'C') {
            ans = "";
        }
        else if (num.innerText === 'Del') {
            ans = ans.substring(0,ans.length-1);
        }
        // else if((ans.substring(ans.length-1,ans.length)==='+'||ans.substring(ans.length-1,ans.length)==='-'||ans.substring(ans.length-1,ans.length)==='*'||ans.substring(ans.length-1,ans.length)==='/'||ans.substring(ans.length-1,ans.length)==='%')&&(num.innerText==='+'||num.innerText==='-'||num.innerText==='*'||num.innerText==='/'||num.innerText==='%'))
        // {
        //     ans = ans;
        // }
        else {
            ans = ans + num.innerText;
        }
        answerdigit.innerText = ans;
        
    })
})