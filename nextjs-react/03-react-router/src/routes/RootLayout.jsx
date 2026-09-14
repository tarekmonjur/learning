
import { Outlet } from "react-router";
import { AppContext } from "../components/Context";
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
    <AppContext value={{}}>
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Outlet />
      </main>
      </AppContext>
    </> 
  );
}

export default RootLayout;