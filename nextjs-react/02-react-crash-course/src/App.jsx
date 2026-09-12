import { useState } from "react";
import "./App.css";
import { AppContext } from "./components/Context";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [openPostModal, setOpenPostModal] = useState(false);
  const showPostModal = () => {
    setOpenPostModal(!openPostModal);
  }

  return (
    <>
    <AppContext value={{ openPostModal }}>
      <header>
        <MainHeader onCreatePost={showPostModal}></MainHeader>
      </header>
      <main>
        <PostList onClosePost={showPostModal}></PostList>
      </main>
      </AppContext>
    </> 
  );
}

export default App;
