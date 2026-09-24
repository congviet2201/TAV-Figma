export interface IService {
  poster: string;
  id: string;
  video: string;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  description: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IOurServiceHeader {
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  description: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IProject {
  link: string;
  media?: string;
  videoHome: string;
  name: string;
  service: {
    id: string;
    title: string;
  };
  description: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IHome {
  homePicture: string;
  homeTitle: {
    vi: string;
    en: string;
    ja: string;
  };
}
export interface IHomeReady {
  media: string;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  subTitle: {
    vi: string;
    en: string;
    ja: string;
  };
}
export interface IIntroduceFirst {
  _id: string;
  logoLarge: string;
  logoSmall: string;
  logoLight: string;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IIntroduceSecond {
  _id?: string;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  amount: number | "";
  description: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IIntroduceThrid {
  picture: string;
  description: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IWhyChoose {
  img: string;
  logo: string;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  description: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IPartner {
  img: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
}

export interface ICustomerSay {
  img: string;
  name: string;
  position: string;
  content: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IBlog {
  id: string;
  img: string;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  titleSub?: {
    vi: string;
    en: string;
    ja: string;
  };
  author: string;
  time: string;
  category: {
    vi: string;
    en: string;
    ja: string;
  };
  content?: IBlogContentBlock[];
}

export interface IBlogContentBlock {
  title?: {
    vi: string;
    en: string;
    ja: string;
  };
  description?: (
    | {
        type: "text";
        vi: string;
        en: string;
        ja: string;
      }
    | {
        type: "image";
        url: string;
      }
  )[];
}

export interface ICategoryBlog {
  title: {
    vi: string;
    en: string;
    ja: string;
  };
}

export interface IAdviseService {
  value: string;
  name: string;
}

export interface IListCountry {
  img: string;
  name: string;
  phone: string;
}
