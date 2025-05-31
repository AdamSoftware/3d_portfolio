import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    golang,
    sqlite,
    CSharp,
    MySQL,
    Azure,
    vim,
    FoxValley
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sqlite,
        name: "SQLite",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "Backend",
    },
    {
        imageUrl: CSharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Database"
    },
    {
        imageUrl: Azure,
        name: "Azure",
        type: "Cloud",
    },
    {
        imageUrl: vim,
        name: "Vim",
        type: "Editor",
    },
];

export const experiences = [
    {
        title: "College Student",
        company_name: "Fox Valley Technical College",
        icon: FoxValley,
        iconBg: "#accbe1",
        date: "September 2022 - May 2025",
        points: [
            "Pursuing a degree in Software Development with a focus on full-stack development.",
            "Learning various programming languages and technologies including JavaScript, C#, Node.js, SQLite, MySql and C++.",
            "Participating in collaborative projects to build real-world applications.",
            "Engaging in hands-on coding exercises and labs to enhance practical skills.",
            "Spending time learning about cyber security during the first year of college.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AdamSoftware',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/adam-steinberg-031541290/',
    }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Bus API',
        description: 'Developed a RESTful API for managing bus schedules and routes, enabling efficient transportation management. Using Golang and Sqlite.',
        link: '',
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Bus Frontend',
        description: 'Developed a frontend application for the bus API, providing a user-friendly interface for managing bus schedules and routes. Using React and Tailwind CSS. and expo for the framework.',
        link: '',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Suited-Up',
        description: 'Creating a Matroidvania game with a unique twist, by adding a rpg element into the game where the player can add abiltys by sewing different suits together.',
        link: '',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'BarDice',
        description: 'School project making a bardice game that would connect using signalR to multiplayer and also using c# to make an API and Maui for the frontend.',
        link: '',
    }
];