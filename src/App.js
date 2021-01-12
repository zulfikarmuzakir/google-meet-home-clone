import React from "react";
import './App.css';
import Body from "./Components/Body/Body";
import BodyProps from "./Components/Body/BodyProps";
import NavbarHeader from "./Components/Navbar/Navbar";
import image1 from "./assets/google-2.png";
import image2 from "./assets/google-3.png";
import image3 from "./assets/google-4.png";
import image4 from "./assets/google-5.png";
import image5 from "./assets/google-6.png";
import image6 from "./assets/google-7.png";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <NavbarHeader />
      </div>
      <div>
        <Body />
        <BodyProps
          img={image1}
          img2={image2}
          title="Trusted by enterprises around the world."
          desc="Take advantage of the same secure-by-design infrastructure, built-in protection, and global network that Google uses to secure your information and safeguard your privacy. Meet video meetings are encrypted in transit and our array of default-on anti-abuse measures keep your meetings safe."
          title2="Enjoy frictionless meetings."
          desc2="Meet takes the headaches out of joining a video call at work. Just set up a meeting and share a link. No worrying about whether teammates, clients, or customers have the right accounts or plug-ins. With a fast, lightweight interface and smart participant management, multi-person video calls are a breeze."
        />
        <BodyProps
          img={image3}
          img2={image4}
          title="Designed to be helpful."
          desc="Join meetings directly from a Calendar event, an email invite, or directly from Gmail. All of the event details are right there when you need them, whether you’re joining from a computer, phone, or conference room. Helpful features like live captions, low-light mode, and noise cancellation make meetings more productive."
          title2="Join meetings on the go."
          desc2="Easily view all your scheduled meetings for the day and join the meeting with just a tap, directly from the Gmail mobile app or the dedicated Meet app. Meetings organized by Google Workspace users also create a dial-in phone number for each meeting, so every guest has a great experience – even on the go without wifi or data."
        />
        <BodyProps
          img={image5}
          img2={image6}
          title="More than meetings."
          desc="Meet is fully integrated with Google Workspace. Seamlessly jump into a video call from Chat or take document collaboration to the next level by connecting over video – everything ties together so you can always connect and collaborate in context."
          title2="Works with other meeting solutions too."
          desc2="Teams using Skype for Business or meeting systems based on SIP and H.323 standards (e.g. Polycom and Cisco) can seamlessly join a Meet meeting through the Pexip Infinity Platform."
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
