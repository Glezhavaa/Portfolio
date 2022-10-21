import educationInfo from "../../data/educationInfo";
import * as styles from "../../components/aboutSection/AboutSection.module.css";

function RenderEducation() {
  return educationInfo.map((education) => {
    return (
      <div className={styles.educationBox} key={education.id}>
        <h2>{education.name}</h2>
        <p>{education.course}</p>
        <p>{education.date}</p>
      </div>
    );
  });
}

export default RenderEducation;
