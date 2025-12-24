import { useMemo } from "react";
import SlideProducts from "../../components/common/slideProducts/SlideProducts";
import HeroSlider from "../../components/home/heroSlider/HeroSlider";

const Home = () => {
  const categories = useMemo(
    () => [
      "tops",
      "smartphones",
      "furniture",
      "sunglasses",
      "sports-accessories",
      "womens-dresses",
    ],
    []
  );

  return (
    <main>
      <HeroSlider />
      {categories.map((category) => (
        <SlideProducts key={category} category={category} />
      ))}
    </main>
  );
};

export default Home;
