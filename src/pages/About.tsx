import Aboutmain from "../components/Aboutmain";
import Navbar from "../components/Navbar";
import Hpara from "../components/Hpara";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <Navbar />
      <Aboutmain />
      <div className="flex items-center justify-center py-5">
        <div className="flex flex-col justify-center items-center lg:flex-row max-w-[80%]">
          <Hpara
            heading="Bachelor of Information Technology"
            description="Currently studying for my Bachelor of Information Technology through Griffith University, with Software Development as my Major."
          />
          <Hpara
            heading="Certificate III in Business"
            description="Certificate III in Business awarded from Department of Employment, gained experience in technology, management and Business safety."
          />
          <Hpara
            heading="React.JS Web developer"
            description="Self taught React.JS front end developer, Produce visually appealing websites as a learning process and hobby."
          />
        </div>
      </div>
    </>
  );
}

export default About;
