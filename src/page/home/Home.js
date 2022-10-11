import Header from "../../components/header/header";
import Main from "../../components/main/Main";
import * as styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
