
import { Route, Routes } from 'react-router-dom';
import Aloitus from './components/Aloitus';
import Tuottaja from './components/Tuottaja';
import Grafiikka from './components/Grafiikka';
import Yhteys from './components/Yhteys';

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      {/* <Aloitus /> */}
      <Routes>
        <Route path="/" element={<Aloitus />} />
        <Route path="/Tuottaja/" element={<Tuottaja />} />
        <Route path="/Grafiikka/" element={<Grafiikka />} />
        <Route path="/Yhteys/" element={<Yhteys />} />
      </Routes>

    </>
  );
}

export default App;
