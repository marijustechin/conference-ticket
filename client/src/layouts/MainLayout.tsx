import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
