export interface IBlog {
  _id?: string;
  coverMedia: string;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  author: string;
  createdAt: string;
  blogCategory: {
    name: { vi: string; en: string; ja: string };
  };

  headerContent: {
    vi: string[];
    en: string[];
    ja: string[];
  };
  data: {
    vi: string;
    en: string;
    ja: string;
  };
  subTitle: {
    vi: string;
    en: string;
    ja: string;
  };
  //   content?: IBlogContentBlock[];
}

export interface IBlogCategory {
  _id?: string;
  name: {
    vi: string;
    en: string;
    ja: string;
  };
}
