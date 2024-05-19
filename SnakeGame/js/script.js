//variable 
let inputdir = {x:0,y:0}
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const MoveSound = new Audio('music/move.mp3');
const MusicSound = new Audio('music/music.mp3');
let lastPaintTime = 0;
let speed = 10;
let board = document.getElementById('board');
let scorecard =  document.getElementsByClassName('scorecard')[0];
let score =0;
let foodArr={x:5,y:7};
let Specialfood ={x:5,y:5};
let count = 0;
let snakeArr =[
    {x:13,y:15}
]
//game function
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime);
    if((ctime-lastPaintTime)/1000 <1/speed)
    {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCollide(snake){
    // for(let i = 1 ; i<snakeArr.length;i++)
    // {
    //     if((snake[0].x===snake[i].x)&&(snake[0].y===snake[i].y))
    //     {
    //         if(inputdir.x!=0&&inputdir.y!=0&&score!=0){
    //         return true;
    //        }
    //        else{
    //         return false;
    //        }
    //    }
    // }
  
    if(snake[0].x>=18||snake[0].x<=0||snake[0].y>=18||snake[0].y<=0)
    {
        return true;
    }
}
function gameEngine(){
//Part 1 - Update the snake and food array
        
        if(isCollide(snakeArr))
        {
            MoveSound.pause();
            gameOverSound.play();
            inputdir={x:0,y:0};
            alert("Game Over \n Press any key to start.");
            score = 0;
            scorecard.innerText = "Score = "+score;
            count = 0;
            snakeArr = [{x:13,y:15}]
            MusicSound.play();
        }

        //if we eat the food
        if(snakeArr[0].x === foodArr.x&&snakeArr[0].y===foodArr.y)
        {
            foodSound.play();
            snakeArr.unshift({ x: snakeArr[0].x + inputdir.x , y: snakeArr[0].y + inputdir.y});
            let a = 2,b=16;
            score+=1;
            scorecard.innerText = "Score = "+score;
            if(count===5){
                Specialfood = {x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
            }
            else{
            foodArr = {x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
            }
            count = count + 1;
        } 
        
        if(snakeArr[0].x === Specialfood.x&&snakeArr[0].y===Specialfood.y)
        {
            foodSound.play();
            snakeArr.unshift({ x: snakeArr[0].x + inputdir.x , y: snakeArr[0].y + inputdir.y});
            let a = 2,b=16;
            score += 5;
            scorecard.innerText = "Score = "+score;
            count = 0;
        } 
        //Move the snake
        MusicSound.play();
        for (let i = snakeArr.length-2; i >= 0; i--) {
            snakeArr[i+1] = {...snakeArr[i]};   
        }
        snakeArr[0].x+= inputdir.x;
        snakeArr[0].y+= inputdir.y;

//Part 2 - Display the snake and food
       
     //Display the snake
         board.innerHTML = "";
         snakeArr.forEach((e,index)=>{
         snakeElement = document.createElement('div');
         snakeElement.style.gridRowStart = e.y;
         snakeElement.style.gridColumnStart = e.x;
         if(index === 0)
         {
         snakeElement.classList.add('head'); 
         }
         else{
            snakeElement.classList.add('snake'); 
         }
         board.appendChild(snakeElement);
     })
         //Display the food
         foodElement = document.createElement('div');
         foodElement.style.gridRowStart = foodArr.y;
         foodElement.style.gridColumnStart = foodArr.x;
         foodElement.classList.add('food'); 
         board.appendChild(foodElement);
        
         if(count===5){
         SpecialfoodElement = document.createElement('div');
         SpecialfoodElement.style.gridRowStart = Specialfood.y;
         SpecialfoodElement.style.gridColumnStart = Specialfood.x;
         SpecialfoodElement.classList.add('specialfood'); 
         board.appendChild(SpecialfoodElement);
        }
}

//game logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',(e)=>{
       inputdir = {x:0,y:0};
       MoveSound.play();
    switch (e.key) {
        case "ArrowUp":
             inputdir.x = 0;
             inputdir.y = -1;
            break;

        case "w":
             inputdir.x = 0;
             inputdir.y = -1;
            break;
    
        case "ArrowDown":
             inputdir.x=0;
             inputdir.y = 1;
            break;

        case "s":
             inputdir.x=0;
             inputdir.y = 1;
            break;
    
        case "ArrowLeft":
             inputdir.x=-1;
             inputdir.y = 0;
            break;

        case "a":
             inputdir.x=-1;
             inputdir.y = 0;
            break;
    
        case "ArrowRight":
             inputdir.x = 1;
             inputdir.y = 0;
            break;
    
        case "d":
             inputdir.x = 1;
             inputdir.y = 0;
            break;
    }
})

//Menu Bar
let menubutton = document.getElementsByClassName('menubutton')[0];
let mbtn = document.getElementsByClassName('mbtn');
let menubar = document.getElementsByClassName('menubar')[0];

//When we click the menu button
menubutton.addEventListener('click',()=>{
    
    console.log("clicked");
    if(menubar.style.opacity === "0")
    {
        menubar.style.opacity = "1";
        inputdir={x:0,y:0};
        Array.from(mbtn).forEach((e)=>{
            e.addEventListener('click',()=>{
                console.log(e.innerText);
                if(e.innerText==="Play")
                {
                   menubar.style.opacity = "0";
                }
                if(e.innerText==="Replay")
                {
                    menubar.style.opacity = "0";
                    
                    snakeArr = [{x:13,y:15}]
                    score = 0;
                    scorecard.innerText = "Score = "+score;
                    count = 0;
                    MusicSound.play();  
                }
                if(e.innerText==="Back")
                {
                    menubar.style.opacity = "0";
                    window.location = "../starting.html";
                }
            })
        })
    }
    else{
        menubar.style.opacity = "0";
    }
})


