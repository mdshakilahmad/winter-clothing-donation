import About from "../components/About";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl text-center py-5">
        Welcome to Winter Clothing Donation
      </h2>
      <Slider />
      <About />
    </div>
  );
};

export default Home;
