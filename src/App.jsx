import BottomHeader from "./components/header/BottomHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>
      <Home />
    </>
  );
};

export default App;
