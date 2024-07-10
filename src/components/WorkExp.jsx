import styles, { layout } from "../components/style";
import Button from "../components/Button";

const ExperienceCard = ({
  role,
  company,
  location,
  duration,
  description,
  index,
}) => (
  <div
    className={`flex flex-row p-4 mr-10 rounded-[20px] ${
      index !== workExperience.length - 1 ? "mb-4" : "mb-0"
    } experience-card`}
  >
    <div className="flex-1  ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-1">
        {role} - <span className="text-gradient text-3xl">{company}</span>
      </h4>
      {/* <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {location}
      </p> */}
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {duration}
      </p>
      <ul className="font-poppins font-normal  text-[16px] leading-[24px] mt-2 list-disc text-white pl-5">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const workExperience = [
  {
    id: "experience-1",
    role: "Software Development Intern",
    company: "Upraised",
    location: "Dehradun, Uttarakhand",
    duration: "May 2024 - Present",
    description: [
      "Proficient in GraphQL and Apollo Client/Server technologies.",
      "Familiar with Monorepo structures and Microfrontend frameworks.",
    ],
  },
  {
    id: "experience-2",
    role: "Backend Developer Intern",
    company: "Koders",
    location: "",
    duration: "May 2024 - Present",
    description: [
      "Resolved 15+ bugs, improving software functionality by 10%.",

      "Automated testing procedures, enhancing code quality.",
      "Used Node.js, React.js, React-Redux, Postman, and Tailwind CSS.",
    ],
  },
  {
    id: "experience-3",
    role: "Full Stack Web Development Intern",
    company: "Grandeur Net",
    location: "",
    duration: "",
    description: [
      "Developed 6-7 web pages, increasing website traffic by 18%.",
      "Achieved a performance score of 94, with SEO scores at 96.",
      "Deployed a project accessible to 500+ users.",
    ],
  },
];

const WorkExp = () => (
  <>
    <h2 className={`${styles.heading2} text-center text-gradient`}>
      Work Experience
    </h2>
    <section id="experience" className={`${layout.section} bg-black`}>
      <div className={`${layout.sectionInfo} ml-20`}>
        <h2 className={styles.heading2}>
          My Professional Journey <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Experience & Growth.</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          Here is a snapshot of my professional experience, highlighting the key
          roles and achievements that have shaped my career. Each position has
          provided me with unique opportunities to learn, grow, and make
          meaningful contributions.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {workExperience.map((experience, index) => (
          <ExperienceCard key={experience.id} {...experience} index={index} />
        ))}
      </div>
    </section>
  </>
);

export default WorkExp;
