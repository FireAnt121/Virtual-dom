export type elementType = 'div';

export type vElement = {
  tagName: elementType,
  attrs: {
    id: string
  },
  children: any[]
}

export interface AppType extends Pick<vElement, 'attrs' | 'children'> { }
