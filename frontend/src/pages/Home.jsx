import Banner from "../components/Banner";
import Header from "../components/Header";
import SpecialitiesMenu from "../components/SpecialitiesMenu";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialitiesMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
