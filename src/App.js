import "./reset.css";
import "./App.css";
import "./components/Navigation/Navigation.css";
import "./components/Header/Header.css";
import "./components/Specialists/Specialists.css";
import "./components/Offers/Offers.css";
import "./components/Footer/Footer.css";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Specialists from "./components/Specialists/Specialists";
import Offers from "./components/Offers/Offers";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Specialists />
      <Offers />
      <Footer />
    </>
  );
};

export default App;
