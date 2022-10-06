import type { NextPage } from "next";
import Banner from "../components/Banner";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <Header />
    </div>
  );
};

export default Home;
