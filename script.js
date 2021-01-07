//.....query selector.....//
/*
console.log(document.querySelector(".message"))   //querySelector not used mostly//
console.log(document.querySelector(".message").textContent) // it will gives you content inside tag 

document.querySelector(".message").textContent = "🤣 yeeeeeeeeee "//it wiill change the content of tag

document.querySelector(".number").textContent = 55;

document.querySelector(".score").textContent = 33;

document.querySelector(".guess").value = 44;
console.log(document.querySelector(".guess").value);
*/
document.querySelector(".again").addEventListener('click', function () {

    NumberSecrets = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = 20;
    document.querySelector(".message").textContent = " start guessing....";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";


})

let NumberSecrets = Math.trunc(Math.random() * 20) + 1;
let score = 20;



document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);
    
    if (!guess) {

        document.querySelector(".message").textContent = " 🙄 No Number";

    } else if (guess === NumberSecrets) {

        document.querySelector(".message").textContent = " 😎 Correct Number! ";
        document.querySelector(".highscore").textContent = score;
        document.querySelector(".number").textContent = NumberSecrets;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = '30rem';


    } else if (guess > NumberSecrets) {

        if(score > 1) {
            
            document.querySelector(".message").textContent = " To High ! ";
            score--;
            document.querySelector(".score").textContent = score;


        } else {

            document.querySelector(".message").textContent = " you loss! ";
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector(".number").textContent = NumberSecrets;
            document.querySelector("body").style.backgroundColor = "red";
           
        }

    } else if (guess < NumberSecrets) {
        
        if (score > 1) {
            
            document.querySelector(".message").textContent = " To Low ! ";
            score--;
            document.querySelector(".score").textContent = score;


        } else {

            document.querySelector(".message").textContent = " you loss! ";
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector(".number").textContent = NumberSecrets;
            document.querySelector("body").style.backgroundColor = "red";
           
        }
    }
    
});











