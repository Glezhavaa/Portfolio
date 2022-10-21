import * as styles from "../aboutSection/AboutSection.module.css";
import RenderEducation from "../../logic/education/education";
import RenderSkills from "../../logic/skills/Skills";

function AboutSection() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutInfo}>
        <div className={styles.aboutText}>
          <h2>Get to know me!</h2>
          <p>
            Sociable, I can find logical solutions in difficult situations. I
            always try to move forward and learn new materials that will benefit
            my work in the software industry.
          </p>
          <p>
            I always try to make my written code correct and understandable to
            everyone.
          </p>
          <p>
            I have worked on several types of projects. Some of them are just
            little parts of the web application, (contact form, header, footer,
            etc.), but others - are full web pages.
          </p>
          <p>
            To give you an idea of my work visit <b>Projects</b> page.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <h2>My Skills</h2>
          <div className={styles.skillsBox}>
            <RenderSkills />
          </div>
        </div>
      </div>
      <div className={styles.educationContainer}>
        <h2>Education</h2>
        <RenderEducation />
      </div>
    </div>
  );
}

export default AboutSection;
