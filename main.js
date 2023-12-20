
// Når window loades, kaldes start funktion
window.addEventListener("load", start)


// Start funktion kalder scrollFunction som sætter eventlistener på scroll button
function start(){
scrollFunction();
}


function scrollFunction(){
  document.querySelector("#scrollToTopBtn").addEventListener("click", scrollToTop);
}

// Ved klik kaldes denne
function scrollToTop(){
    document.documentElement.scrollTop = 0;
}

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
  sidemenu.style.right = "0"
}
function closemenu(){
  sidemenu.style.right = "-200px"
}