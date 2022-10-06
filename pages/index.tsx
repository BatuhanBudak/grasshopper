import type { NextPage } from "next";
import Banner from "../components/Banner";
import ColumnFirst from "../components/ColumnFirst";
import ColumnSecond from "../components/ColumnSecond";
import Header from "../components/Header/Header";
import Intro from "../components/Intro";
import Tout from "../components/Tout";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <Header />
      <main>
        <Intro />
        <Tout />
        <ColumnFirst />
        <ColumnSecond />
      </main>
    </div>
  );
};

export default Home;
