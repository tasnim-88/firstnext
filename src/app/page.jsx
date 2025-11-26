import FeaturedProducts from "@/Components/FeaturedProducts";
import Hero from "@/Components/Hero";
import Reviews from "@/Components/Reviews";
import Team from "@/Components/Team";
import TopCategories from "@/Components/TopCategories";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <TopCategories></TopCategories>
      <Reviews></Reviews>
      <Team></Team>
    </div>
  );
}
