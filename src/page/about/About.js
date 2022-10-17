import Header from "../../components/header/header";
import AboutHeader from "../../components/aboutHeader/AboutHeader";
import * as styles from "./About.module.css";
import AboutSection from "../../components/aboutSection/AboutSection";

function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <Header />
        <AboutHeader />
      </div>
      <section className ={styles.mainSection}>
        <AboutSection />
      </section>
    </>
  );
}

export default About;
