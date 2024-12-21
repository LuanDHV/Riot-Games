export interface ISilderBanner {
  img: string;
  title: string;
  link: string;
}

export interface ICelebrate {
  img: string;
  type: string;
  date: string;
  title: string;
  description: string;
}

export interface IEpisodeStills {
  img: string;
}

export interface IPaP {
  img: string;
  type: string;
  date: string;
  title: string;
  description?: string;
}

export interface ICharacter {
  character: string;
  name: string;
  background: string;
  description: string;
}

export interface IOurGames {
  background: string;
  logo: string;
  name: string;
  title: string;
  description: string;
  link: string;
}
