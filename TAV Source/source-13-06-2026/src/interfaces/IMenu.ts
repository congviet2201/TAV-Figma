export interface IMenu {
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  hasIcon?: boolean;
  link: string;
  activePath?: string;
}
