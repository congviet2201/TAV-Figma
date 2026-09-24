import { Navigate } from "react-router-dom";

const CheckLogin = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("accessToken");

  return token ? <>{children}</> : <Navigate to="/auth/sign-in" replace />;
};

export default CheckLogin;
