let board = [
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
];
let life=3;
let isWin = false;

const message=document.getElementById("message");


const rr = Math.floor(Math.random() * 5);
const rc = Math.floor(Math.random() * 5);
board[rr][rc] = "O";

let htmlCode = "";

let rowNumber=0;


for(const row of board){
    let colNumber=0;
    let html = "";
    for(const col of row){
        const id=`btn${rowNumber}${colNumber}`;
        html+= `<div class="button"id="${id}" onClick='check("${id}","${col}")'>
            <i class="fa-solid fa-square"></i>
        </div>`
        colNumber++;
    }
    htmlCode += `<div>${html}</div>`;
    rowNumber++;
}
const container=document.getElementById("container");
container.innerHTML = htmlCode;
const click = new Audio("click.mp3");
const wow = new Audio("wow.mp3")
const rip = new Audio("rip.mp3")

function check(id,value){
    const btn = document.getElementById(id);

    if(life === 0 || isWin === true || btn.innerHTML.indexOf('fa-square') < 0){
        return;
    }
    if(value === "X"){
        btn.innerHTML ='<i class="fa-solid fa-skull-crossbones"></i>';
        life--;
        message.innerText= `You have ${life} lives`;
        click.play()
    } else {
        btn.innerHTML ='<i class="fa-regular fa-face-smile"></i>';
        isWin=true;
        message.innerText=`You win!`;
        wow.play()
    }
    const m=document.getElementById("message");
    m.innerText= `You have ${life} lives`;
    if(life == 0){ 
        rip.play();
        m.innerText ="Bro fr died L"
    }
}
