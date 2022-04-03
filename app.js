let computerScore = 0;
let userScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const meme = document.getElementById("show-meme");


const Convert = (letter) => {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    else return "Scissor";
};

const win =(user, computer) => {
    userScore++;
    var i = Math.floor(Math.random() * 3 + 1);
    userScore_span.innerHTML = userScore;
    result.innerHTML = `${Convert(user)} beats ${Convert(computer)}. You Win!`;
    meme.src = `images/win${i}.jpg`;
};

const lose =(user, computer) => {
    computerScore++;
    var i = Math.floor(Math.random() * 3 + 1 );
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${Convert(computer)} beats ${Convert(user)}. You Lose!`;
    meme.src = `images/lose${i}.jpg`;
};

const draw =(user, computer) => {
    result.innerHTML = `${Convert(user)} is equal to ${Convert(computer)}. Nothing changed!`;
    meme.src = `images/draw.jpg`;
};

const getComputerChoice = () => {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const play = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
};
const main = () => {
    rock.addEventListener('click', function(){play("r")});
    paper.addEventListener('click', function(){play("p")});
    scissor.addEventListener('click', function(){play("s")});
}

main();

