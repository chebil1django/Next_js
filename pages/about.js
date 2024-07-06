import Link from "next/link";
import Image from "next/image";
import profilePic1 from "../public/images/act.png";

const About = () => (
  <div>
    <h1 className="text-4xl font-bold">About Me</h1>
    <p>Here is some information about me.</p>

      <Image
        src={profilePic1}
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
    
  </div>
  
);

export default About;
