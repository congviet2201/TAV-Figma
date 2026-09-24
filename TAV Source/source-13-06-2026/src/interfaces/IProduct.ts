export interface IProduct {
  name?: string;
  poster: string;
  src: string;
}

export interface IProduct2 {
  name?: string;
  poster: string;
  src: string;
  subMedia: string[];
}
export interface IProduct3 {
  name?: string;
  src: string;
  id: string;
  type: string;
}

export interface Product {
  _id: string;
  name: string;
  media: string;
  subMedia: Array<string>;
  service: { title: string; _id: string };
  description: {
    en: string;
    vi: string;
    ja: string;
  };
  indexShow: number;
  videoHome: string;
}

export interface I3DRender {
  videoHome?: string;
  _id: string;
  service: { title: string; _id: string };
  indexShow: number | null;
  name: string;
  media: string;
  description: { en: string; vi: string; ja: string };
  subServices: {
    _id?: string;
    name: { en: string; vi: string; ja: string };
  };
  subMedia: string[];
  subServiceOption?: {
    _id?: string;
    name: { en: string; vi: string; ja: string };
  };
  removeImages?: string[];
}

export interface IRenderType {
  _id: string;
  name: string;
}
export type IRenderType1 = {
  _id: string;
  name: {
    vi: string;
    en: string;
    ja: string;
  };
}[];

export interface I3DRenderCG {
  _id: string;
  name: { en: string; vi: string; ja: string };
}
