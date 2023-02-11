import { elements } from "./elements";

function updateItemsLeft(): void {
  const itemsLeft = elements.todoContainer.querySelectorAll("input:not(:checked)").length;
  elements.itemsLeft.textContent = `${itemsLeft} item${itemsLeft === 1 ? "" : "s"} left`;
}

export default updateItemsLeft;
