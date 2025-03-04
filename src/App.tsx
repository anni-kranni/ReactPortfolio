
import { Route } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";

import Aloitus from './components/Aloitus';
import WebDesign from './components/WebDesign';
import Grafiikka from './components/Grafiikka';

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      {/* <Aloitus /> */}
      <Router>
        <Route path="/" element={<Aloitus />} />
        <Route path="/WebDesign/" element={<WebDesign />} />
        <Route path="/Grafiikka/" element={<Grafiikka />} />
      </Router>

    </>
  );
}

export default App;
