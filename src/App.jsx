import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import BosShadow from "./components/BoxShadow/BosShadow";
import TextShadow from "./components/TextShadow/TextShadow";
import TextStyle from "./components/TextStyle/TextStyle";
import Transform from "./components/Transform/Transform";
import Flexbox from "./components/Flexbox/Flexbox";
import Filter from "./components/Filter/Filter";
import NoPage from "./components/NoPage/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BosShadow />} />
          <Route path="/textshadow" element={<TextShadow />} />
          <Route path="/textstyle" element={<TextStyle />} />
          <Route path="/transform" element={<Transform />} />
          <Route path="/flexbox" element={<Flexbox />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
