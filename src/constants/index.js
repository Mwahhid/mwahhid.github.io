import { rhodes, stjude } from "../assets/images";
import {
    car,
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
    tensorflow,
    github,
    html,
    java,
    javascript,
    linkedin,
    react,
    snapgram,
    summiz,
    threads
} from "../assets/icons";

export const skills = [
    {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud Platform",
    },
    {
        imageUrl: powershell,
        name: "PowerShell",
        type: "Automation",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Automation",
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
        imageUrl: c_sharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: c_language,
        name: "C",
        type: "Systems",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Deep Learning Framework",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Deep Learning Framework",
    }
];

export const experiences = [
    {
        title: "Cloud Infrastructure Engineer II",
        company_name: "St. Jude Children's Research Hospital",
        icon: stjude,
        iconBg: "#d01949",
        date: "Jun 2026 - Present",
        points: [
            "Run enterprise Azure operations across 90+ subscriptions on a two-person cloud team.",
            "Administer an enterprise AI model access platform on Microsoft Foundry and Azure API Management, supporting 155+ users, 175+ model deployments, and 45+ teams.",
            "Lead a 5-engineer managed-services vendor team: assign work, mentor, and review implementations for production readiness, including Azure Policy rollouts, monitoring dashboards, and Key Vault secret rotation.",
            "Deploy Azure resources private-by-default with Bicep (private endpoints, private DNS, managed identity).",
            "Built an operational reporting platform that combines subscription, compliance, service-request, cost, and AI usage data with per-user and per-model detail.",
            "Diagnosed a Microsoft Foundry product limitation, supplied reproducible diagnostics, and escalated to Microsoft, which confirmed it through engineering.",
        ],
    },
    {
        title: "Cloud Infrastructure Engineer I",
        company_name: "St. Jude Children's Research Hospital",
        icon: stjude,
        iconBg: "#d01949",
        date: "Jul 2024 - Jun 2026",
        points: [
            "Built and operated the hospital's centrally managed AI model access service (Microsoft Foundry, API Management, Key Vault, private networking).",
            "Designed and built a ServiceNow-to-Azure self-service workflow for Azure role requests (PowerShell Azure Functions, REST APIs, RBAC, PIM/JIT) that has processed 562 requests and saved an estimated 100+ hours.",
            "Remediated 600+ unnecessary standing privileged role assignments as the sole Azure-side executor of an enterprise privileged-role reduction.",
            "Owned monthly billing and chargeback for 90+ Azure subscriptions and 8+ AWS accounts.",
            "Wrote 80+ PowerShell, Python, and Bicep/ARM scripts and templates for administration, reporting, deployment, and access management.",
            "Built Power BI dashboards, KQL queries, and automated email reports with Logic Apps, Azure Functions, and Automation Accounts.",
        ],
    },
    {
        title: "Information Services Intern / Student Worker",
        company_name: "St. Jude Children's Research Hospital",
        icon: stjude,
        iconBg: "#f4a6b8",
        date: "Jun 2023 - May 2024",
        points: [
            "Led the Agile development of a Microsoft Teams chatbot (Power Virtual Agents, Azure Cognitive Search, Power Automate, REST APIs) that extracts data from structured text files and answers user questions.",
            "Automated monthly Azure subscription reporting with PowerShell runbooks, Logic Apps, Outlook integration, and webhooks.",
            "Integrated Azure Activity Logs with Splunk, and automated subscription onboarding to Splunk through its APIs and PowerShell.",
            "Built 2 ServiceNow catalog forms for self-service requests.",
        ],
    },
    {
        title: "Computer Science Peer Tutor",
        company_name: "Rhodes College",
        icon: rhodes,
        iconBg: "#fbc3bc",
        date: "Sep 2021 - May 2024",
        points: [
            "Tutored 250+ students one-on-one in Python and Java, covering object-oriented programming, data structures, code efficiency, debugging, and unit testing.",
        ],
    },
    {
        title: "Math Supplemental Instruction Leader",
        company_name: "Rhodes College",
        icon: rhodes,
        iconBg: "#b7e4c7",
        date: "Aug 2021 - May 2022",
        points: [
            "Led 3 Supplemental Instruction sessions per week for Calculus 2.",
        ],
    },
];

export const socialLinks = [
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

// `link` is optional: projects without a public repo show "Code available on request".
export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Raft Consensus',
        description: 'Distributed consensus library in Go implementing the Raft protocol: leader election, log replication, and fault tolerance.',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'MapReduce Framework',
        description: 'Distributed MapReduce framework in Go that coordinates workers across map and reduce phases.',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Sentiment Analysis',
        description: 'Review classifier in Python that predicts whether a review is positive or negative, comparing TensorFlow/Keras neural networks with XGBoost decision trees.',
        link: 'https://github.com/Mwahhid/Sentiment-Analysis',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Web Server',
        description: 'HTTP web server written in C on top of TCP/IP sockets.',
        link: 'https://github.com/Mwahhid/Web-Server',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'UNIX Shell',
        description: 'UNIX shell written in C that provides basic functionality to interact with a Linux system.',
        link: 'https://github.com/Mwahhid/UNIX-Shell-in-C',
    }
];
