

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
  let size = form["size"].value;
  let complexity = form["complexity"].value;
  let bool = form["bool"].value;
  let author = form["author"].value;

  let obj = {
    size,
    complexity,
    bool,
    author,
  };

  console.table(obj);

  closeModal();
}
