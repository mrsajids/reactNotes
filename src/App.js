import Navbar from "./Navbar";
import Todo from "./Todo";
import { Routes, Route } from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="todo" element={<Todo />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
