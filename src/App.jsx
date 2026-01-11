import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/navigation/index";
import Home from "./views/home/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="weather" element={<div>Trang thời tiết chi tiết</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
