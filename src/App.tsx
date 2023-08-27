import Navbar from "./components/Navbar";
import Pbox from "./components/Pbox";
import Header from "./components/Header";
import BlogPost2 from "./components/BlogPost2";
import oImage from "./images/hero-img.png";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <BlogPost2
        image1={oImage}
        heading="Jacob Jurgens"
        description="Hi, I'm a learning developer and passionate student at Griffith University, studying Information Technology"
      />
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
