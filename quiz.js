const start = document.getElementById('start-btn');
const next = document.getElementById('next-btn');
const quizCont = document.getElementById('questions-cont');
const submit  = document.getElementById('answer-but');
const questionElement = document.getElementById('questions');
const score = document.getElementById('score');

let shuffle,current
var Score =0;
var op =false;
start.addEventListener('click' ,startQuiz);
next.addEventListener('click',()=>{
    current++
    
    nextQuestion();
})
function startQuiz(){
    
    start.classList.add('cont');
    shuffle = questions.sort(() => Math.random() - .5);
    current = 0;
    quizCont.classList.remove('cont');
    nextQuestion();
}
function nextQuestion(){
    reset();
    op=false;
    showQuestion(shuffle[current]);
    
}
function showQuestion(question){
    
    questionElement.innerText=question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct=answer.correct;
            
        }
        button.addEventListener('click',select);
        submit.appendChild(button);
            
    });
}
function reset(){
    clearStatusClass(document.body)
    next.classList.add('cont');  
    while(submit.firstChild){
        submit.removeChild(submit.firstChild);
        
    }
}
function select(x){
    const selectedButton = x.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    if(correct && !op ){
        Score ++;
        op=true;
    }
    
    Array.from(submit.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct)
        
    })
    if(shuffle.length > current +1){
        next.classList.remove('cont')
        score.innerText=''+Score;
        
    }
    else{
        start.innerText='restart';
        start.classList.remove('cont');
        score.innerText='final score:'+ Score;
        Score=0;
        
    }
}
function setStatusClass(element, correct){
    clearStatusClass(element);
 
    if(correct){
        element.classList.add('correct');
        
    }else{
        element.classList.add('wrong');
    }
   
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
    
    
}
const questions=[
    {
        question : 'Think you can solve this equation? \n 98×63-32×69=',
        answers :[
            {text:"4,562", correct:false},
            {text:"3,679", correct:false},
            {text:"3,966", correct:true},
            {text:"2,365", correct:false}
        ]
    },
    {
        question : 'How about this one? Do you know the answer?\n98×65-24×6÷3=',
        answers :[
            {text:"6,425", correct:false},
            {text:"6,567", correct:false},
            {text:"6,587", correct:false},
            {text:"6,322", correct:true}
        ]
    },
    {
        question : 'A boat whose speed is 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is:',
        answers :[
            {text:"4 km/hr", correct:false},
            {text:"5 km/hr", correct:true},
            {text:"6 km/hr", correct:false},
            {text:"10 km/hr", correct:false}
        ]
        
    },
    {
        question : 'An accurate clock shows 8 o’clock in the morning. Through how may degrees will the hour hand rotate when the clock shows 2 o’clock in the afternoon?',
        answers :[
            {text:"180 degrees", correct:true},
            {text:"168 degrees", correct:false},
            {text:"175 degrees", correct:false},
            {text:"150 degrees", correct:false}
        ]
        
    },
    {
        question : 'Inside which HTML element do we put the JavaScript?',
        answers :[
            {text:"<javascript>", correct:false},
            {text:"<scripting>", correct:false},
            {text:"<js>", correct:false},
            {text:"<script>", correct:true}
        ]
        
    },
    {
        question : 'The external JavaScript file must contain the <script> tag.',
        answers :[
            {text:"true", correct:false},
            {text:"false", correct:true},
           
        ]
        
    },
    {
        question : 'How do you create a function in JavaScript?',
        answers :[
            {text:"function: myFunction()", correct:false},
            {text:"function myFunction()  ", correct:true},
            {text:"function = myFunction()", correct:false},
        ]
        
    },
    {
        question : 'How to write an IF statement in JavaScript?',
        answers :[
            {text:"if i = 5", correct:false},
            {text:"<if i = 5 then", correct:false},
            {text:"if i == 5 then", correct:false},
            {text:"if (i == 5)", correct:true}
        ]
        
    },
    {
        question : 'How can you add a comment in a JavaScript?',
        answers :[
            {text:"//This is a comment  ", correct:true},
            {text:"'This is a comment", correct:false},
            {text:"<!--This is a comment-->", correct:false}
        ]
        
    },
    {
        question : 'JavaScript is the same as Java.',
        answers :[
            {text:"true", correct:false},
            {text:"false", correct:true},
           
        ]
        
    }
    
]


