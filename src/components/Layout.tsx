import { MuiNavbar } from "./MuiNavbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <MuiNavbar />
      <Outlet />
    </div>
  );
};
