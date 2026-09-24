import { GetService } from "@apis/homepage.api";
import { IService } from "@interfaces/IService";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkModeContext } from "@components/DarkModeContext";
import "../../products.css";

// Module-level cache: survives route changes within the same session.
// Populated on first fetch; every subsequent mount reads it synchronously
// so the skeleton never flickers again after the first visit.
let _cachedServices: IService[] | null = null;

// Client-side sort order — first match in the list = leftmost tab.
// Unknown service IDs (not in the map) are pushed to the rightmost position.
const SERVICE_ORDER: Record<string, number> = {
  "3drender": 0,
  "3dmodel": 1,
  "interactiveapp": 2,
  "3dmapping": 3,
};

const HeaderProduct = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const { isDarkMode } = useDarkModeContext();

  const [services, setServices] = useState<IService[]>(_cachedServices ?? []);
  const [isLoaded, setIsLoaded] = useState(_cachedServices !== null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    // Already have cached data — nothing to do.
    if (_cachedServices !== null) return;
    // Guard against double-fetch in StrictMode.
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    GetService().then((res) => {
      const filtered = (res.data || []).filter(
        (s: IService) => s.isShowInProducts
      );
      // Sort by SERVICE_ORDER so tabs appear in the desired sequence
      const sorted = [...filtered].sort((a, b) => {
        const aOrd = SERVICE_ORDER[a.id] ?? 99;
        const bOrd = SERVICE_ORDER[b.id] ?? 99;
        return aOrd - bOrd;
      });
      _cachedServices = sorted;
      setServices(sorted);
      setIsLoaded(true);
    });
  }, []);

  const currentServiceId = location.pathname.split("/").pop();
  const activeIndex = services.findIndex((s) => s.id === currentServiceId);

  const themeClass = isDarkMode ? "products-tab-bar--light" : "products-tab-bar--dark";
  const btnThemeClass = isDarkMode ? "products-tab-btn--light" : "products-tab-btn--dark";

  return (
    <nav
      className={`products-tab-bar ${themeClass}`}
      aria-label="Product categories"
    >
      <div className="products-tab-inner">
        {!isLoaded
          ? /* Skeleton — same height as real tabs, no layout shift */
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="products-skeleton"
                style={{
                  width: `${110 + i * 24}px`,
                  height: "48px",
                  borderRadius: 0,
                  flexShrink: 0,
                  clipPath: `polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)`,
                  marginLeft: i === 0 ? 0 : "-10px",
                }}
              />
            ))
            : services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  className={[
                    "products-tab-btn",
                    btnThemeClass,
                    isActive ? "products-tab-btn--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => navigator(`/products/${service.id}`)}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={service.title}
                >
                  <span className="products-tab-btn-label">{service.title}</span>
                </button>
              );
            })}
      </div>
    </nav>
  );
};

export default HeaderProduct;
