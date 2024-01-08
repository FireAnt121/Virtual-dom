export type elementTags = 'div';
export type elementIntrinsicTypes = string;
export type elementTypes = vElement;



export type vElement = {
  tagName: elementTags,
  attrs: {
    id: string
  },
  children?: elementTypes[]
}

export interface AppType extends Pick<vElement, 'attrs' | 'children'> { }
