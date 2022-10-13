import * as styles from "./AboutContent.module.css";
import RenderSkills from "../../logic/skills/Skills";

function AboutContent() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>ABOUT ME</h1>
          <h5>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </h5>
        </div>
        <div className={styles.aboutMe}>
          <div className={styles.story}>
            <h2>Get to know me!</h2>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
          </div>
          <div className={styles.skillsContainer}>
            <h2>My Skills</h2>
            <div className={styles.skillsBox}>
              <RenderSkills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
