import BlogPost from "./BlogPost";
import oImage from "../images/laptop.jpg";

function Aboutmain() {
  return (
    <>
      <div className="flex justify-center items-center pt-8 text-3xl font-semibold">
        <h1>About Me</h1>
      </div>
      <BlogPost
        image1={oImage}
        heading="Jacob Jurgens"
        description="I'm a full-time student at Griffith University, I'm focused on web
        development with a passion for making responsive websites and
        applications. Technology has always been a major interest in my
        life, so being able to do it for both personal projects and
        professional goals is the ultimate outcome.
        
        In my free time I enjoy skateboarding, trying new foods and
                spending time with family."
      />
    </>
  );
}

export default Aboutmain;
