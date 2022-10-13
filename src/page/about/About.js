import Header from "../../components/header/header";
import AboutContent from "../../components/aboutContent/AboutContent";
import * as styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <Header />
      <AboutContent />
    </div>
  );
}

export default About;
