

function disableFormReload() {
  let form = document.getElementById("form_agreement");
  form.addEventListener("submit", (e) => e.preventDefault());
}

function validateInputs() {
  let form = document.getElementById("form_agreement");

  form.addEventListener("focus", e => e.target.style.background = "#80dfff", true);
  form.addEventListener("focus", e => e.target.style.background = "", true);
}

function openModal() {
  let modal = document.getElementsByClassName("modal")[0];
  let background = document.getElementsByClassName("background")[0];

  modal.classList.add("modal-active");
  background.classList.add("background-active");
  document.body.classList.add("hide-scrollbar");
}

function closeModal() {
  let modal = document.getElementsByClassName("modal")[0];
  let background = document.getElementsByClassName("background")[0];

  modal.classList.remove("modal-active");
  background.classList.remove("background-active");
  document.body.classList.remove("hide-scrollbar");
}

function sendData() {
  let form = document.getElementById("form_agreement");

  let name = form["name"].value;
  let subject = form["subject"].value;
  let type = form["type"].value;

  let obj = {
     name,
     subject,
     type,
  };

  console.table(obj);

  closeModal();
}
