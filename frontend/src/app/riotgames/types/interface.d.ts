export interface IWhatsHappening {
  id: number;
  title: string;
  icon: string;
  image: string;
  link: string;
  thumbMain: boolean;
}

export interface IGames {
  id: number;
  launchImg: string;
  logotype: string;
  platforms: string[];
  link: string;
}

export interface IEsports {
  id: number;
  img: string;
  logo: string;
  link: string;
}

export interface IEntertainments {
  id: number;
  img: string;
  logo: string;
  link: string;
}

export interface IForge {
  id: number;
  card: string;
  logotype: string;
  platforms: string[];
  link: string;
}

export interface IFooterData {
  title: string;
  link: string;
}

export interface ISocialIcons {
  icon: string;
  alt: string;
  link: string;
}
