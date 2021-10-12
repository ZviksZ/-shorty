const isBrowserTabInView = () => document.hidden;

const elementIsInFocus = (el: HTMLElement) => (el === document.activeElement);

const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);

const goToTop = () => window.scrollTo(0, 0);

const redirect = (url: string) => location.href = url

const getSelectedText = () => window.getSelection()?.toString()

const getQueryParameters = (url: string) => {
  url = JSON.parse('{"' + decodeURI(url.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
  return JSON.stringify(url);
};

const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight

export default  {
  isBrowserTabInView,
  elementIsInFocus,
  isAppleDevice,
  goToTop,
  redirect,
  getSelectedText,
  getQueryParameters,
  scrolledToBottom
}
