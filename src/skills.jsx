import Skill from "./components/skill";
export default function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit
        dicta blanditiis at, excepturi culpa odio illum nesciunt corporis iusto
        itaque unde molestias corrupti quaerat, ex quibusdam placeat possimus
        exercitationem!
      </p>
      <Skill name="html" value={10}></Skill>
      <Skill name="css" value={5}></Skill>
      <Skill name="javascript" value={50}></Skill>
      <Skill name="python" value={60}></Skill>
      <Skill name="c++" value={65}></Skill>
      <Skill name="OOP" value={40}></Skill>
    </div>
  );
}
