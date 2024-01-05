import CustomComponent from "../Components/CustomComponent";
import imgAbout from "../Images/3.png";
import CustomTitle from "../Components/CustomTitle";
import Footer from "../Components/Footer";
import FAQs from "../Components/Faq";

const AboutPage = () => {
  return (
   <div className="mt-8">
    <CustomTitle
      title="About US"
    />
    <CustomComponent
      image={imgAbout}
      isImageLeft = {true}
      para1 = ' Welcome to ReachOut Connect, your go-to platform designed to ensure safety and support during critical moments. We understand the importance of swift and reliable aid during emergencies. Our app aims to bridge the gap between individuals in distress, emergency services, and compassionate volunteers.'
      para2 = 'Built on the principle of community support, we provide a seamless interface for users to connect, seek assistance, and contribute to a safer environment. With a commitment to empowering collective action and fostering a culture of preparedness, ReachOut Connect stands as a beacon of hope and solidarity in times of need.'
    />
    <CustomTitle
      title="Frequently Asked Question"
    />
    <FAQs/>
    <Footer/>
   </div>
  );
};


export default AboutPage;
