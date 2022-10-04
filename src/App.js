import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WorkingArea from "./components/WorkingArea/WorkingArea";
function App() {
  return (
    <div className='container'>
      <Header />
      <WorkingArea/>
      <Footer/>
    </div>
  );
}

export default App;
