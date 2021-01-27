export interface INavItem {
  path: string;
  displayName: string;
  children: INavItem[];
}