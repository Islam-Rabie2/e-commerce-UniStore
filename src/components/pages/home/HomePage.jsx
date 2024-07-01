import Category from "../../category/Category";
import HeroSection from "../../heroSection/HeroSection";
import HomePageProductCard from "../../homePageProductCard/HomePageProductCard";
import Layout from "../../layout/Layout";
import Testimonial from "../../testimonial/Testimonial";
import Track from "../../track/Track";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default HomePage;
