import AboutApp from "./components/AboutApp";
import AboutDeveloper from "./components/AboutDeveloper";
import MainApp from "./components/MainApp";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="main" />} />
            <Route path="main" element={<MainApp />} />
            <Route path="about-app" element={<AboutApp />} />
            <Route path="about-developer" element={<AboutDeveloper />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
