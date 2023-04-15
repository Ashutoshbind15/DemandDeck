import Banner from "./Banner";
// import CarouselGallery from "./CarouselGallery";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetter from "./NewsLetter";
import Plans from "./Plans";

function LandingPageComponent() {
  return (
    <>
      <Banner />
      {/* <CarouselGallery /> */}
      <Plans />
      <NewsLetter />
    </>
  );
}

export default LandingPageComponent;
