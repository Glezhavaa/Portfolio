import * as styles from "./ProjectsSection.module.css";
import image from "../../img/project.png";

function ProjectsSection() {
  return (
    <section className={styles.projects}>
      <h1>Heading</h1>
      <div className={styles.projectBox}>
        <div className={styles.projectImg}>
          <img src={image} alt="project image"></img>
        </div>
        <div className={styles.projectDescription}>
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
