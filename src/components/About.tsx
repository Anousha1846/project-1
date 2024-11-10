import React from "react";
import Image from "next/image";
import aboutIMG from "../../public/aboutIMG.jpg";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";

const About = () => {
  return (

    <div  id="about"><br />
        <h1 className="about-heading "> About me</h1>
        <main className="about" >
        
      <section className="about-section"></section>
      <section>
        <div className="about-container">
          <div className="about-image-container">
            <Image
              src={aboutIMG}
              height={9}
              width={500}
              alt="figma"
              className="about-image"
            />
          </div>

          <div className="about-text-container">
            <h1 className="about-name">Anousha Asadullah</h1>

            <p className="about-description">
              As a skilled web developer, I bring a strong foundation in HTML,
              CSS, and JavaScript, combined with expertise in Bootstrap,
              Tailwind, and Next.js. My proficiency extends to advanced
              frameworks and libraries, including TypeScript, enabling me to
              create responsive, visually appealing, and dynamic web
              applications. My focus on detail and best practices allows me to
              develop user-centered, efficient interfaces tailored to modern web
              standards. Continuously expanding my skill set, I am committed to
              delivering exceptional, scalable web solutions that push the
              boundaries of design and functionality.
            </p>
            <h3 className="about-social-links text-black">
              Visit My Sites:
              <SocialIcon url="https://github.com/Anousha1846" />
              <SocialIcon url="https://www.linkedin.com/feed/" />
            </h3>
          </div>
        </div>
      </section>
      <section className="about-section"></section>
    </main>
    <br /><br /><br />
    </div>
  );
};

export default About;
