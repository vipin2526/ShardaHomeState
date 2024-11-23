import SliderBanners from "./SliderBanners";
import Projects from "../app/projects/page";
import VideoBanner from "./VideoBanner";  

export default function LandingPage() {
  return (
    <main>
      <SliderBanners />
      <Projects />
      <VideoBanner />
    </main>
  );
}