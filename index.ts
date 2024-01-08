import DOMRoot from "./core/root";

DOMRoot.createRoot(document.getElementById('root')!).render({
  tagName: 'div',
  attrs: {
    id: 'app'
  }
});

