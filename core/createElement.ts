import { vElement, AppType, elementType } from "../types";

export const createElement = (tagName: elementType, { attrs, children }: AppType): vElement => {
  return { tagName, attrs, children }
}

