export interface ISilderBanner {
  id: number;
  img: string;
  title: string;
  link: string;
}
export interface ICelebrate {
  id: number;
  img: string;
  type: string;
  date: string;
  title: string;
  description: string;
}

export interface IEpisodeStills {
  id: number;
  img: string;
}

export interface IPaP {
  id: number;
  img: string;
  type: string;
  date: string;
  title: string;
  description?: string;
}

export interface ICharacter {
  id: number;
  character: string;
  name: string;
  background: string;
  description: string;
}

export interface IOurGames {
  id: number;
  background: string;
  logo: string;
  name: string;
  title: string;
  description: string;
  link: string;
}
