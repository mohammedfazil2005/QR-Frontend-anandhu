import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPanel from "./pages/AdminPanel";
import View from "./pages/View";

function App() {
  return (
    <>
    <Routes >
      <Route path="/" element={<AdminPanel/>}> </Route>
      <Route path="/view" element={<View/>}> </Route>
      
      </Routes>
    </>
  );
}

export default App;
