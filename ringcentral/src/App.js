import Navbar from "./Navbar";
import Login from "./Login";
import Entries from "./Entries";
import { Routes, Route } from "react-router-dom";
import NewEntry from "./NewEntry";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/entries" element={<Entries />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="entries/newentry" element={<NewEntry />}></Route>
      </Routes>
    </div>
  );
}

export default App;
