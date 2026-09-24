import { Outlet } from "react-router-dom";
import HeaderProduct from "./components/header";
import ScrollTopButton from "@components/scrollTop";

/**
 * ProductsLayout
 *
 * Shared wrapper for all /products/* routes.
 * HeaderProduct renders ONCE here and is never unmounted when navigating
 * between product tabs — eliminating the skeleton re-flash on every route change.
 */
const ProductsLayout = () => {
  return (
    <>
      <HeaderProduct />
      <Outlet />
      <ScrollTopButton />
    </>
  );
};

export default ProductsLayout;
