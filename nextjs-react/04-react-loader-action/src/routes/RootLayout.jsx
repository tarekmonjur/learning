
import { Outlet } from "react-router";
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Outlet />
      </main>
    </> 
  );
}

export default RootLayout;