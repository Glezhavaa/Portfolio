import Header from "../../components/header/header";
import ImageSlider from "../../components/projectSlider";
import SliderData from "../../components/projectSlider/sliderData";
import ProjectsSection from "../../components/projectsSection/ProjectsSection";

function Projects() {
  return (
    <>
      <Header />
      <ImageSlider slides={SliderData} />
      <ProjectsSection />
    </>
  );
}

export default Projects;
