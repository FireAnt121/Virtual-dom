import { vElement, AppType, elementTags } from "../types";

export const createElement = (tagName: elementTags, { attrs, children }: AppType): vElement => {
  return { tagName, attrs, children }
}

