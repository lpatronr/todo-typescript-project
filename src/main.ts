import createTodo from "./dom/createTodo";
import { elements } from "./dom/elements";
import { hideError, showError } from "./dom/errorHandlers";
import updateItemsLeft from "./dom/updateItemsLeft";

elements.form.onsubmit = (e) => {
  e.preventDefault();
  hideError();

  const { value } = elements.todoInput;
  const trimmedValue = value.trim();

  if (trimmedValue.length < 5) {
    showError("Todo must be at least 5 characters long");
    return;
  }

  const { li } = createTodo(trimmedValue);
  elements.todoContainer.appendChild(li);
  updateItemsLeft();

  elements.todoInput.value = "";
};

elements.cancelTodo.onclick = () => {
  elements.todoInput.value = "";
};

elements.clearCompleted.onclick = () => {
  const { todoContainer } = elements;
  const completedInputs = todoContainer.querySelectorAll("input:checked");

  completedInputs.forEach((input) => {
    const label = input.parentElement;
    const li = label?.parentElement;
    li?.remove();
  });
};
