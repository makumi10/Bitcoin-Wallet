import Header from './components/Header';
import PriceCard from './components/PriceCard';
import TimeNav from './components/TimeNav';
import Graph from './components/Graph';
import Exchange from './components/Exchange';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PriceCard />
      <TimeNav />
      <Graph />
      <Exchange />
      <Footer />
    </div>
  );
}

export default App;
