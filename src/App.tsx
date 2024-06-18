//import "./App.css";
import { About } from "./components/About";
import { EditBoats } from "./components/EditBoats";
import { Layout } from "./components/Layout";
import { MuiList } from "./components/MuiList";
import { Route, Routes } from "react-router-dom";
import { Timings } from "./components/Timings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MuiList />} />
          <Route path="timings" element={<Timings />} />
          <Route path="editboats" element={<EditBoats />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
