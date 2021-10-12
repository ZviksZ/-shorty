const isBrowserTabInView = () => document.hidden;

const elementIsInFocus = (el: Element) => (el === document.activeElement);

const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

const goToTop = () => window.scrollTo(0, 0);

module.exports = {
  isBrowserTabInView,
  elementIsInFocus,
  isAppleDevice,
  goToTop
}
