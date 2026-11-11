const STORAGE_KEY = "feedback-form-state";

const formState = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const parsed = JSON.parse(savedData);
    formState.email = parsed.email ?? "";
    formState.message = parsed.message ?? "";
  } catch (error) {
    console.error("Invalid data in localStorage:", error);
  }
}

form.elements.email.value = formState.email;
form.elements.message.value = formState.message;


form.addEventListener("input", (event) => {
  const { name, value } = event.target;

  if (name !== "email" && name !== "message") return;

  formState[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
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