import { vElement } from "../types";
import { createElement } from "./createElement";

class DOMRoot {
  private static root: DOMRoot;
  private rootEl: HTMLElement = {} as HTMLElement;

  private constructor() { };

  public static createRoot(el: HTMLElement) {
    if (!DOMRoot.root) {
      DOMRoot.root = new DOMRoot();
    }
    DOMRoot.root.rootEl = el;
    //    DOMRoot.root.setRootElement(rootEl);
    return DOMRoot.root;
  }
  //  private setRootElement(ele: HTMLElement) {

  //    const { tagName, attributes, children } = ele;
  //    const
  //    for(let i  = 0;i<attributes.length; i++){
  //      const attrs =attributes.item(i);
  //      if(attrs){
  //        root_element.setAttribute( jjk, value)
  //attrs.name
  //      }
  //    }
  //  }
  //
  //

  public render(ele: vElement) {
    const { tagName, attrs, children } = ele;
    const root_element = document.createElement(tagName);

    for (const [k, v] of Object.entries(attrs)) {
      root_element.setAttribute(k, v);
    }

    if (children) {
      for (const child of children) {
        root_element.append(this.render(child))
      }
    }

    console.log("ele", root_element);
    return root_element;
  }
}
export default DOMRoot;
