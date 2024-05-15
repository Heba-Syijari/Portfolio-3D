/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({ direction: "", type: "", delay: 0.1, duration: 1 })}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software developer with two years of experience in
        React.js and TypeScript. Additionally, I possess basic knowledge of
        back-end technologies such as Express.js.
        <br />I am currently a fifth-year student at Aleppo University's Faculty
        of Informatics Engineering, specializing in Artificial Intelligence, and
        I am on the verge of graduating.
        <br />
        Throughout my academic journey, I have dedicated myself to gaining
        expertise in various domains of computer science and AI. My areas of
        interest and study include artificial intelligence, machine learning,
        deep learning, natural language processing, and data science.
        <br /> I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map(({ icon, title }, index) => (
          <ServiceCard key={title} icon={icon} title={title} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
