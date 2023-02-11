import { elements } from "./elements";

export function showError(message: string): void {
  const { errorPopup } = elements;
  if (errorPopup.classList.contains("hidden")) {
    errorPopup.classList.remove("hidden");
    errorPopup.textContent = message;
  }
}

export function hideError(): void {
  const { errorPopup } = elements;
  if (!errorPopup.classList.contains("hidden")) {
    errorPopup.classList.add("hidden");
  }
}
