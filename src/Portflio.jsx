import ProjectCard from "./components/ProjectCard";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        <ProjectCard name="Goodreads"></ProjectCard>
        <ProjectCard name="Project 1"></ProjectCard>
        <ProjectCard name="Project 2"></ProjectCard>
        <ProjectCard name="Project 3"></ProjectCard>
        <ProjectCard name="Project 4"></ProjectCard>
        <ProjectCard name="Project 5"></ProjectCard>
      </div>
    </section>
  );
}
