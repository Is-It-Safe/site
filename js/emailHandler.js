
$(document).ready(function() {
const form = document.getElementById("emailForm");
const submitBtn = document.getElementById("submitBtn");
function showMessage(message, color) {
    let snackMessage = document.getElementById("snackMessage");
    snackMessage.innerHTML = `
    <div class="snackMessageInfoIcon">
     <ion-icon name="information-circle-outline"></ion-icon>
     </div>
     <span>${message}</span>
     <div class="snackMessageCloseIcon">
     <ion-icon name="close-outline"></ion-icon>
     </div>`
    snackMessage.style.backgroundColor = color;
    snackMessage.style.display = "flex";
    snackMessage.scrollIntoView({ behavior: "smooth" });
    setTimeout(function() {
      snackMessage.style.display = "none";
    }, 5000);
  }


submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
   console.log("submitting form")
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const pronouns = document.getElementById("pronouns").value;
  const message = document.getElementById("message").value;
  const subject = "New message from " + name;
  const body = "Name: " + name +
  "Email: " + email +
  "Pronouns: " + pronouns +
  "Message: " + message;
  const mailtoLink = "mailto:contato@isitsafe.com.br" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;

    setTimeout(function() {
      if (document.hasFocus()) {
        showMessage("Mensagem enviada com sucesso!", "#6202EE");
      } else {
        showMessage("Erro ao enviar mensagem!", "#EB3D3D");
      }
    }, 2000);
  });
});
