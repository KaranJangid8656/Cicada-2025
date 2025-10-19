export type Event = {
  slug: string
  title: string
  summary: string
  description: string
  clubName: string
  clubLogo?: string
  date: string
  Duration: string // added
  teamSize: string // added (e.g. "1-4 members")
  venue: string
  registrationFee: string // added (e.g. "₹150 per team")
  mode?: string // added (e.g. "Offline")
  registerUrl: string
  coverImage?: string
}

export const events: Event[] = [
  {
    slug: "hackathon",
    title: "CICADA Hackathon ",
    summary: "Build a software in 24 hours with mentorship and prizes.",
    description: `A 24-hour innovation marathon where creativity meets code. Teams tackle real-world challenges under expert mentorship, turning bold ideas into working prototypes that shape tomorrow. Collaborate in teams to prototype, build, and demo an AI-powered application. Tracks include vision, agents, and data science. Shortlisted teams pitch to judges.\n\nEvent Phases:\n1. Problem Statement Release\n2. Ideation & Prototype\n3. Mentorship Checkpoints\n4. Final Presentation & Judging\n\nHighlights:\n• Mentorship from Industry Experts\n• Prizes & Incubation\n• Real-world Problem Statements\n• Exposure to Innovation & Teamwork`,
    clubName: "AIT  Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Nov 6-7, 2025",
    Duration: "24 Hours",
    teamSize: "3 - 4 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹ 800 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025", // replace later with Google Form
  },
  {
    slug: "ipl-auction",
    title: "IPL Auction: Cricket Strategy Challenge",
    summary: "Build your dream team by bidding smart within the purse and balancing your lineup perfectly.",
    description: `Experience the thrill of IPL auctions in this strategic team-building challenge! Participants will act as franchise owners, using their auction purse to bid on players across different categories. Success depends on smart budgeting, player analysis, and creating a balanced team that can dominate the tournament.\n\nKey Challenges:\n• Player Analysis & Valuation\n• Budget Management\n• Team Composition Strategy\n• Auction Dynamics & Timing\n\nLearning Outcomes:\n• Develop strategic thinking and decision-making under pressure\n• Learn budget management and player valuation skills\n• Understand team dynamics and balanced composition\n• Enhance collaboration and communication within a team`,
    clubName: "Sports Analytics Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Nov 6, 2025",
    Duration: "3 - 4 hours",
    teamSize: "3 members per franchise",
    venue: "Atria Institute of Technology",
    registrationFee: "₹ 150 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "intruverse-ctf",
    title: "INTRUVERSE: The Local Breach",
    summary: "Offline VM-based CTF: hack, exploit, and capture the root flag!",
    description: `INTRUVERSE is a fully offline, VM-based Capture The Flag (CTF) challenge crafted to test your real-world hacking mindset. Each team will face a self-contained virtual environment filled with hidden vulnerabilities, twisted logic, and chained exploits. Your mission: gain access, move through the system, and uncover the ultimate root flag.\n\nFlag Stages:\n1. User-level flag\n2. Root-level flag\n3. Hidden metadata flag\n\nEach team gets access to a unique target machine on their own system. The CTF includes multiple flag stages, all contributing to a cumulative score.\n\nLearning Outcomes:\n• Practice real-world offensive skills: exploit discovery, chaining, and privilege escalation\n• Work with isolated VMs and safe offline hacking workflows\n• Analyze forensics & hidden metadata to recover flags\n• Improve team coordination under timed, adversarial conditions`,
    clubName: "Cybersecurity Club",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760269199/CyberSec-AIT_jtlgdt.png",
    date: "Nov 6, 2025",
    Duration: "3 - 4 hours",
    teamSize: "2 members per team",
    venue: "Atria Institute of Technology",
    registrationFee: "₹150 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "llm-odyssey",
    title: "LLM Odyssey: Journey through the Realms of Recognition",
    summary: "Build an LLM with speech-to-text: AI meets audio in this hands-on challenge!",
    description: `LLM Odyssey is an epic AI-building event that challenges participants to create their own Large Language Model (LLM) infused with speech-to-text capability — where spoken words become the raw material of machine understanding. Teams will build, train, and fine-tune their models, designing systems that convert live audio input into intelligent, context-aware text. You’ll explore the fusion of Natural Language Processing (NLP), speech recognition, and model engineering, pushing the boundaries of human-AI interaction.\n\nEvent Stages:\n1. Setting up the speech-to-text system\n2. Training the LLM\n3. Testing response accuracy\n\nEach stage gives you points, and your total score will decide your final ranking.\n\nLearning Outcomes:\n• Build and fine-tune LLMs\n• Integrate speech-to-text with NLP\n• Test and improve model accuracy\n• Strengthen teamwork and problem-solving`,
    clubName: "AIT AI Club",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760378401/ai_club-removebg-preview_szuluv.png",
    date: "Nov 6 , 2025",
    Duration: "3 -4 hours",
    teamSize: "2 members per team",
    venue: "Atria Institute of Technology",
    registrationFee: "₹100 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "proto-race",
    title: "PROTO RACE: The IoT Challenge",
    summary: "On-campus IoT race: decode clues, find components, build and run a real project!",
    description: `PROTO RACE is an innovative on-campus IoT challenge designed to test participants' technical skills, logical thinking, and problem-solving abilities in a fun and competitive way. Participants will receive a series of clues related to IoT components used in a real-time project. By solving each clue, they must locate the corresponding IoT component hidden around the campus. Once all components are collected, teams must assemble the complete IoT project and upload the working code. The team that successfully assembles and runs the project first will be declared the winner. The event combines hands-on IoT learning, teamwork, and logical reasoning — bridging fun and technical knowledge through an exciting race format.\n\nEvent Flow:\n1. Each team will start with the first clue, which hints at a specific IoT component.\n2. Teams must decode the clue and locate the hidden component in the designated areas of the campus.\n3. After finding all the required components, teams will assemble a working IoT project (as instructed).\n4. The final step is to upload and execute the project code.\n5. The team that completes the setup and code execution first will be the winner.\n\nLearning Outcomes:\n• Practical understanding of IoT components and sensors\n• Problem-solving and critical thinking\n• Team coordination and collaboration\n• Real-world application of IoT concepts.`,
    clubName: "IoT Forge Club",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760378462/iot_forge-removebg-preview_yclcrf.png",
    date: "Nov 6 , 2025",
    Duration: "3 - 4 hours",
    teamSize: "4 members per team",
    venue: "Atria Institute of Technology",
    registrationFee: "₹160 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
]
