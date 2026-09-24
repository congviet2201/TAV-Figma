export interface IIntroduce {
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  cover: string;
  subTitle: {
    vi: string;
    en: string;
    ja: string;
  };
  content: {
    vi: string;
    en: string;
    ja: string;
  }[];
  video: string;
}

export interface IListImg {
  image: string[];
  
}

export interface ILeader {
  _id?: string;
  image: string;
  name: {
    vi: string;
    en: string;
    ja?: string;
  };
  position: {
    vi: string;
    en: string;
    ja?: string;
  };
}

export interface IMember {
  _id?: string;
  image: string;
  name: {
    vi: string;
    en: string;
    ja?: string;
  };
  position: {
    vi: string;
    en: string;
    ja?: string;
  };
}
