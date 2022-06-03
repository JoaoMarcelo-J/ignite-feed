import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Post } from "./components/Post/Post";
import "./styles.css";
import syles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={syles.wrapper}>
        <SideBar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
