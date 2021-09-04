export interface ILink {
  text: string
  href: string
  isButton?: boolean
  type: ELinkTypes
}

export enum ELinkTypes {
  SECTION = 'SECTION',
  EXTERNAL = 'EXTERNAL',
  INTERNAL = 'INTERNAL',
}

export const INITIAL_LINK: ILink = {
  text: 'FILL_IN',
  href: '/',
  type: ELinkTypes.INTERNAL,
}
