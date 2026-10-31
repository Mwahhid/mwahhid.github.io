// All site copy lives here. Source of truth is ../cv.md. Before editing, check
// its public-safety rules and the career-coach skill's wording rules:
// - no internal project names, vendor names, or employer security configuration
// - "organization", not "hospital"; "governance and support", not "run Azure"
// - no privileged-role count (kept off public channels, decided 2026-10-31)
// - [IN PROGRESS] work stays present tense; prototypes are called prototypes

export const profile = {
    name: "Mwahhid Majeed",
    role: "Cloud Infrastructure Engineer II",
    org: "St. Jude Children's Research Hospital",
    location: "Tennessee",
    intro: "I build cloud automation and operate an enterprise AI model access platform used by 45+ teams. On a two-person cloud team, I provide governance and support for 90+ Azure subscriptions.",
    linkedin: "https://www.linkedin.com/in/mwahhid-majeed/",
    github: "https://github.com/Mwahhid",
};

// Shown as a status readout under the hero.
export const asOf = "October 2026";
export const readout = [
    { label: "Azure subscriptions supported", value: "90+" },
    { label: "Access requests automated", value: "562" },
    { label: "Teams on the AI platform", value: "45+" },
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
                    "Provide governance and support for 90+ Azure subscriptions on a two-person cloud team.",
                    "Operate the organization's enterprise AI model access platform on Microsoft Foundry and Azure API Management: 45+ teams, 155+ users, 175+ model deployments.",
                    "Lead Azure delivery for a five-engineer managed-services vendor team: define requirements, mentor engineers, and review work for production readiness.",
                    "Defined requirements and validated the production release of automated AI platform reporting on deployments, access, and team-level spend.",
                    "Expanded operational reporting to combine subscription, compliance, service-request, cost, and AI usage data, with cost-center drill-through.",
                    "Led AI integration and evaluation for a ticket-triage prototype (83% routing accuracy across 20 teams on 59 held-out tickets) and presented the live demo to leadership.",
                    "Led a hands-on prompt-engineering lab for 50+ attendees and wrote AI setup guides for researchers and technologists.",
                ],
            },
            {
                title: "Cloud Infrastructure Engineer I",
                dates: "Jul 2024 – Jun 2026",
                points: [
                    "Implemented the organization's enterprise AI model access platform from a high-level architecture, designing key components and operating the service.",
                    "Designed and built ServiceNow-to-Azure self-service access automation with PowerShell Azure Functions: 562 requests processed through October 2026, an estimated 100+ cloud-team hours saved.",
                    "Executed every Azure-side change in an enterprise privileged-role reduction, partnering with the Identity team.",
                    "Owned monthly Azure billing and chargeback for 90+ subscriptions, plus billing for 8+ AWS accounts.",
                    "Wrote 80+ scripts and templates in PowerShell, Python, and Bicep/ARM for cloud administration, reporting, deployment, and access management.",
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

// Descriptions match cv.md's Academic Projects. `link` is optional.
export const projects = [
    {
        name: "Raft consensus",
        lang: "Go",
        description: "Distributed consensus library in Go.",
    },
    {
        name: "MapReduce",
        lang: "Go",
        description: "Distributed MapReduce framework in Go.",
    },
    {
        name: "Sentiment analysis",
        lang: "Python",
        description: "Review classifier built with TensorFlow/Keras neural networks and XGBoost.",
        link: "https://github.com/Mwahhid/Sentiment-Analysis",
    },
    {
        name: "Web server",
        lang: "C",
        description: "HTTP over TCP/IP, written in C.",
        link: "https://github.com/Mwahhid/Web-Server",
    },
    {
        name: "UNIX shell",
        lang: "C",
        description: "UNIX shell written in C.",
        link: "https://github.com/Mwahhid/UNIX-Shell-in-C",
    }
];

export const skills = [
    { group: "Cloud", items: ["Microsoft Azure", "Microsoft Foundry", "Azure API Management", "Key Vault", "ServiceNow"] },
    { group: "Automation & IaC", items: ["PowerShell", "Python", "Bicep", "ARM templates", "Azure CLI", "Azure Functions", "Logic Apps", "Automation runbooks", "REST APIs"] },
    { group: "Identity & governance", items: ["Entra ID", "Azure RBAC", "PIM / JIT", "Azure Policy", "Management groups", "Tagging & compliance"] },
    { group: "Networking", items: ["VNets & NSGs", "Private endpoints", "Private DNS", "Virtual WAN, VPN, ExpressRoute (support)"] },
    { group: "Monitoring & reporting", items: ["Azure Monitor", "Log Analytics (KQL)", "Power BI", "Cost Management", "Splunk"] },
    { group: "Programming", items: ["PowerShell", "Python", "KQL", "SQL", "Bash"] },
    { group: "Coursework & academic projects", items: ["Go", "C", "C#", "Java", "JavaScript"] },
];

export const credentials = [
    "Azure Administrator Associate (AZ-104)",
    "Azure Network Engineer Associate (AZ-700)",
    "Azure Fundamentals (AZ-900)",
    "B.S. Computer Science, minor in Mathematics, Rhodes College, 2024",
];
