import { rhodes, stjude } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    azure,
    python,
    c_language,
    c_sharp,
    numpy,
    pandas,
    powershell,
    pytorch,
    racket,
    spring,
    tensorflow,
    github,
    html,
    java,
    javascript,
    linkedin,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads
} from "../assets/icons";

export const skills = [
    {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud Platform",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: c_language,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: c_sharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: numpy,
        name: "NumPy",
        type: "Data Processing Library",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Data Processing Library",
    },
    {
        imageUrl: powershell,
        name: "PowerShell",
        type: "Scripting Language",
    },
    {
        imageUrl: racket,
        name: "Racket",
        type: "Functional Language",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Deep Learning Framework",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Deep Learning Framework",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
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
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Information Services Intern",
        company_name: "St. Jude Children's Research Hospital",
        icon: stjude,
        iconBg: "#d01949",
        date: "Jun 2023 - Present",
        points: [
            "Led Agile development of a MS Teams chatbot using MS Power Virtual Agents integrated with Azure Cognitive Search via Power Automate and REST API that extracts data from structured text files and answers user queries.",
            "Designed and implemented a solution to automate monthly Azure subscription reporting via email by leveraging PowerShell runbooks, Azure Logic Apps, and Outlook integration using HTTP Requests and webhooks.",
            "Integrated Microsoft Azure Activity Logs with Splunk and automated addition of all subscriptions to Splunk using Splunk API and PowerShell runbook, optimizing log monitoring and analysis processes.",
            "Leveraged Oomnitza, Absolute, and ServiceNow to analyze endpoint device issues, while also deploying software via Microsoft Endpoint Configuration Manager (MECM) to enhance security and compliance.",
            "Generated monthly billing reports using Azure Cost Management to provide insights into cloud expenditure.",
        ],
    },
    {
        title: "Computer Science Tutor",
        company_name: "Rhodes College",
        icon: rhodes,
        iconBg: "#fbc3bc",
        date: "Sep 2021 - Present",
        points: [
            "Mentored 250+ students in Python and Java via 1:1 tutoring, focusing on Object-Oriented Programming, Data Structures, and code efficiency.",
            "Introduced and developed familiarity with JupyterHub and IntelliJ environments in addition to providing debugging assistance on projects using IDE debuggers and Unit Testing",
        ],
    },
    {
        title: "Math SI Leader",
        company_name: "Rhodes College",
        icon: rhodes,
        iconBg: "#b7e4c7",
        date: "Sep 2021 - May 2022",
        points: [
            "Hosted 3 Supplemental Instruction sessions for Calculus every week and assisted students grasp difficult concepts and solve problems in a timely manner",
        ],
    },
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
        link: 'https://github.com/Mwahhid',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mwahhid-majeed/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Texcribe',
        description: 'Developing a web application using Spring Boot and Azure NLP Services that summarizes meeting notes and provides a way to bridge between technical and non-technical stakeholders through language translation and simplification.',
        link: 'Link will be posted soon',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Sentiment Analysis',
        description: 'Implemented a Machine Learning program in Python to analyze whether a review is positive or negative. Used TensorFlow, Keras, and XGBoost to create models for Neural Networks and Decision Trees.',
        link: 'https://github.com/Mwahhid/Sentiment-Analysis',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Unix Shell',
        description: 'Implemented a UNIX shell in C that provides basic functionality to interact with a Linux system.',
        link: 'https://github.com/Mwahhid/UNIX-Shell-in-C',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Web Server',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Mwahhid/Web-Server',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Raft Distributed Consensus Module',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'Available on request',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'MapReduce framework',
        description: 'Implemented simple distributed MapReduce framework in Go',
        link: 'Available on request',
    }
];