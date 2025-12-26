import { useMemo } from "react";
import SlideProducts from "../../components/common/slideProducts/SlideProducts";
import HeroSlider from "../../components/home/heroSlider/HeroSlider";
import PageTransition from "../../components/common/PageTransition";

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
      <PageTransition>
        <HeroSlider />
        {categories.map((category) => (
          <SlideProducts key={category} category={category} />
        ))}
      </PageTransition>
    </main>
  );
};

export default Home;
