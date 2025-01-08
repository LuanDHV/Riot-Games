export interface IFeaturedNews {
  id: number;
  img: string;
  type: string;
  date: string;
  title: string;
  description: string;
}

export interface IChooseYourChampion {
  id: number;
  role: string;
  background: string;
  icon: string;
  champion: string;
  description: string;
  imgChampion: string;
}

export interface IMultipleWaysToPlay {
  id: number;
  way: string;
  background: string;
  icon: string;
  video: string;
  title: string;
  description: string;
}
