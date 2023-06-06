
const input = document.querySelector("#tahmin");
// console.log(input);
const guess = input.value;
console.log(guess);
const checkBtn = document.querySelector("#check-btn");
// console.log(checkBtn);
const spanCount = document.querySelector("#span-count");
// console.log(spanCount);
const comment=document.querySelector("#comment");
console.log(comment);

const modal = document.querySelector("#modal")
const modalTitle = document.querySelector("#modal-title");
const modalContent = document.querySelector("#modal-content");
const btnÇarpı = document.querySelector("#çarpı");
const btnClose = document.querySelector("#btn-close");
const btnPlayAgain = document.querySelector("#btn-playAgain");
let secretNumber=Math.floor(Math.random()*100)
// let secretNumber = 5;
// let secretNumber
console.log(secretNumber);

checkBtn.addEventListener("click", () => {
    if(!input.value){
            comment.textContent = `Please enter a number!`;
            alert(`Please enter a number!`)
            
           }else if(input.value > 100){
            comment.textContent = `Please enter a number in 1-100`;
            alert(`Please enter a number in 1-100`)
            input.value=""
            input.focus();
        }else{guessFunction()}
  

});
 let count=7; 
const guessFunction=() => {
  
   
    
        if (count === 0) {
            comment.textContent = "Game over!"
            spanCount.textContent = `${count}`;

            youLost();
          } 
          else {if (input.value == secretNumber) {
              comment.textContent = "Game over!"
              spanCount.textContent = `${count}`;
              youWin();
            
          }
           else if (input.value > secretNumber) {
            spanCount.textContent = `${count}`;
            comment.textContent =`Decrease your guess!`;
  
          }
           else if(input.value < secretNumber){
            spanCount.textContent = `${count}`;
            comment.textContent =`Increase your guess!`;
          } 
          count--;
        }
        
         
        
      
       
      input.value=""
      input.focus();
}

const youLost=()=>{
    modal.classList.add("d-block")
    modalTitle.textContent="You lost!"
    modalContent.textContent="Maybe next time you can make it. "
    
}
const youWin=()=>{
    modal.classList.add("d-block")
    modalTitle.textContent="Congratulations! "
    modalContent.textContent=`How can do it? You find in ${8-count} attempts`
    
}

btnÇarpı.addEventListener("click", () => {
window.close();
})
btnClose.addEventListener("click", () => {
window.close();
})
btnPlayAgain.addEventListener("click", () => {
window.location.reload();
})
input.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        checkBtn.click(); 
        // btnPlayAgain.click();
      }
    if(e.code==="Escape"){
        window.close();
    }
})
