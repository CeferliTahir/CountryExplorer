import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
