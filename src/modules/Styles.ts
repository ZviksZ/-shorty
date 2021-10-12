const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const toggleEl = (element: HTMLElement) => element.style.display = (element.style.display === "none" ? "block" : "none")

export default {
  isDarkMode,
  toggleEl
}
