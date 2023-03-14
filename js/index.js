const logForm=document.querySelector(".login-form");
const submit=document.querySelector(".submit-button");
const questionInputs=document.querySelector(".question-inputs");
const logInputs=document.querySelectorAll(".login-form input");
const applyButton=document.querySelector(".question-inputs button");
const textInput=document.querySelector(".question-inputs input");
const royaScore=document.querySelector(".results")
const royaScoreFields=document.querySelectorAll(".results span");
const textScore=document.querySelector("#royas-greatness");
const inputValue={};

logInputs.forEach((input) =>{
  input.addEventListener("change",function(){
    const {name:inputName, value}=this;
    inputValue[inputName]=value;
  })
})



submit.addEventListener("click", (e)=>{
  e.preventDefault();
     logForm.classList.toggle("form-unvisible");
     questionInputs.classList.toggle("form-visible")
})

applyButton.addEventListener("click",(e)=>{
  e.preventDefault();
  questionInputs.classList.toggle("form-visible");
  royaScore.classList.toggle("show-results");
  
  royaScoreFields.forEach((scoreField)=>{
    scoreField.innerText+=inputValue[scoreField.id];
  })
  
  textScore.innerText+=textInput.value;
  
  

})



