import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";

import View1 from "@pages/view1";
import LazyVideo from "@components/LazyVideo";
import { Get3DMapping } from "@apis/homepage.api";
import { getPosterUrl } from "@utils/mediaUtils";
import { I3DRender } from "@interfaces/IProduct";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import "../../products.css";

const i18n = {
  title: {
    vi: "CÁC DỰ ÁN 3D MAPPING",
    en: "3D Mapping Projects",
    ja: "3Dマッピングプロジェクト",
  },
  subtitle: {
    vi: "Những câu chuyện kiến trúc được chiếu lên bề mặt công trình — quy mô thực sự",
    en: "Architectural narratives projected onto real surfaces — at monumental scale",
    ja: "建築の物語を実際の構造物に投影 — モニュメンタルなスケールで",
  },
};

const MAPPING_3D = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dataApi, setDataApi] = useState<I3DRender[]>([]);

  useEffect(() => {
    Get3DMapping().then((res) => {
      setDataApi(res.data?.data || []);
    });
  }, []);

  const allMedia = dataApi.map((item) => item.media);
  const mediaDescriptions = Object.fromEntries(
    dataApi.map((item) => [item.media, item.description])
  );
  const colorText = isDarkMode ? "#000" : "#fff";
  const colorMuted = isDarkMode ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)";
  const nameMuted = isDarkMode ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.75)";

  return (
    <div className="products-page">
      {/* Section heading */}
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

      {/* Full-width lazy videos */}
      {dataApi.map((item, index) => (
        <motion.div
          key={item._id ?? index}
          className="products-mapping-item"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
        >
          {item.name && (
            <p className="products-mapping-name" style={{ color: nameMuted }}>
              {item.name}
            </p>
          )}
          <LazyVideo
            src={item.media}
            poster={getPosterUrl(item.media)}
            aspectRatio="16/9"
            wrapClassName="products-mapping-video-wrap"
            wrapStyle={{ borderRadius: "var(--tav-border-radius-card)" }}
            className="products-mapping-video"
            tabIndex={0}
            role="button"
            aria-label={item.name ? `View: ${item.name}` : "View mapping project"}
            onClick={() => {
              setSelectedImage(item.media);
              onOpen();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSelectedImage(item.media);
                onOpen();
              }
            }}
          />
        </motion.div>
      ))}

      <View1
        isOpen={isOpen}
        onClose={onClose}
        selectedImage={selectedImage}
        mediaList={allMedia}
        mediaDescriptions={mediaDescriptions}
        name=""
      />
    </div>
  );
};

export default MAPPING_3D;
