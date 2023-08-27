import { useState } from "react";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Pbox from "./components/Pbox";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Offer />
      <div className="flex justify-center items-center gap-9 flex-col lg:flex-row">
        <Pbox
          heading="About"
          description="Page with basic information about me, hobbies, interests and skills"
        />
        <Pbox
          heading="Blog"
          description="Blog about technology within IT, focusing on AI and the development and changes within the industry"
        />
        <Pbox
          heading="Contact"
          description="Page containing multiple Contact information and social media to communicate on"
        />
      </div>
    </>
  );
}

export default App;
