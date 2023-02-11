export function getElement<T extends HTMLElement>(query: string): T {
  const element = document.querySelector<T>(query);

  if (element === null) {
    throw new Error(`Element not found: ${query}`);
  }

  return element;
}

export const elements = {
  todoInput: getElement<HTMLInputElement>("#todo-input"),
  cancelTodo: getElement<HTMLButtonElement>("#cancel-todo"),
  form: getElement<HTMLFormElement>("form"),
  todoContainer: getElement<HTMLDivElement>("#todo-container"),
  itemsLeft: getElement<HTMLParagraphElement>("#items-left"),
  clearCompleted: getElement<HTMLButtonElement>("#clear-completed"),
  errorPopup: getElement<HTMLDivElement>("#error-popup"),
  errorPopupText: getElement<HTMLSpanElement>("#error-message"),
};
