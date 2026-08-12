/* COMMENTED OUT FOR DUP PREVENTION */
/*import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@components/LanguageContext";
import { useDarkModeContext } from "@components/DarkModeContext";
import { useDisclosure } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";

import View from "@pages/view";
import View1 from "@pages/view1";
import FadeImage from "@components/FadeImage";
import LazyVideo from "@components/LazyVideo";
import { isImageFile, getPosterUrl } from "@utils/mediaUtils";
import {
  Get3DRender,
  Get3DRenderCG,
  GetRenderCGType,
} from "@apis/homepage.api";
import { I3DRender, I3DRenderCG } from "@interfaces/IProduct";
import "../../products.css";

const i18n = {
  title: { vi: "CÁC DỰ ÁN 3D RENDER", en: "3D Render Projects", ja: "3Dレンダリングプロジェクト" },
  subtitle: {
    vi: "Kiến trúc được kể qua ánh sáng — những dự án tiêu biểu và mới nhất của TAV",
    en: "Architecture told through light — TAV's signature and latest projects",
    ja: "光で語る建築 — TAVの代表的な最新プロジェクト",
  },
  all: { vi: "Tất cả", en: "All", ja: "すべて" },
};

/* ---- Featured card ---- * /
const FeaturedCard = ({
  item,
  onClick,
}: {
  item: I3DRender;
  onClick: () => void;
}) => (
  <motion.div
    className="products-featured-card"
    role="button"
    tabIndex={0}
    aria-label={item.name}
    onClick={onClick}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
  >
    {isImageFile(item.media) ? (
      <FadeImage
        src={item.media}
        alt={item.name}
        imgClassName="products-featured-media"
        wrapStyle={{ borderRadius: 0, background: "transparent" }}
      />
    ) : (
      <LazyVideo
        src={item.media}
        poster={getPosterUrl(item.media)}
        aspectRatio="16/9"
        className="products-featured-media"
        wrapStyle={{ borderRadius: 0, aspectRatio: "16/9" }}
      />
    )}
    <div className="products-featured-overlay" />
    <div className="products-featured-label">{item.name}</div>
  </motion.div>
);

/* ---- Main component ---- * /
const Render3D = () => {
  const { isDarkMode } = useDarkModeContext();
  const { isLanguage } = useLanguage();
  const location = useLocation();

  const { isOpen: isFeatOpen, onOpen: featOpen, onClose: featClose } = useDisclosure();
  const [featImage, setFeatImage] = useState<string | null>(null);
  const [featSubMedia, setFeatSubMedia] = useState<string[]>([]);
  const [featName, setFeatName] = useState("");

  const { isOpen: isGalOpen, onOpen: galOpen, onClose: galClose } = useDisclosure();
  const [galImage, setGalImage] = useState<string | null>(null);
  const [galName, setGalName] = useState("");

  const [featured, setFeatured] = useState<I3DRender[]>([]);
  const [cgTypes, setCGTypes] = useState<I3DRenderCG[]>([]);
  const [cgItems, setCGItems] = useState<I3DRender[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const loaderRef = useRef<HTMLDivElement>(null);

  const filtered =
    selectedCategory === "All"
      ? cgItems
      : cgItems.filter((item) => item.subServiceOption?.name.en === selectedCategory);

  const visible = filtered.slice(0, visibleCount);

  useEffect(() => {
    Get3DRender().then((r) => setFeatured(r.data || []));
    GetRenderCGType().then((r) => setCGTypes(r.data || []));
    Get3DRenderCG().then((r) => setCGItems(r.data?.data || []));
  }, []);

  useEffect(() => {
    if (location.state) {
      const { image, subMedia, name } = location.state;
      setFeatImage(image);
      setFeatSubMedia(subMedia || []);
      setFeatName(name || "");
      featOpen();
    }
  }, [location.state]);

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
  }, [filtered]); // gắn lại khi danh sách thay đổi để vẫn theo dõi được sentinel

  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCategory]);

  const allCGMedia = cgItems.map((i) => i.media);
  const cgDescriptions = Object.fromEntries(
    cgItems.map((item) => [item.media, item.description])
  );
  const featuredDescriptions = Object.fromEntries(
    featured.map((item) => [item.media, item.description])
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

      {/* Featured projects * /}
      {featured.length > 0 && (
        <motion.div
          className="products-featured-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {featured.map((item, i) => (
            <FeaturedCard
              key={item._id ?? i}
              item={item}
              onClick={() => {
                setFeatImage(item.media);
                setFeatSubMedia(item.subMedia || []);
                setFeatName(item.name ?? "");
                featOpen();
              }}
            />
          ))}
        </motion.div>
      )}

      {/* RENDER CG heading * /}
      <h2 className="products-section-divider" style={{ color: colorText }}>
        RENDER CG
      </h2>

      {/* Category filter * /}
      <div className="products-filter-group" role="group" aria-label="Filter by category">
        {[
          { _id: "All", name: { en: "All", vi: "Tất cả", ja: "すべて" } },
          ...cgTypes,
        ].map((cat) => {
          const label =
            cat._id === "All"
              ? (i18n.all[isLanguage as keyof typeof i18n.all] ?? "All")
              : ((cat.name as any)[isLanguage] ?? cat.name.en);
          const isActive = selectedCategory === (cat._id === "All" ? "All" : cat.name.en);
          return (
            <button
              key={cat._id ?? cat.name.en}
              className={[
                "products-filter-btn",
                isDarkMode ? "products-filter-btn--light" : "products-filter-btn--dark",
                isActive ? "products-filter-btn--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                setSelectedCategory(cat._id === "All" ? "All" : cat.name.en)
              }
              aria-pressed={isActive}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* CG Masonry * /}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Masonry
            breakpointCols={{ default: 3, 1100: 3, 900: 2, 600: 2, 0: 1 }}
            className="products-masonry"
            columnClassName="products-masonry-col"
          >
            {visible.map((item, idx) => {
              const mediaContent = isImageFile(item.media) ? (
                <FadeImage
                  src={item.media}
                  alt={item.name ?? ""}
                  wrapClassName=""
                  wrapStyle={{ borderRadius: 0, background: "transparent" }}
                  imgClassName=""
                />
              ) : (
                <LazyVideo
                  src={item.media}
                  poster={getPosterUrl(item.media)}
                  aspectRatio="16/9"
                  wrapStyle={{ borderRadius: "var(--tav-border-radius-media)" }}
                />
              );

              const commonProps = {
                tabIndex: 0 as const,
                role: "button" as const,
                "aria-label": item.name ?? `Item ${idx + 1}`,
                onKeyDown: (e: React.KeyboardEvent) => {
                  if (e.key === "Enter") {
                    setGalImage(item.media);
                    setGalName(item.name ?? "");
                    galOpen();
                  }
                },
                onClick: () => {
                  setGalImage(item.media);
                  setGalName(item.name ?? "");
                  galOpen();
                },
              };

              return item.name ? (
                <div key={item._id ?? idx} className="products-gallery-item-with-title" style={{ marginBottom: "1.6rem" }} {...commonProps}>
                  {mediaContent}
                  <div className="products-featured-overlay" />
                  <div className="products-featured-label">{item.name}</div>
                </div>
              ) : (
                <div key={item._id ?? idx} className="products-gallery-item" style={{ marginBottom: "1.6rem" }} {...commonProps}>
                  {mediaContent}
                </div>
              );
            })}
          </Masonry>
        </motion.div>
      </AnimatePresence>

      <div ref={loaderRef} style={{ height: "1px" }} />

      {/* Lightbox * /}
      <View
        isOpen={isFeatOpen}
        onClose={featClose}
        imageUrl={featImage}
        subMedia={featSubMedia}
        name={featName}
        mediaDescriptions={featuredDescriptions}
      />
      <View1
        isOpen={isGalOpen}
        onClose={galClose}
        selectedImage={galImage}
        mediaList={allCGMedia}
        mediaDescriptions={cgDescriptions}
        name={galName}
      />
    </div>
  );
};

export default Render3D;
*/