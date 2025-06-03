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
        Description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML. It allows developers to control the layout, colors, fonts, and overall visual appearance of web pages."
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        Description: "Git is a distributed version control system that allows developers to track changes in their code, collaborate with others, and manage different versions of their projects. It is widely used in software development for its efficiency and flexibility."
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        Description: "GitHub is a web-based platform that uses Git for version control. It provides a collaborative environment for developers to host, share, and manage their code repositories. GitHub also offers features like issue tracking, pull requests, and project management tools."
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        Description: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of a webpage, allowing developers to define elements like headings, paragraphs, links, images, and more."
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        Description: "JavaScript is a high-level, dynamic programming language commonly used for adding interactivity and functionality to web pages. It allows developers to create responsive user interfaces, handle events, and manipulate the Document Object Model (DOM)."
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
        Description: "MongoDB is a NoSQL database that uses a flexible, document-oriented data model. It stores data in JSON-like documents, making it easy to work with unstructured or semi-structured data. MongoDB is known for its scalability and performance in handling large volumes of data."
    },
    {
        imageUrl: sqlite,
        name: "SQLite",
        type: "Database",
        Description: "SQLite is a lightweight, serverless relational database management system. It is designed for embedded applications and provides a simple way to store and retrieve data using SQL queries. SQLite is often used in mobile apps and small-scale projects due to its simplicity and ease of use."
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
        Description: "Next.js is a React framework that enables server-side rendering and static site generation. It provides features like automatic code splitting, optimized performance, and easy routing, making it a popular choice for building modern web applications."
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
        Description: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance applications. Node.js is commonly used for building APIs, real-time applications, and microservices."
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
        Description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of applications efficiently. React's virtual DOM and component-based architecture make it a popular choice for building dynamic and interactive web applications."
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        Description: "Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes for styling web applications. It allows developers to create custom designs quickly by composing utility classes, promoting a consistent and maintainable codebase."
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
        Description: "TypeScript is a superset of JavaScript that adds static typing to the language. It helps developers catch errors at compile time, improves code readability, and enhances the development experience. TypeScript is widely used in large-scale applications and frameworks like Angular and React.",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "Backend",
        Description: "Golang, or Go, is an open-source programming language designed for simplicity and efficiency. It is known for its strong concurrency support, making it ideal for building scalable and high-performance applications. Go is often used in cloud computing, microservices, and network programming."
    },
    {
        imageUrl: CSharp,
        name: "C#",
        type: "Backend",
        Description: "C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for building Windows applications, web services, and game development with Unity. C# offers strong typing, garbage collection, and a rich set of libraries for various application domains."
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Database",
        Description: "MySQL is a popular open-source relational database management system. It uses SQL (Structured Query Language) for managing and querying data. MySQL is known for its reliability, performance, and ease of use, making it a common choice for web applications and data-driven projects."
    },
    {
        imageUrl: Azure,
        name: "Azure",
        type: "Cloud",
        Description: "Azure is a cloud computing platform and service created by Microsoft. It provides a wide range of cloud services, including computing, storage, databases, and machine learning. Azure enables developers to build, deploy, and manage applications in the cloud, offering scalability and flexibility."
    },
    {
        imageUrl: vim,
        name: "Vim",
        type: "Editor",
        Description: "Vim is a highly configurable text editor that is known for its efficiency and speed. It is widely used by developers for coding and text editing due to its powerful features, keyboard shortcuts, and extensibility. Vim's modal editing approach allows users to perform complex tasks with minimal keystrokes."
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
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Bus Frontend',
        description: 'Developed a frontend application for the bus API, providing a user-friendly interface for managing bus schedules and routes. Using React and Tailwind CSS. and expo for the framework.',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Suited-Up',
        description: 'Creating a Matroidvania game with a unique twist, by adding a rpg element into the game where the player can add abiltys by sewing different suits together.',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'BarDice',
        description: 'School project making a bardice game that would connect using signalR to multiplayer and also using c# to make an API and Maui for the frontend.',
    }
];
