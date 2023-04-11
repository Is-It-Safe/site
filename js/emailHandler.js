$(document).ready(function() {

  const form = document.getElementById("emailForm");
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
  
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
     
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const pronouns = document.getElementById("pronouns").value;
    const message = document.getElementById("message").value;
    const subject = "Menssagem de " + name
    const apiKey = "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"
  
    const body = JSON.stringify({
      sender: {
        name: name,
        email: email
      },
      to: [{ email: "contato@isitsafe.com.br"}],
      templateId: 1,
      subject:subject,
      params: {
        name: name,
        pronouns: pronouns,
        message: message,
        email: email
      }
    });
  
    fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: body
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      showMessage("Mensagem enviada com sucesso!", "#6202EE");
    })
    .catch(error => {
      console.error(error);
      showMessage("Erro ao enviar mensagem!", "#EB3D3D");
    });
  });
  
});