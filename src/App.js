import './App.css';
import TopProfile from './components/TopProfile';
import AboutMe from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactGA from 'react-ga';
import { useParams } from 'react-router-dom';

function App() {
  const TRACKING_ID = "UA-216979659-2";
  ReactGA.initialize(TRACKING_ID);
  
  const params = new URLSearchParams(window.location.search);
  const isForCapture = (params.get('forcapture') === "true");

  return (
    <div className="container-lg py-3">
      <div className="row">
        <TopProfile isForCapture={isForCapture} />
        <AboutMe isForCapture={isForCapture} />
      </div>
    </div>
  );
}

export default App;