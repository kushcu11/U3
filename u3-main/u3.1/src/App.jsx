import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>HOME PAGE WORKING</h1>;
}

function About() {
  return <h1>ABOUT PAGE WORKING</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
