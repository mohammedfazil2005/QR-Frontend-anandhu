import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPanel from "./pages/AdminPanel";
import View from "./pages/View";
import PNF from "./pages/PNF";

function App() {
  return (
    <>
    <Routes >
      <Route path="/" element={<AdminPanel/>}> </Route>
      <Route path="/view/:id" element={<View/>}> </Route>
      <Route path="/*" element={<PNF/>}/>
      </Routes>
    </>
  );
}

export default App;
