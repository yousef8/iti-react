import { Fragment } from "react";
import Skill from "./components/skill";
export default function Skills() {
  let skills = [
    { id: 1, name: "html", value: 10 },
    { id: 2, name: "css", value: 5 },
    { id: 3, name: "javascript", value: 50 },
    { id: 4, name: "python", value: 60 },
    { id: 5, name: "c++", value: 60 },
    { id: 6, name: "oop", value: 65 },
  ];
  return (
    <div id="skills">
      <h1>Skills</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit
        dicta blanditiis at, excepturi culpa odio illum nesciunt corporis iusto
        itaque unde molestias corrupti quaerat, ex quibusdam placeat possimus
        exercitationem!
      </p>
      {skills.map((skill) => (
        <Fragment key={skill.id}>
          <Skill name={skill.name} value={skill.value}></Skill>
        </Fragment>
      ))}
    </div>
  );
}
