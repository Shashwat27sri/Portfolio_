const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "WEB-DEVELOPER"; 
  },0);
  setTimeout(() => {
    text.textContent = "UI/UX DESIGNER"; 
  },4000);
  setTimeout(() => {
    text.textContent = "OPEN-SOURCE CONTRIBUTER"; 
  },8000);
}
textLoad();
setInterval(textLoad,12000);