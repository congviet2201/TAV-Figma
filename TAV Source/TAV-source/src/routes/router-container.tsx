/* COMMENTED OUT FOR DUP PREVENTION */
/*import { Route, Routes, Navigate } from "react-router-dom";
import layoutRoutes from "@configs/layoutRoutes";
import Layout from "@pages/layout";
import { Suspense, useState } from "react";
import AdminLayout from "@modules/admin/layouts/admin";
import AuthLayout from "@modules/admin/layouts/auth";
import { ChakraProvider } from "@chakra-ui/react";
import { useDarkModeContext } from "@components/DarkModeContext";
import { defaultTheme } from "@themes/defaut-theme";
import { darkTheme } from "@themes/dark-theme";
import initialTheme from "@modules/admin/theme/theme";
import CheckLogin from "@modules/admin/components/checklogin";

// Products
import ProductsLayout from "@pages/products/ProductsLayout";
import MAPPING_3D from "@pages/products/components/3d_mapping";
import Model3D from "@pages/products/components/3d_model";
import Render3D from "@pages/products/components/3d_render";
import INTERACTIVE from "@pages/products/components/interactive";

const RouterContainer = () => {
  const { isDarkMode } = useDarkModeContext();
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  return (
    <Suspense>
      <Routes>
        <Route
          path="/*"
          element={
            <ChakraProvider theme={isDarkMode ? defaultTheme : darkTheme}>
              <Layout />
            </ChakraProvider>
          }
        >
          {/* Flat routes * /}
          {layoutRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}

          {/*
            Products — nested routes share a single ProductsLayout wrapper.
            HeaderProduct lives in ProductsLayout and mounts ONCE for the entire
            /products/* subtree, so it never re-renders when switching tabs.
          * /}
          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<Navigate to="/products/3drender" replace />} />
            <Route path="3dmapping" element={<MAPPING_3D />} />
            <Route path="3drender" element={<Render3D />} />
            <Route path="3dmodel" element={<Model3D />} />
            <Route path="interactiveapp" element={<INTERACTIVE />} />
          </Route>
        </Route>

        {/* Auth layout * /}
        <Route
          path="auth/*"
          element={
            <ChakraProvider theme={currentTheme}>
              <AuthLayout />
            </ChakraProvider>
          }
        />

        {/* Admin layout * /}
        <Route
          path="admin/*"
          element={
            <CheckLogin>
              <ChakraProvider theme={currentTheme}>
                <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
              </ChakraProvider>
            </CheckLogin>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default RouterContainer;
*/