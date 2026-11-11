const formState = {
    email: "",
    message: "",
}
const savedForm = localStorage.getItem('feedback-form-state')
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.emailInput');
const messageInput = document.querySelector('.messageInput');


if (savedForm) {
    const state = JSON.parse(savedForm)
    emailInput.value = state.email;
    messageInput.value = state.message;
}

form.addEventListener("input", (event) => {
  const { name, value } = event.target;

  if (name !== "email" && name !== "message") return;

  formState[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formState.email || !formState.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formState);

  localStorage.removeItem(STORAGE_KEY);
  formState.email = "";
  formState.message = "";
  form.reset();
});