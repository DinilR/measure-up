// import logo from "./logo.svg";
import "./App.css";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import IntroSection from "./Components/IntroSection";
import SupportSection from "./Components/SupportSection";
import TeamSection from "./Components/TeamSection";

function App() {
  return (
    <>
      <Appbar />
      <IntroSection />
      <TeamSection/>
      <SupportSection/>
      <Footer/>
      {/* <h1>Hi this is measure up</h1> */}
    </>
  );
}

export default App;
