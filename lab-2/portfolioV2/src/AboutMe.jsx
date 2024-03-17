import "./AboutMe.css";
import cv from "./assets/dummy-cv.pdf";

export default function AboutMe() {
  return (
    <div id="about-me">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quidem
        voluptatibus reprehenderit illum debitis aliquam obcaecati, numquam
        officia asperiores? Error distinctio iste deserunt consectetur laborum
        cumque sequi autem ex nihil.
      </p>
      <button>
        <a href={cv} download={""}>
          Download Resume
        </a>
      </button>
    </div>
  );
}
