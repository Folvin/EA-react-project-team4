export interface Config {
  navColor: string;
  textColor: string;
  hoverColor: string;
  buyButtonColor: string;
  burgerColor: string;
  logo: string;
  navLinks: NavLinks[];
  buyButtonConfig: buyButtonConfig;
}

interface NavLinks {
  main: string;
  mainLink?: string;
  subsections?: Subsections[];
}

interface Subsections {
  title?: string;
  subTitles: Subtitles[];
}

interface Subtitles {
  title: string;
  link: string;
}

interface buyButtonConfig {
  eaApp?: string;
  origin?: string;
  steam?: string;
  ps4?: string;
  ps5?: string;
  xbox?: string;
  switch?: string;
}