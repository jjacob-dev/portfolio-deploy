import Navbar from "../components/Navbar";
import BlogPost3 from "../components/BlogPost3";
import oImage from "../images/podimage.png";
import Header from "../components/Header";
import Ebox from "../components/Ebox";
import ListenOn from "../components/ListenOn";

function Blog() {
  return (
    <>
      <Header />
      <Navbar />
      <BlogPost3
        image1={oImage}
        heading="Project IDX"
        description="Google's new competition to VS Code, a web based IDE with incorporated AI, does it have what it takes to compete?"
      />
      <ListenOn />
      <div className="flex justify-center items-center gap-9 flex-col lg:flex-row">
        <Ebox
          heading="Episode 1"
          description="All you need to know about Google's Project IDX"
        />
        <Ebox heading="Episode 2" description="Coming soon..." />
        <Ebox heading="Episode 3" description="Coming soon..." />
      </div>
    </>
  );
}

export default Blog;
