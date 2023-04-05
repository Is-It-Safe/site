
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
//   const apiKey = '0FB4BDD7CBCC4068100B5263B2F86121360BA16F553FFBC42AC3A03D4531E3901C93E06A5F33852DDB0BF128888282B8';
//   const from = 'habs.404@gmail.com';
//   const to = 'habs.404@gmail.com';

//   const url = `https://api.elasticemail.com/v2/email/send?apikey=${apiKey}&from=${from}&to=${to}&subject=${subject}&bodyHtml=${body}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       showMessage("Mensagem enviada com sucesso!", "#6202EE");
//     })
//     .catch(error => {
//       console.error(error);
//       showMessage("Erro ao enviar mensagem!", "#EB3D3D");
//     });
//  });
});
