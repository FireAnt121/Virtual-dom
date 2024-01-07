import { vElement } from "../types";
import { createElement } from "./createElement";

class DOMRoot {
  private static root: DOMRoot;
  private virtualDOM: vElement = {};

  private constructor() { };

  public static createRoot(): DOMRoot {
    if (!DOMRoot.root) {
      DOMRoot.root = new DOMRoot();
    }
    return DOMRoot.root;
  }

  public render() {
    this.virtualDOM = createElement(
      'div', {
      attrs: {
        id: 'app'
      },
      children: [
        "hello"
      ]
    })
  }
}

export default DOMRoot;
