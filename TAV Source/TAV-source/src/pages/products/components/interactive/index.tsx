/* COMMENTED OUT FOR DUP PREVENTION */
/*import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";

import View1 from "@pages/view1";
import FadeImage from "@components/FadeImage";
import LazyVideo from "@components/LazyVideo";
import { isImageFile, getPosterUrl } from "@utils/mediaUtils";
import { GetInteractiveApp } from "@apis/homepage.api";
import { I3DRender } from "@interfaces/IProduct";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import "../../products.css";

const i18n = {
  title: {
    vi: "CÁC DỰ ÁN INTERACTIVE APP",
    en: "Interactive App Projects",
    ja: "インタラクティブアプリプロジェクト",
  },
  subtitle: {
    vi: "Trải nghiệm không gian trước khi xây dựng — ứng dụng tương tác thời gian thực của TAV",
    en: "Experience spaces before they're built — TAV's real-time interactive applications",
    ja: "建設前に空間を体験する — TAVのリアルタイムインタラクティブアプリ",
  },
};

const INTERACTIVE = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>("");
  const [dataApi, setDataApi] = useState<I3DRender[]>([]);

  useEffect(() => {
    GetInteractiveApp().then((res) => {
      setDataApi(res.data?.data || []);
    });
  }, []);

  const open = (media: string, name: string) => {
    setSelectedImage(media);
    setSelectedName(name);
    onOpen();
  };

  const allMedia = dataApi.map((item) => item.media);
  const mediaDescriptions = Object.fromEntries(
    dataApi.map((item) => [item.media, item.description])
  );
  const colorText = isDarkMode ? "#000" : "#fff";
  const colorMuted = isDarkMode ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)";

  return (
    <div className="products-page">
      {/* Section heading * /}
      <motion.div
        className="products-section-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <h1 className="products-section-title" style={{ color: colorText }}>
          {i18n.title[isLanguage as keyof typeof i18n.title] ?? i18n.title.en}
        </h1>
        <p className="products-section-subtitle" style={{ color: colorMuted }}>
          {i18n.subtitle[isLanguage as keyof typeof i18n.subtitle] ?? i18n.subtitle.en}
        </p>
      </motion.div>

      {/* 2-column grid * /}
      <motion.div
        className="products-interactive-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {dataApi.map((item, idx) => (
          <motion.div
            key={item._id ?? idx}
            className="products-interactive-item"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.4, 0, 0.2, 1] }}
            role="button"
            tabIndex={0}
            aria-label={item.name || `Interactive app ${idx + 1}`}
            onClick={() => open(item.media, item.name ?? "")}
            onKeyDown={(e) => {
              if (e.key === "Enter") open(item.media, item.name ?? "");
            }}
          >
            {isImageFile(item.media) ? (
              <FadeImage
                src={item.media}
                alt={item.name || `Interactive app ${idx + 1}`}
                imgClassName="products-interactive-media"
                wrapStyle={{ borderRadius: 0, background: "transparent" }}
                thumbSize="900x506"
              />
            ) : (
              <LazyVideo
                src={item.media}
                poster={getPosterUrl(item.media)}
                aspectRatio="16/9"
                className="products-interactive-media"
                wrapStyle={{ borderRadius: 0, aspectRatio: "16/9" }}
                aria-hidden="true"
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      <View1
        isOpen={isOpen}
        onClose={onClose}
        selectedImage={selectedImage}
        mediaList={allMedia}
        mediaDescriptions={mediaDescriptions}
        name={selectedName}
      />
    </div>
  );
};

export default INTERACTIVE;
*/