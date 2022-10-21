import * as styles from "./Main.module.css";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Hi, I'm
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Giorgi Lezhava.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Front-End Developer.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Giorgi Lezhava.")
                .start();
            }}
          />
        </h1>
        <h6>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </h6>
      </div>
    </div>
  );
}

export default Main;
