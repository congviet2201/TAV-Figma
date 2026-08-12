/* COMMENTED OUT FOR DUP PREVENTION */
/*import { useEffect, useRef, useState } from "react";
import { useDarkModeContext } from "@components/DarkModeContext";
import "./LazyVideo.css";

interface LazyVideoProps {
  src: string;
  poster?: string;
  aspectRatio?: string;
  className?: string;
  style?: React.CSSProperties;
  wrapClassName?: string;
  wrapStyle?: React.CSSProperties;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  onClick?: React.MouseEventHandler<HTMLVideoElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  tabIndex?: number;
  role?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
  onPosterLoaded?: () => void;
  onVideoLoaded?: () => void;
}

const LazyVideo = ({
  src,
  poster,
  aspectRatio = "16/9",
  className = "",
  style,
  wrapClassName = "",
  wrapStyle,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  onClick,
  onKeyDown,
  tabIndex,
  role,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  onPosterLoaded,
  onVideoLoaded,
}: LazyVideoProps) => {
  const { isDarkMode } = useDarkModeContext();
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterImgRef = useRef<HTMLImageElement>(null);
  const [activeSrc, setActiveSrc] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || !src) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setActiveSrc(src);
          if (autoPlay && videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: "300px", threshold: 0 }
    );

    observer.observe(wrap);
    return () => observer.unobserve(wrap);
  }, [src, autoPlay]);

  const handleLoaded = () => {
    setIsReady(true);
    onVideoLoaded?.();
    if (posterImgRef.current) {
      posterImgRef.current.style.opacity = "0";
    }
  };

  const bgClass = isDarkMode ? "products-lazy-video-wrap--light-bg" : "";

  return (
    <div
      ref={wrapRef}
      className={`products-lazy-video-wrap ${bgClass} ${wrapClassName}`}
      style={{ aspectRatio, ...wrapStyle }}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      {poster && (
        <img
          ref={posterImgRef}
          src={poster}
          alt=""
          aria-hidden="true"
          onLoad={() => onPosterLoaded?.()}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 1,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />
      )}

      {activeSrc && (
        <video
          ref={videoRef}
          src={activeSrc}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          className={`products-lazy-video ${isReady ? "products-lazy-video--ready" : ""} ${className}`}
          style={style}
          onClick={onClick}
          onLoadedData={handleLoaded}
        />
      )}
    </div>
  );
};

export default LazyVideo;
*/