export interface Config {
  navColor: string;
  textColor: string;
  hoverColor: string;
  mobileActiveColor: string;
  mobileSidebarHeaderColor: string;
  mobileBorderColor: string;
  buyButtonColor: string;
  burgerColor: string;
  logo: string;
  font: string;
  free: boolean;
  navLinks: NavLinks[];
  buyButtonConfig: buyButtonConfig;
}

export interface NavLinks {
  main: string;
  mainLink?: string;
  subsections?: Subsections[];
}

interface Subsections {
  title?: string;
  subTitles: Subtitles[];
}

export interface Subtitles {
  title: string;
  link: string;
}

export interface buyButtonConfig {
  eaApp?: string;
  origin?: string;
  steam?: string;
  ps4?: string;
  ps5?: string;
  xbox?: string;
  switch?: string;
  egs?: string;
}

//LOCAL FOOTER INTERFACE
export interface LocalFooterType {
  bgColor: string;
  textColor: string;
  linkColor: string;
  hover: string;
  links: Links[];
  title?: string;
  condition: Condition[];
  social: Social[];
}

export interface Links {
  name: string;
  path?: any;
}

export interface Condition {
  id: number;
  value: string;
}

export interface Social {
  icon: any;
  link: string;
}
