import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
import profileImage from '../../assets/headshot/headshot.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        <img src={profileImage} className="my-2" style={{ width: "200px" }} alt="cover" />
          Who am I? Better yet, what am I? Designer? Developer? Yes!
          I have been an artist my entire life. Six years ago I traded my paint bushes for a stylist and became a professional Graphic Designer. Fast-forward to April 13, 2022 - the day I successfully completed the full stack web developement boot camp through The Ohio State University - the day I officially became a Junior Full Stack Web Developer.
        </p>
      </div>
    </section>
  );
}

export default About;
