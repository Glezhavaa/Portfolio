import * as styles from "./AboutHeader.module.css";

function AboutHeader() {
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
      </div>
    </div>
  );
}

export default AboutHeader;
