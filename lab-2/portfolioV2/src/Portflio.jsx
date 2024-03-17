import { Fragment } from "react";
import ProjectCard from "./components/ProjectCard";
import "./Portfolio.css";

export default function Portfolio() {
  let projects = [
    "Goodreads",
    "Project 1",
    "Project 2",
    "Projects 3",
    "Projects 4",
  ];
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{ border: idx % 2 ? "3px solid blue" : "3px solid red" }}
          >
            <ProjectCard name={project}></ProjectCard>
          </div>
        ))}
      </div>
    </section>
  );
}
