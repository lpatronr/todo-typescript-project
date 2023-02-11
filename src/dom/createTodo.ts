import updateItemsLeft from "./updateItemsLeft";

export default function createTodo(todo: string) {
  const li = document.createElement("li");
  li.className = "bg-neutral-800 px-4 py-2 flex items-center";

  const label = document.createElement("label");

  const input = document.createElement("input");
  input.className =
    "w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600";
  input.type = "checkbox";
  input.onchange = () => {
    updateItemsLeft();
  };

  const span = document.createElement("span");
  span.className = "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";
  span.textContent = todo;

  label.appendChild(input);
  label.appendChild(span);

  const button = document.createElement("button");
  button.className =
    "ml-4 focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-2 py-1.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900";
  button.textContent = "Delete";
  button.onclick = () => {
    li.remove();
    updateItemsLeft();
  };

  li.appendChild(label);
  li.appendChild(button);

  return {
    li,
    label,
    input,
    button,
  };
}
