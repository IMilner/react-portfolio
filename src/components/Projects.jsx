import React, { useState } from "react";
import Carousel from "./Carousel";
import "../styles/Projects.css";

function Projects() {
  return (
    <>
      <div className="projects">
        <h1 id="projects">PROJECTS</h1>
        <Carousel />
      </div>
    </>
  );
}

export default Projects;
