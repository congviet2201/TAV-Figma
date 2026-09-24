export interface IService {
  _id?: string;
  image: string;
  icon: string;
  video: string;
  title: string;
  id: string;
  description: { vi: string; en: string; ja: string };
  descriptionMenu: { vi: string; en: string; ja: string };
  subTitle: { vi: string; en: string; ja: string };
  isShowInProducts: boolean;
}

export interface IMenuMain {
  img: string;
  title: string;
  description: { vi: string; en: string; ja: string };
  id: string;
}
