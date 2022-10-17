import * as styles from "../AboutSection/AboutSection.module.css";
import RenderEducation from "../../logic/education/education";
import RenderSkills from "../../logic/skills/Skills";

function AboutSection() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.educationContainer}>
        <h2>Education</h2>
        <RenderEducation />
      </div>
      <div className={styles.skillsContainer}>
        <h2>My Skills</h2>
        <div className={styles.skillsBox}>
          <RenderSkills />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;