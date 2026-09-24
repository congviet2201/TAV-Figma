import { useEffect, useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

import View1 from "@pages/view1";
import FadeImage from "@components/FadeImage";
import LazyVideo from "@components/LazyVideo";
import { isImageFile, getPosterUrl } from "@utils/mediaUtils";
import { Get3DModel } from "@apis/homepage.api";
import { I3DRender } from "@interfaces/IProduct";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import "../../products.css";

const i18n = {
  title: { vi: "THƯ VIỆN 3D MODEL", en: "3D Model Gallery", ja: "3Dモデルギャラリー" },
  subtitle: {
    vi: "Các mô hình 3D chi tiết được TAV thực hiện cho kiến trúc, nội thất và sản phẩm",
    en: "Detailed 3D models crafted by TAV for architecture, interiors, and products",
    ja: "建築・インテリア・プロダクト向けにTAVが制作した精密な3Dモデル",
  },
};

const Model3D = () => {
  const { isLanguage } = useLanguage();
  const { isDarkMode } = useDarkModeContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>("");
  const [dataApi, setDataApi] = useState<I3DRender[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Get3DModel().then((res) => {
      setDataApi(res.data?.data || []);
    });
  }, []);

  // Infinite scroll: fires 800px before the sentinel enters the viewport.
  // 800px gives the new batch time to mount and start loading on mobile 4G
  // before the user scrolls to where the previous batch ended.
  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 9);
        }
      },
      { rootMargin: "800px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
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
  const visible = dataApi.slice(0, visibleCount);
  const colorText = isDarkMode ? "#000" : "#fff";
  const colorMuted = isDarkMode ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)";

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

      {/* Masonry gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Masonry
          breakpointCols={{ default: 3, 1100: 3, 900: 2, 600: 2, 0: 1 }}
          className="products-masonry"
          columnClassName="products-masonry-col"
        >
          {visible.map((item, idx) =>
            isImageFile(item.media) ? (
              <FadeImage
                key={item._id ?? idx}
                src={item.media}
                alt={item.name || `3D model ${idx + 1}`}
                wrapClassName="products-gallery-item"
                wrapStyle={{ marginBottom: "1.6rem" }}
                tabIndex={0}
                role="button"
                aria-label={item.name || `3D model ${idx + 1}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") open(item.media, item.name ?? "");
                }}
                onClick={() => open(item.media, item.name ?? "")}
              />
            ) : (
              <div
                key={item._id ?? idx}
                className="products-gallery-item"
                style={{ marginBottom: "1.6rem" }}
              >
                <LazyVideo
                  src={item.media}
                  poster={getPosterUrl(item.media)}
                  aspectRatio="16/9"
                  wrapStyle={{ borderRadius: "var(--tav-border-radius-media)" }}
                  tabIndex={0}
                  role="button"
                  aria-label={item.name || `3D model video ${idx + 1}`}
                  onClick={() => open(item.media, item.name ?? "")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") open(item.media, item.name ?? "");
                  }}
                />
              </div>
            )
          )}
        </Masonry>
      </motion.div>

      {/* Infinite scroll sentinel */}
      <div ref={loaderRef} style={{ height: "1px" }} />

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

export default Model3D;
