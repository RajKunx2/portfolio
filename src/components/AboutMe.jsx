import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image from "next/image"
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    const styles = {
        customDateStyle: {
            color: "#d76457",
            fontSize: "16px",
            margin: "16px",
            fontWeight: "bold",
        },
    };
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "white",
                color: "black",
                opacity: "60"
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={
                <span className="custom-date" style={styles.customDateStyle}>
                    {experience.date}
                </span>
            }
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-[#d76457] text-[24px] font-bold font-Oswald'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className="text-center text-4xl lg:text-7xl font-Creative my-4 text-[#d76457]">
                    What I have done so far
                </p>
                <h2 className="text-center text-white text-xl lg:text-3xl font-sans">
                    Work Experience
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, "work");