import SlideProducts from "../../components/common/slideProducts/SlideProducts";
import HeroSlider from "../../components/home/heroSlider/HeroSlider";

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <SlideProducts title="Most Popular"  />
      <SlideProducts title="Most Popular"  />
      <SlideProducts title="Most Popular"  />
      <SlideProducts title="Most Popular"  />
    </main>
  );
};

export default Home;
