console.log("BCC App prête");

const toggleBtn = document.getElementById("toggle-balance");
const balanceText = document.getElementById("balance-text");

let visible = true;

toggleBtn.addEventListener("click", () => {

  if(visible){

    balanceText.innerHTML = "••••••";

    toggleBtn.innerHTML = "🙈";

    visible = false;

  }else{

    balanceText.innerHTML = "0 BCC";

    toggleBtn.innerHTML = "👁";

    visible = true;

  }

});


const actionButtons = document.querySelectorAll(".action-btn");

actionButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.95)";

    setTimeout(() => {

      button.style.transform = "scale(1)";

    }, 150);

  });

});
