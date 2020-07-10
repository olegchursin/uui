function uuiHideUnstyled({
  hiddenClassname = 'no-fouc',
  preLoadedClassname = 'pre-fouc',
  hiddenElementClassname = 'fouc-hidden',
  hiddenRemovedClassname = 'fouc-removed',
  rootHiddenElement = document.documentElement
} = {}) {
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.innerHTML = `.${hiddenClassname} { display: none; }`;
  document.getElementsByTagName('head')[0].appendChild(styleEl);
  if (rootHiddenElement !== null) {
    rootHiddenElement.className = hiddenClassname;
  }
  function handleContentLoaded() {
    const preElements = document.getElementsByClassName(preLoadedClassname);
    for (let i = 0; i < preElements.length; i++) {
      const pre = preElements[i];
      const parent = pre.parentElement;
      if (parent) {
        parent.removeChild(pre);
      }
    }
    if (rootHiddenElement !== null) {
      rootHiddenElement.classList.remove(hiddenClassname);
    }
    const hiddenElements = document.getElementsByClassName(
      hiddenElementClassname
    );
    for (let i = 0; i < hiddenElements.length; i++) {
      const hidden = hiddenElements[i];
      hidden.classList.add(hiddenRemovedClassname);
      hidden.classList.remove(hiddenElementClassname);
    }
  }
  document.addEventListener('DOMContentLoaded', handleContentLoaded);
}
(window as any)['uuiHideUnstyled'] = uuiHideUnstyled;
