import programingSkills from "../../data/programingSkills";
import * as styles from "../../components/AboutSection/AboutSection.module.css"

function RenderSkills() {
  return programingSkills.map((skill, index) => {
    return <div className={styles.skill} key={index}>{skill}</div>;
  });
}

export default RenderSkills;