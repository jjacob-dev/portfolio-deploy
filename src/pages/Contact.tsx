import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Cbox from "../components/Cbox";

function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center items-center pt-8 text-3xl font-semibold">
        <h1>Contact Me</h1>
      </div>
      <div className="flex justify-center items-center gap-9 flex-col lg:flex-row py-20">
        <Cbox
          heading="Email"
          description="Page with basic information about me, hobbies, interests and skills"
          buttonName="Email"
          link="mailto:jjacobjurgens@gmail.com"
        />
        <Cbox
          heading="LinkedIn"
          description="Page containing multiple Contact information and social media to communicate on"
          buttonName="LinkedIn"
          link="https://www.linkedin.com/in/jacob-jurgens-a37451289/"
        />
      </div>
    </>
  );
}
export default Contact;
