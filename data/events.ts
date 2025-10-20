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
    description: `A 24-hour innovation marathon where creativity meets code. Teams tackle real-world challenges under expert mentorship, turning bold ideas into working prototypes that shape tomorrow. Collaborate in teams to prototype, build, and demo an AI-powered application. Tracks include vision, agents, and data science. Shortlisted teams pitch to judges.\n\n Event Phases :\n1. Problem Statement Release\n2. Ideation & Prototype\n3. Mentorship Checkpoints\n4. Final Presentation & Judging\n\n Perks & Amenities :\n• 3 Meals (Breakfast, Lunch, Dinner)\n• Snacks & Refreshments\n• Pizza!\n• Continuous Tea & Coffee Supply\n• Exclusive Swags for participants`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760198155/cicada_logo_no_bg_m0sjov.png",
    clubName: "AIT  Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Nov 6-7, 2025",
    Duration: "24 Hours",
    teamSize: "3 - 4 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹ 250 per head",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025", // replace later with Google Form
  },
  
  {
    slug: "intruverse-ctf",
    title: "INTRUVERSE: The Local Breach",
    summary: "Offline VM-based CTF: hack, exploit, and capture the root flag!",
    description: `INTRUVERSE is a fully offline, VM-based Capture The Flag (CTF) challenge crafted to test your real-world hacking mindset. Each team will face a self-contained virtual environment filled with hidden vulnerabilities, twisted logic, and chained exploits. Your mission: gain access, move through the system, and uncover the ultimate root flag.\n\nFlag Stages:\n1. User-level flag\n2. Root-level flag\n3. Hidden metadata flag\n\nEach team gets access to a unique target machine on their own system. The CTF includes multiple flag stages, all contributing to a cumulative score.\n\nLearning Outcomes:\n• Practice real-world offensive skills: exploit discovery, chaining, and privilege escalation\n• Work with isolated VMs and safe offline hacking workflows\n• Analyze forensics & hidden metadata to recover flags\n• Improve team coordination under timed, adversarial conditions`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760965058/intrucv_lqqi1l.jpg",
    clubName: "Cybersecurity Club",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760269199/CyberSec-AIT_jtlgdt.png",
    date: "Nov 6, 2025",
    Duration: "3 - 4 hours",
    teamSize: "3 - 4 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹50 per head",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "ipl-auction",
    title: "IPL Auction: Cricket Strategy Challenge",
    summary: "Build your dream team by bidding smart within the purse and balancing your lineup perfectly.",
    description: `In this unique IPL Auction challenge, you'll be the team owner and strategist, making crucial decisions to build a championship-winning squad. With a fixed purse amount, you'll compete against other participants to bid on players, manage your budget, and create a balanced team that can perform in all conditions.

Key Features:
• Realistic player database with stats and base prices
• Dynamic auction environment with live bidding
• Strategic team composition challenges
• Budget management and value-based bidding

How it works:
1. Each participant gets a virtual budget
2. Players are auctioned in rounds
3. Bid strategically to build your dream team
4. Balance your squad with batsmen, bowlers, and all-rounders
5. Win based on team strength and budget efficiency

Prizes for the best team compositions and most strategic bidders!`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760971638/ipl-2021-ix7zwgff29ylomuf_ina4fe.jpg",
    clubName: "Sports Analytics Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Nov 6, 2025",
    Duration: "2-3 hours",
    teamSize: "3 - 4 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹80 per head",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "llm-odyssey",
    title: "LLM Odyssey: Journey through the Realms of Recognition",
    summary: "Build an LLM with speech-to-text: AI meets audio in this hands-on challenge!",
    description: `LLM Odyssey is an epic AI-building event that challenges participants to create their own Large Language Model (LLM) infused with speech-to-text capability — where spoken words become the raw material of machine understanding. Teams will build, train, and fine-tune their models, designing systems that convert live audio input into intelligent, context-aware text. You’ll explore the fusion of Natural Language Processing (NLP), speech recognition, and model engineering, pushing the boundaries of human-AI interaction.\n\nEvent Stages:\n1. Setting up the speech-to-text system\n2. Training the LLM\n3. Testing response accuracy\n\nEach stage gives you points, and your total score will decide your final ranking.\n\nLearning Outcomes:\n• Build and fine-tune LLMs\n• Integrate speech-to-text with NLP\n• Test and improve model accuracy\n• Strengthen teamwork and problem-solving`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760971361/llm_p5m91j.png",
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
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760965186/1_hfampo.jpg",
    clubName: "IoT Forge Club",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760960677/iot_forge-modified_v2gvml.png",
    date: "Nov 6 , 2025",
    Duration: "3 - 4 hours",
    teamSize: "3 - 4 members ",
    venue: "Atria Institute of Technology",
    registrationFee: "₹50 per head",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "markethon",
    title: "Markethon - The Ad Making Marathon",
    summary: "Put your marketing minds to the test with Markethon 2025 — the ultimate ad-making challenge!",
    description: `In teams of 3–5, students will conceptualize, script, and shoot a 1–2 minute marketing advertisement for a real or imaginary product. You'll have the entire campus as your creative playground; use any location, prop, or idea to bring your concept to life!\n\nCreativity, originality, and marketing brilliance will decide who takes home the title of Markethon Champions 2025!`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760971845/Orange_and_Cream_Illustration_Marketing_Plan_Presentation_bm5kvg.jpg",
    clubName: "E-Cell Atria",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760959250/E-Cell_Atria_Logo_Option_4_1_h0lvih.jpg",
    date: "Nov 6, 2025",
    Duration: "3 - 4 hours",
    teamSize: "3–5 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹250",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "esports",
    title: "Esports Tournament: Free Fire and PUBG",
    summary: "Compete in Free Fire and PUBG tournaments in teams of 4.",
    description: `Gear up for the ultimate Esports showdown at CICADA 2025! Whether you're a clutch master, a sniper pro, or the ultimate strategist, this is your chance to prove your gaming skills on the big stage.

Form a squad of 4 players and compete in two of the most iconic battle royale titles — Free Fire and PUBG Mobile. Each match will test your team coordination, reaction time, and game sense as you fight for survival and domination.

 What to Expect:
  Team Size: 4 players per team
  Games: Free Fire & PUBG Mobile
  Rounds: Knockout + Finals
  Prizes: Exciting cash rewards, trophies, and exclusive CICADA 2025 merch for winners`,
    coverImage: "/pubg.jpg",
    clubName: "Esports Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Oct 23-24, 2025",
    Duration: "2 days",
    teamSize: "4 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹300 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  
    {
    slug: "project-expo",
    title: "Project Expo - The Innovation Show",
    summary: "Showcase your innovative projects in AI, IoT, Robotics, Cybersecurity, and Green Tech before industry and academic judges.",
    description: `Highlights:
- 100+ projects on display
- Judged by industry professionals
- Mentorship and incubation opportunities
- Prizes and certificates for top innovations`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760969089/Untitled_design_h0ch4k.png",
    clubName: "Innovation Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Nov 5, 2025",
    Duration: "5–6 hrs",
    teamSize: "3 - 4 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹140 per head",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
]
