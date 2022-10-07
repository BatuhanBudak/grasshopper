import type { NextPage } from "next";
import Banner from "../components/Banner";
import ColumnFirst from "../components/ColumnFirst";
import ColumnSecond from "../components/ColumnSecond";
import ColumnThird from "../components/ColumnThird";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Intro from "../components/Intro";
import LastColumn from "../components/LastColumn";
import Stories from "../components/Stories";
import Tout from "../components/Tout";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <Header />
      <main>
        <Intro />
        <Tout />
        <Stories />
        <ColumnFirst />
        <ColumnSecond />
        <ColumnThird />
        <LastColumn />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
