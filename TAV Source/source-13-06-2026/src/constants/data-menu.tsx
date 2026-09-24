import { IMenu } from "@interfaces/IMenu";

export const DataMenu: IMenu[] = [
  {
    title: { vi: "Trang Chủ", en: "Home Page", ja: "ホームページ" },
    link: "/",
  },
  {
    title: { vi: "Về chúng tôi", en: "About Us", ja: "私たちについて" },
    link: "/aboutus",
  },
  {
    title: { vi: "Dịch Vụ", en: "Service", ja: "サービス" },
    hasIcon: true,
    link: "/services",
  },
  {
    title: { vi: "Sản Phẩm", en: "Product", ja: "製品" },
    link: "/products/3drender",
    activePath: "/products",
  },
  {
    title: { vi: "Blog", en: "Blog", ja: "ブログ" },
    link: "/blogs",
    activePath: "/blogs",
  },
];

export const DataServiceMenu = [
  {
    id: "3dmapping",
    title: "3D Mapping",
    description: {
      en: "Project 3D images onto the surface of objects.",
      vi: "Trình chiếu hình ảnh 3D lên bề mặt vật thể.",
      ja: "オブジェクトの表面に 3D 画像を投影します。",
    },
  },
  {
    id: "3drender",
    title: "3D Render",
    description: {
      en: "Realistic, sharp 3D perspective.",
      vi: "Phối cảnh 3D chân thực, sắc nét.",
      ja: "リアルでシャープな3Dパースペクティブ。",
    },
  },
  {
    id: "3dmodel",
    title: "3D Model",
    description: {
      en: "Detailed 3D models for design & demonstration.",
      vi: "Mô hình 3D chi tiết cho thiết kế & trình diễn.",
      ja: "設計・デモンストレーション用の詳細な3Dモデル。",
    },
  },
  {
    id: "vr/artour",
    title: "VR/AR Tour",
    description: {
      en: "Virtual reality project tours.",
      vi: "Tham quan dự án bằng công nghệ thực tế ảo.",
      ja: "バーチャルリアリティによるプロジェクトツアー。",
    },
  },
  {
    id: "interactiveapp",
    title: "Interactive App",
    description: {
      en: "Interactive application for visual project exploration.",
      vi: "Ứng dụng tương tác khám phá dự án trực quan.",
      ja: "視覚的にプロジェクトを探索できるインタラクティブなアプリケーション。",
    },
  },
];
