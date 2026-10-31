// All site copy lives here. Source of truth is ../cv.md; keep public-safe
// (no internal project names, vendor names, or security configuration).

export const profile = {
    name: "Mwahhid Majeed",
    role: "Cloud Infrastructure Engineer",
    org: "St. Jude Children's Research Hospital",
    location: "Tennessee",
    intro: "I run Azure for a research hospital: 90+ subscriptions, the automation that grants access safely, and the platform teams use to reach AI models.",
    linkedin: "https://www.linkedin.com/in/mwahhid-majeed/",
    github: "https://github.com/Mwahhid",
};

// Shown as a status readout under the hero. Figures as of Oct 2026.
export const readout = [
    { label: "Azure subscriptions supported", value: "90+" },
    { label: "Access requests automated", value: "562" },
    { label: "Privileged roles removed", value: "600+" },
    { label: "AI platform users", value: "155+" },
];

// Grouped by organization so the promotion path reads top to bottom.
export const work = [
    {
        org: "St. Jude Children's Research Hospital",
        roles: [
            {
                title: "Cloud Infrastructure Engineer II",
                dates: "Jun 2026 – Present",
                points: [
                    "Run enterprise Azure operations across 90+ subscriptions on a two-person cloud team.",
                    "Administer an enterprise AI model access platform on Microsoft Foundry and Azure API Management: 155+ users, 175+ model deployments, 45+ teams.",
                    "Lead a 5-engineer managed-services vendor team: assign work, mentor, and review Azure Policy rollouts, monitoring dashboards, and Key Vault secret rotation for production readiness.",
                    "Deploy private-by-default with Bicep: private endpoints, private DNS, managed identity.",
                    "Built a reporting platform that combines subscription, compliance, cost, and AI usage data, down to per-user and per-model detail.",
                ],
            },
            {
                title: "Cloud Infrastructure Engineer I",
                dates: "Jul 2024 – Jun 2026",
                points: [
                    "Built and operated the hospital's centrally managed AI model access service.",
                    "Designed a ServiceNow-to-Azure self-service workflow for role requests (PowerShell Azure Functions, RBAC, PIM/JIT). 562 requests so far, an estimated 100+ hours saved.",
                    "Removed 600+ unnecessary standing privileged role assignments as the sole Azure-side executor of an enterprise privileged-role reduction.",
                    "Owned monthly billing and chargeback for 90+ Azure subscriptions and 8+ AWS accounts.",
                    "Wrote 80+ PowerShell, Python, and Bicep/ARM scripts and templates for administration, reporting, and access management.",
                ],
            },
            {
                title: "Information Services Intern / Student Worker",
                dates: "Jun 2023 – May 2024",
                points: [
                    "Led development of a Microsoft Teams chatbot on Power Virtual Agents and Azure Cognitive Search that answers questions from structured text files.",
                    "Automated monthly Azure subscription reporting with PowerShell runbooks and Logic Apps.",
                    "Integrated Azure Activity Logs with Splunk and automated subscription onboarding through its API.",
                ],
            },
        ],
    },
    {
        org: "Rhodes College",
        roles: [
            {
                title: "Computer Science Peer Tutor",
                dates: "Sep 2021 – May 2024",
                points: [
                    "Tutored 250+ students one-on-one in Python and Java: object-oriented programming, data structures, debugging, and unit testing.",
                ],
            },
            {
                title: "Math Supplemental Instruction Leader",
                dates: "Aug 2021 – May 2022",
                points: ["Led 3 Calculus 2 sessions per week."],
            },
        ],
    },
];

// `link` is optional: projects without a public repo say so instead.
export const projects = [
    {
        name: "Raft consensus",
        lang: "Go",
        description: "Distributed consensus library implementing Raft: leader election, log replication, and recovery from node failures.",
    },
    {
        name: "MapReduce",
        lang: "Go",
        description: "Distributed MapReduce framework that coordinates workers through the map and reduce phases.",
    },
    {
        name: "Sentiment analysis",
        lang: "Python",
        description: "Classifies reviews as positive or negative, comparing TensorFlow/Keras neural networks with XGBoost decision trees.",
        link: "https://github.com/Mwahhid/Sentiment-Analysis",
    },
    {
        name: "Web server",
        lang: "C",
        description: "HTTP server built directly on TCP/IP sockets.",
        link: "https://github.com/Mwahhid/Web-Server",
    },
    {
        name: "UNIX shell",
        lang: "C",
        description: "A shell for interacting with a Linux system: running programs, built-in commands, and process control.",
        link: "https://github.com/Mwahhid/UNIX-Shell-in-C",
    },
];

export const skills = [
    { group: "Cloud", items: ["Microsoft Azure", "Microsoft Foundry", "Azure API Management", "Key Vault", "ServiceNow"] },
    { group: "Automation & IaC", items: ["PowerShell", "Python", "Bicep", "ARM templates", "Azure Functions", "Logic Apps", "Automation runbooks", "REST APIs"] },
    { group: "Identity & governance", items: ["Entra ID", "Azure RBAC", "PIM / JIT", "Azure Policy", "Management groups", "Tagging & compliance"] },
    { group: "Networking", items: ["VNets & NSGs", "Private endpoints", "Private DNS", "Virtual WAN, VPN, ExpressRoute (support)"] },
    { group: "Monitoring & reporting", items: ["Azure Monitor", "Log Analytics (KQL)", "Power BI", "Cost Management", "Splunk"] },
    { group: "Languages", items: ["PowerShell", "Python", "KQL", "SQL", "Bash", "C#", "Java", "Go", "C", "JavaScript"] },
];

export const credentials = [
    "Azure Administrator Associate (AZ-104)",
    "Azure Network Engineer Associate (AZ-700)",
    "Azure Fundamentals (AZ-900)",
    "B.S. Computer Science, minor in Mathematics, Rhodes College, 2024",
];
