import { Icon } from "@chakra-ui/react";
import {
  // MdPerson,
  MdHome,
  MdLock,
  MdGroups2,
  MdSupportAgent,
  MdWidgets,
  MdArticle,
} from "react-icons/md";

// Admin Imports
import HomePage from "@modules/admin/views/admin/homepage";
import AboutUs from "@modules/admin/views/admin/aboutus";
import Product from "@modules/admin/views/admin/product";
import Service from "@modules/admin/views/admin/service";

// Auth Imports
import SignInCentered from "@modules/admin/views/auth/signIn";
import Blogs from "./views/admin/blogs";

const routes = [
  {
    name: "HomePage",
    layout: "/admin",
    path: "/homepage",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <HomePage />,
  },
  {
    name: "AboutUs",
    layout: "/admin",
    path: "/aboutus",
    icon: <Icon as={MdGroups2} width="20px" height="20px" color="inherit" />,
    component: <AboutUs />,
    secondary: true,
  },
  {
    name: "Service",
    layout: "/admin",
    icon: (
      <Icon as={MdSupportAgent} width="20px" height="20px" color="inherit" />
    ),
    path: "/service",
    component: <Service />,
  },
  {
    name: "Product",
    layout: "/admin",
    path: "/product",
    icon: <Icon as={MdWidgets} width="20px" height="20px" color="inherit" />,
    component: <Product />,
  },
  {
    name: "Blogs",
    layout: "/admin",
    path: "/blog",
    icon: <Icon as={MdArticle} width="20px" height="20px" color="inherit" />,
    component: <Blogs />,
  },
  {
    name: "Sign-in",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;
