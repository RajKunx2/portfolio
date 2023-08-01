import react from "../assets/react.png"
import dtu from "../assets/dtu.png"
import maths from "../assets/maths.png"

const experiences = [
    {
        title: "Electrical Engineering",
        company_name: "Delhi Technological University",
        icon: dtu,
        iconBg: "#E6DEDD",
        date: "NOV 2022 - PRESENT",
        points: [
            "Sophomore at DTU pursuing my B.Tech in Electrical Engineering.",
            "Collaborating with teams from various societies like E-Cell and Roundtable in various departments.",
            "Participating in various competitions and hackathons to level up myself."
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "Self Employed",
        icon: react,
        iconBg: "#E6DEDD",
        date: "FEB 2023 - PRESENT",
        points: [
            "Worked with over 7 clients in the past few months delivering them High-Performance Web Solutions.",
            "Developed websites for clients ranging from a travel agency to an interior design company."
        ],
    },
    {
        title: "Front End Web Developer",
        company_name: "MathsLoyal",
        icon: maths,
        iconBg: "#E6DEDD",
        date: "APRIL 2023 - JUNE 2023",
        points: [
            "Worked on the Front End part of the website, making it more appealing to the viewers.",
            "Developed and designed new login and registration home pages and various animations for a smoother experience."
        ],
    },
];

export { experiences };