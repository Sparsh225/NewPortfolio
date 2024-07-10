import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill bg-black overflow-visible" id="skills">
      <div className="container w-[80rem] m-auto overflow-visible">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn text-white">
              <h1 className="text-gradient text-4xl font-bold text-center">
                Skills
              </h1>
              <p className="text-xl px-4 mt-10 mb-10 font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                I specialize in both frontend and backend development, with
                skills in creating dynamic user interfaces using React and
                building server-side applications with Node.js. I also have
                experience in SQL for designing and managing databases, ensuring
                efficient and scalable solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className=" m-auto owl-carousel owl-theme skill-slider"
                customLeftArrow={
                  <div className="carousel-arrow left">
                    <img src={arrow1} alt="Left Arrow" />
                  </div>
                }
                customRightArrow={
                  <div className="carousel-arrow right">
                    <img src={arrow2} alt="Right Arrow" />
                  </div>
                }
              >
                <div className="item w-[200px]">
                  <img src={meter1} alt="Image" />
                  <h5 className="text-center">Frontend</h5>
                </div>
                <div className="item w-[200px]">
                  <img src={meter2} alt="Image" />
                  <h5 className="text-center">Backend</h5>
                </div>
                <div className="item w-[200px]">
                  <img src={meter3} alt="Image" />
                  <h5 className="text-center">SQl</h5>
                </div>
                <div className="item w-[200px]">
                  <img src={meter1} alt="Image" />
                  <h5 className="text-center">Java</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
