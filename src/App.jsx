import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/assets/scss/reset.scss';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import SubAbout from "./components/SubAbout";
import SubCommunity from './components/SubCommunity';
import SubBest from "./components/SubBest";
import SubNew from "./components/SubNew";
import TopButton from "./components/TopButton";
function App() {
  return (
    <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/SubAbout/*" element={<SubAbout />} />
            <Route path="/SubCommunity/*" element={<SubCommunity />} />
            <Route path="/SubBest/*" element={<SubBest />} />
            <Route path="/SubNew/*" element={<SubNew />} />
          </Routes>
      <TopButton />
      <Footer />
    </Router>
  )
}

export default App;
