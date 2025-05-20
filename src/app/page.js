
import Blog from "./components/blog/page";
import ProductSlider from "./components/productSlider/page";
import Mainslider from "./components/slider/page";
import Testimonial from "./components/testimonials/page";
import TrendingProduct from "./components/trendingProduct/page";

export default function Home() {
  return (
      <main>
        <Mainslider/>
        <ProductSlider/>
        <Testimonial/>
        <TrendingProduct/>
        <Blog/>
      </main>
  );
}
