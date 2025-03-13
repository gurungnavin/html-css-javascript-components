let toggler = document.getElementById("switch");
let display = document.getElementById('display')


toggler.addEventListener("click", () => {
  
  //   if (toggler.checked === true) {
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }

  toggler.checked === true
    ? (document.body.style.backgroundColor = "black") && (document.body.style.color = "white")
    : (document.body.style.backgroundColor = "white") && (document.body.style.color = "black")


  toggler.checked === true ? (display.innerHTML = "Dark-Mode") : (display.innerHTML = "Light-Mode")  
});
