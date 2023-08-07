import React from "react";
import "../styles/About.css";

function About() {
  return (
    <>
      <div id="about">
        <div className="div1Img">
          <img src="../../public/images/johnSnowTransparent.png" alt="" />
        </div>
        <div className="div2Txt">
          <h1 className="aboutTitle">About Me</h1>
          <p>
            Hi, my name is Isaac & I'm a '90s kid from New Zealand.
            I was born in Christchurch & enjoy swimming & exploring the
            outdoors.
            I made some bad decisions in my youth & now I'm making up for it in
            a career codeing.
            I learned to code while incarcerated & it's changing my life & my
            future.
            Languages I have learnt to use are
            HTML5(HyperTextMarkupLanguage5), CSS(CascadingStyleSheet),
            JS(JavaScript), JSX(React)
            Since joining the Take2 program one thing I have learned is that it
            is important to be able to work well with others and that asking for
            help is ok.
            I am excited about learning JavaScript, althogh it is an old
            language, it is constantly being updated and is highly important to
            understand.
            Once I have completed this program all I want to do with the skills
            I have learned is to become employed with a company that will help
            me grow and continue to learn and improve not only my programing
            skills but my skills as a person as well.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
