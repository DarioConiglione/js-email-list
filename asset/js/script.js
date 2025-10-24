 const emailsEL = document.getElementById("emails");
 

 function randomEmails() {
 emailsEL.innerHTML = "";
 
    for (let i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

        .then(response => {
          const email = response.data.response;
          const li = document.createElement("li");
          li.textContent = email;
          emailsEL.appendChild(li);
          
        })      

        .catch(error => {
          console.error("Errore:", error);
        })
    }
}

const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", randomEmails)

