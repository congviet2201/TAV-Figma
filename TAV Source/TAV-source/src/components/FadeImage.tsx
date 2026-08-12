/* COMMENTED OUT FOR DUP PREVENTION */
/*import { useEffect, useRef, useState } from "react";
import { useDarkModeContext } from "@components/DarkModeContext";
import ThumbImage from "@components/ThumbImage";
import "./FadeImage.css";

interface FadeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  thumbSize?: string;
  wrapClassName?: string;
  wrapStyle?: React.CSSProperties;
  imgClassName?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  tabIndex?: number;
  role?: string;
  "aria-label"?: string;
  loadFullRes?: boolean;
  noLazy?: boolean;
  placeholderBlur?: string;
}

const FadeImage = ({
  src,
  alt = "",
  thumbSize,
  wrapClassName = "",
  wrapStyle,
  imgClassName = "",
  onKeyDown,
  tabIndex,
  role,
  "aria-label": ariaLabel,
  onClick,
  style,
  loadFullRes = false,
  noLazy = false,
  placeholderBlur,
}: FadeImageProps) => {
  const { isDarkMode } = useDarkModeContext();
  const wrapRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLImageElement>(null);
  const [activeSrc, setActiveSrc] = useState("");
  const [fullResReady, setFullResReady] = useState(false);

  useEffect(() => {
    if (noLazy) {
      const raf = requestAnimationFrame(() => {
        setActiveSrc(src);
      });
      return () => cancelAnimationFrame(raf);
    }

    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSrc(src);
          observer.unobserve(el);
        }
      },
      { rootMargin: "500px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [src, noLazy]);

  useEffect(() => {
    if (!loadFullRes || !activeSrc) return;
    setFullResReady(false);
    const img = new Image();
    img.onload = () => setFullResReady(true);
    img.src = src;
  }, [loadFullRes, activeSrc, src]);

  const handleThumbLoad = () => {
    if (thumbRef.current) {
      thumbRef.current.classList.add("products-fade-img--loaded");
    }
  };

  const handleThumbRef = (el: HTMLImageElement | null) => {
    (thumbRef as React.MutableRefObject<HTMLImageElement | null>).current = el;
    if (el && el.complete && el.naturalWidth > 0) {
      el.classList.add("products-fade-img--loaded");
    }
  };

  const handleFullRef = (el: HTMLImageElement | null) => {
    if (el && el.complete && el.naturalWidth > 0) {
      el.classList.add("products-fade-img--loaded");
    }
  };

  const bgClass = isDarkMode
    ? "products-fade-wrap--light-bg"
    : "";

  const imgClasses = `products-fade-img ${imgClassName}`;

  const thumbStyle = placeholderBlur && loadFullRes && !fullResReady
    ? { ...style, filter: `blur(${placeholderBlur})` }
    : style;

  return (
    <div
      ref={wrapRef}
      className={`products-fade-wrap ${bgClass} ${wrapClassName}`}
      style={wrapStyle}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
      onClick={onClick as React.MouseEventHandler<HTMLDivElement>}
    >
      {activeSrc && (
        <>
          <ThumbImage
            ref={handleThumbRef as any}
            src={activeSrc}
            alt={alt}
            thumbSize={thumbSize}
            className={imgClasses}
            style={thumbStyle}
            onLoad={handleThumbLoad}
          />
          {loadFullRes && fullResReady && (
            <img
              ref={handleFullRef as any}
              src={src}
              alt={alt}
              className={imgClasses}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: style?.objectFit ?? "cover",
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FadeImage;
*/