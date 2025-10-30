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
  brochureImage?: string // Added for event brochure
}

export const events: Event[] = [
  {
    slug: "hackathon",
    title: "CICADA Hackathon ",
    summary: "Build a software in 24 hours with mentorship and prizes.",
    description: `A 24-hour innovation marathon where creativity meets code. Teams tackle real-world challenges under expert mentorship, turning bold ideas into working prototypes that shape tomorrow. Collaborate in teams to prototype, build, and demo an AI-powered application. Tracks include vision, agents, and data science. Shortlisted teams pitch to judges.\n\n Event Phases :\n1. Problem Statement Release\n2. Ideation & Prototype\n3. Mentorship Checkpoints\n4. Final Presentation & Judging\n\n Perks & Amenities :\n• 3 Meals (Breakfast, Lunch, Dinner)\n• Snacks & Refreshments\n• Pizza!\n• Continuous Tea & Coffee Supply\n• Exclusive Swags for participants`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1761035597/CICADA_HACKATHON_srpido.png",
    brochureImage: "/Hackathon.png",
    clubName: "AIT  Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Nov 7-8, 2025",
    Duration: "24 Hours",
    teamSize: "3 - 4 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹ 800 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025", // replace later with Google Form
  },
  {
    slug: "project-expo",
    title: "Project Expo - The Innovation Show",
    summary: "Showcase your innovative projects in AI, IoT, Robotics, Cybersecurity, and Green Tech to academic judges",
    description: `Project Expo – Showcase Your Innovation is an exclusive exhibition event for 7th-semester students to present their most creative and impactful projects to a panel of industry professionals and academic experts. It's a unique opportunity to demonstrate technical skill, problem-solving, and visionary thinking across cutting-edge domains.\n\nParticipants can showcase projects in areas such as:\n• Artificial Intelligence & Machine Learning\n• Internet of Things (IoT)\n• Cybersecurity\n• Robotics and Automation\n• Green Technology & Sustainability\n• Data Science & Analytics\n• Web & Mobile Applications\n\nWhether it's a working prototype, a research-based solution, or a conceptual model, the expo celebrates innovation that addresses real-world challenges. Presenters will engage with judges, receive valuable feedback, and compete for recognition, prizes, and networking opportunities.\n\nHighlights:\n• 100+ projects on display\n• Judged by industry professionals\n• Mentorship and incubation opportunities\n• Prizes and certificates for top innovations\n• Networking with industry experts`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760969089/Untitled_design_h0ch4k.png",
    brochureImage: "/project expo.png",
    clubName: "Innovation Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Nov 5, 2025",
    Duration: "5–6 hrs",
    teamSize: "Max of 4 members per team",
    venue: "Atria Institute of Technology",
    registrationFee: "₹400 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
   {
    slug: "intruverse-ctf",
    title: "INTRUVERSE: The Local Breach",
    summary: "Test your cybersecurity skills in this thrilling CTF competition - all levels welcome!",
    description: `Get ready for a thrilling CTF competition that puts your cybersecurity skills to the test! Open to all levels - beginners welcome! Join forces with your team to crack codes, uncover vulnerabilities, and capture the ultimate root flag.

Challenge Streams:

1. Web: Uncover hidden vulnerabilities and injection flaws in logically built web challenges.
2. VM: Exploit system weaknesses, navigate through intricate network topologies, and outsmart defensive mechanisms in a virtual environment.
3. File System: Uncover hidden secrets, decrypt mysterious files, and reconstruct fragmented data to reveal the truth in file system forensics challenges.`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760965058/intrucv_lqqi1l.jpg",
    brochureImage: "/dub Intruverse.png",
    clubName: "Cybersecurity Club",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760269199/CyberSec-AIT_jtlgdt.png",
    date: "Nov 6, 2025",
    Duration: "3 - 4 hours",
    teamSize: "3 members per team",
    venue: "Atria Institute of Technology",
    registrationFee: "₹150 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "ipl-auction",
    title: "IPL Auction: Cricket Strategy Challenge",
    summary: "Build your dream team by bidding smart within the purse and balancing your lineup perfectly.",
    description: `In this unique IPL Auction challenge, you'll be the team owner and strategist, making crucial decisions to build a championship-winning squad. With a fixed purse amount, you'll compete against other participants to bid on players, manage your budget, and create a balanced team that can perform in all conditions.\n\n<strong>The event consists of two rounds: The first round is a quiz, and the top 10 teams will be allowed to take part in the auction.</strong>\n\nKey Features:\n• Realistic player database with stats and base prices\n• Dynamic auction environment with live bidding\n• Strategic team composition challenges\n• Budget management and value-based bidding\n\nHow it works:\n1. Each participant gets a virtual budget\n2. Players are auctioned in rounds\n3. Bid strategically to build your dream team\n4. Balance your squad with batsmen, bowlers, and all-rounders\n5. Win based on team strength and budget efficiency\n\nPrizes for the best team compositions and most strategic bidders!`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760971638/ipl-2021-ix7zwgff29ylomuf_ina4fe.jpg",
    brochureImage: "/ipl.png",
    clubName: "Sports Analytics Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Nov 6, 2025",
    Duration: "Endless fun",
    teamSize: "3 members per team",
    venue: "Atria Institute of Technology",
    registrationFee: "₹200 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
 
  {
    slug: "agentic-ai",
    title: "Agentic AI challenge",
    summary: "Build an LLM with speech-to-text: AI meets audio in this hands-on challenge!",
    description: `Participants are tasked with building an AI agent that can think, reason, and act autonomously—not just respond to prompts. This goes beyond traditional chatbot behavior and ventures into the realm of agentic intelligence, where the AI can plan, make decisions, and execute tasks independently.\n\nYou can use tools like LangChain, LlamaIndex, Hugging Face, FastAPI, Flask, or OpenAI Function Calling to build your agent. Custom-built logic is also welcome—any stack that supports autonomous reasoning is fair game.\n\nParticipants in the Agentic AI Challenge are encouraged to use a wide range of technologies to design agents that can think, reason, and act independently. You’re free to choose from open-source frameworks or build your own custom logic.`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1761040526/agentic_ai_do9mf7.jpg",
    brochureImage: "/Agentic AI.png",
    clubName: "AIT AI Club",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760378401/ai_club-removebg-preview_szuluv.png",
    date: "Nov 6 , 2025",
    Duration: "4 - 6 hours",
    teamSize: "3 members per team",
    venue: "Atria Institute of Technology",
    registrationFee: "₹150 per team",
    mode: "Offline",
    registerUrl: "https://unstop.com/p/agentic-ai-ideathon-atria-institute-of-technology-1576729?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=congratulations-your-listing-for-agentic-ai-ideathon-is-complete",
  },
  
  
  
  
  {
    slug: "proto-race",
    title: "PROTO RACE: The IoT Challenge",
    summary: "On-campus IoT race: decode clues, find components, build and run a real project!",
    description: `PROTO RACE is an innovative on-campus IoT challenge designed to test participants' technical skills, logical thinking, and problem-solving abilities in a fun and competitive way. Participants will receive a series of clues related to IoT components used in a real-time project. By solving each clue, they must locate the corresponding IoT component hidden around the campus. Once all components are collected, teams must assemble the complete IoT project and upload the working code. The team that successfully assembles and runs the project first will be declared the winner. The event combines hands-on IoT learning, teamwork, and logical reasoning — bridging fun and technical knowledge through an exciting race format.\n\nEvent Flow:\n1. Each team will start with the first clue, which hints at a specific IoT component.\n2. Teams must decode the clue and locate the hidden component in the designated areas of the campus.\n3. After finding all the required components, teams will assemble a working IoT project (as instructed).\n4. The final step is to upload and execute the project code.\n5. The team that completes the setup and code execution first will be the winner.\n\nLearning Outcomes:\n• Practical understanding of IoT components and sensors\n• Problem-solving and critical thinking\n• Team coordination and collaboration\n• Real-world application of IoT concepts.`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760965186/1_hfampo.jpg",
    brochureImage: "/Proto Race.png",
    clubName: "IoT Forge Club",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760960677/iot_forge-modified_v2gvml.png",
    date: "Nov 6 , 2025",
    Duration: "3 - 4 hours",
    teamSize: "Team of 4",
    venue: "Atria Institute of Technology",
    registrationFee: "₹150 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  {
    slug: "markethon",
    title: "Markethon - The Ad Making Marathon",
    summary: "Put your marketing minds to the test with Markethon 2025 — the ultimate ad-making challenge!",
    description: `Markethon - The Ad Making Marathon is designed to simulate the thrill and pressure of real-world marketing campaigns, challenging teams to think on their feet and deliver persuasive, visually engaging content. Participants typically receive a theme or brief—such as a product launch, social cause, or brand challenge—and must conceptualize, design, and present an ad within a limited timeframe. Whether it’s a poster, video, or pitch, the focus is on originality, clarity, and impact. This event is perfect for aspiring marketers, designers, and storytellers who want to showcase their branding instincts and creative flair.\n\nIn teams of 3–5, students will conceptualize, script, and shoot a 1–2 minute marketing advertisement for a real or imaginary product. You'll have the entire campus as your creative playground; use any location, prop, or idea to bring your concept to life!\n\nCreativity, originality, and marketing brilliance will decide who takes home the title of Markethon Champions 2025!`,
    coverImage: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760971845/Orange_and_Cream_Illustration_Marketing_Plan_Presentation_bm5kvg.jpg",
    clubName: "E-Cell Atria",
    clubLogo: "https://res.cloudinary.com/dx9bvma03/image/upload/v1760959250/E-Cell_Atria_Logo_Option_4_1_h0lvih.jpg",
    date: "Nov 5, 2025",
    Duration: "3 - 4 hours",
    teamSize: "3–5 members",
    venue: "Atria Institute of Technology",
    registrationFee: "₹250 per team",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
  
  
    
  {
    slug: "esports",
    title: "Esports Tournament: Free Fire and BGMI",
    summary: "Compete in Free Fire and BGMI tournaments in teams of 4. Showcase your skills and win prizes!",
    description: `ESPORTS TOURNAMENT 2025

        Gear up for the ultimate Esports showdown at CICADA 2025! Whether you're a clutch master, a sniper pro, or the ultimate strategist, this is your chance to prove your gaming skills on the big stage.

   Form a squad of 4 players and compete in two of the most iconic battle royale titles — Free Fire and PUBG Mobile. Each match will test your team coordination, reaction time, and game sense as you fight for survival and domination. With thrilling matches, intense rivalries, and high stakes, CICADA 2025's Esports tournament is where legends are made. Stand out with your strategies, communicate flawlessly with your teammates, and showcase your reflexes to claim victory.

    Top-performing teams will not only earn bragging rights but also grab exciting prizes and exclusive recognition at the event. Spectators can enjoy live streams, match highlights, and real-time leaderboards to keep the adrenaline pumping.

   Don't miss this opportunity to experience the rush of competitive gaming, meet fellow esports enthusiasts, and make your mark on CICADA 2025. Sign up now, assemble your squad, and prepare to dominate the battlefield!


`,
    coverImage: "/pubg.jpg",
    clubName: "Esports Club",
    clubLogo: "/ait-ai-club-logo.jpg",
    date: "Oct 23-24, 2025",
    Duration: "2 days",
    teamSize: "4 members per team",
    venue: "Atria Institute of Technology",
    registrationFee: "₹200 per pass",
    mode: "Offline",
    registerUrl: "https://konfhub.com/cicada-2025",
  },
]
