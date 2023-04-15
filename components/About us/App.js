import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="w-2/3 p-4 shadow-lg mx-3 py-16  ml-[150px] my-[40px]">
        <p className="font-medium form-control">
          Meet the talented trio behind the innovative entrepreneurship website
          - DemandDeck. They have pooled their expertise and passion for
          entrepreneurship to create a one-of-a-kind platform that caters to
          aspiring entrepreneurs and seasoned business owners alike. Their
          combined skill set spans across various domains such as web
          development, marketing, and business strategy, making them a
          formidable force in the industry. Through their website, they aim to
          provide a comprehensive suite of resources that can help entrepreneurs
          succeed in today's ever-changing business landscape. With their
          dedication and commitment to empowering others, they are sure to make
          a significant impact in the world of entrepreneurship
        </p>
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
