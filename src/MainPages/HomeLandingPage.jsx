import CardList from "../Components/Card";
import CustomTitle from "../Components/CustomTitle";
import Footer from "../Components/Footer";
import ImageWithTextOverlay from "../Components/ImageOverlay";
import InfoCard from "../Components/InfoCard";
import GoogleMap from "../Components/reusable/GoogleMap";
import img from "../Images/6.png";
import mapImage from "../Images/worldmap.jpg";
import { Link } from "react-router-dom";

function HomeLandingPage() {
  return (
    <>
      <div className=" space-y-8 ">
        <InfoCard
          title="Empowering Communities"
          isImageLeft={true}
          image={img}
          para="Welcome to ReachOut Connect, your personalized emergency response network tailored for rural areas. In moments of uncertainty, this platform stands as your beacon of support, linking communities with timely assistance and fostering a network of local heroes. Seamlessly designed and intuitively crafted, ReachOut Connect empowers you to seek help swiftly while enabling volunteers and services to respond effectively. Embrace peace of mind knowing that when emergencies arise, a connected community stands ready to lend a helping hand."
        />
        <CustomTitle title="Offerings" />
        <CardList />

        <GoogleMap />

        {/* remove map image  and registration form */}
        {/* <ImageWithTextOverlay
          buttonText="need help"
          text="Empowering Safety Everywhere"
          image={mapImage}
          // isVisible ={true}
        /> */}
        {/* <UserRegistrationForm /> */}

        <Footer />
      </div>
    </>
  );
}

export default HomeLandingPage;
