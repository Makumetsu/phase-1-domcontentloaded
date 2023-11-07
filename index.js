// Your code goes here
function changeSentence() {
    const targetElement = document.querySelector('#text');
    targetElement.textContent = "This is really cool!";
  }
  
  document.addEventListener("DOMContentLoaded", changeSentence);