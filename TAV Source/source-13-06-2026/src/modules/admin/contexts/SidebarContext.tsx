// src/modules/admin/contexts/SidebarContext.tsx
import { createContext } from "react";

type SidebarContextType = {
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType>({
  toggleSidebar: false,
  setToggleSidebar: () => {},
});
