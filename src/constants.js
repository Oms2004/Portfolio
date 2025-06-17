// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import ml from './assets/tech_logo/ml.jpg';
import ai from './assets/tech_logo/ai.png';
import nlp from './assets/tech_logo/nlp.png';
import iot from './assets/tech_logo/iot.png';
import cloud from './assets/tech_logo/cloud.png';



// Experience Section Logo's
import focl from './assets/company_logo/focl.jpg';
import praj from './assets/company_logo/praj.jpg';
import engenears from './assets/company_logo/engenears.jpg';
import internshala from './assets/company_logo/internshala.png';

// Education Section Logo's
import gcoea from './assets/education_logo/gcoea.jpg';
import favicon from './assets/education_logo/favicon.png';
import school from './assets/education_logo/school.jpg';

// Project Section Logo's
import healthsense from './assets/work_logo/healthsense.jpg';
import ngo from './assets/work_logo/ngo.jpg';
import chatbot from './assets/work_logo/chatbot.jpg';
import movie from './assets/work_logo/movie.jpg';
import algopath from './assets/work_logo/algopath.png';
import ticketbook from './assets/work_logo/ticketbook.jpg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      {name: 'Machine Learning',logo:ml },
      {name: 'Artificial Inteligence',logo:ai },
      {name: 'Natural Language Processing',logo:nlp},
      {name: 'Internet Of Things',logo:iot},
      {name: 'Cloud Computing',logo:cloud},
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [

    {
      id: 0,
      img: gcoea,
      school: "Government College Of Engineering , Amravati",
      date: "Nov 2022 - May 2026",
      grade: "8.66 GPA",
      desc: "I pursuing my Bachelor's degree in Information Technology (IT) from Government College Of Engineering , Amravati. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
      id: 1,
      img: favicon,
      school: "Z.P Agarkar Jr.Science College,Akola",
      date: "Mar 2020 - Mar 2022",
      grade: "91.67%",
      desc: "I completed my class 12 education from Z.P Agarkar Jr.Science College,Akola , under the State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Electrical Maintenance.",
      degree: "HSC(XII) - PCM with Electrical Maintenance",
    },
    {
      id: 2,
      img: school,
      school: "Bharat Vidyalaya,Akola",
      date: "Mar 2019 - March 2020",
      grade: "93.60%",
      desc: "I completed my class 10 education from Bharat Vidyalaya School, Akola , under the Maharashtra State board.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "HealthSense AI -Personal Health Guardian with Smart Sensors and AI",
      description:
      "Developed HealthSense,Integreating an Ml model for diseaase prediction from symptoms ,an AI chatbot for medical queries,and Sensors for live reportsand also skin disease with image analysis.",
      image: healthsense,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "ML","AI","IoT","Next JS","API"],
      github: "https://github.com/Oms2004",
      webapp: "",
    },
    {
      id: 1,
      title: "EmpowerAid:NGO Crowdfunding Webapp",
      description:
        "A full stack project for NGO's and users with dual login ,enabling profile creation,direct donation,campaign management,media uploads,grant access,donation history for transperancy and social impact.",
      image:ngo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Stripe"],
      github: "https://github.com/Oms2004",
      webapp: "",
    },
    {
      id: 2,
      title: "Medichat:Intelligent Medical Chatbot",
      description:
        "Developed Medichat,An AI chatbot leveraging a medical encyclopedia module to deliver accurate solution to medical queries ,Integrated voice recognition for interaction ,userfriendly interface for reliable health guidance.",
      image: chatbot,
      tags: ["React JS", "ML","AI","NLP","HTML","CSS","Javascript","Python"],
      github: "https://github.com/Oms2004",
      webapp: "",
    },
    {
      id: 3,
      title: "Movie Recommendation System",
      description:
        "A ML-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movie,
      tags: ["React JS", "ML", "HTML", "CSS", "JavaScript","NLP"],
      github: "https://github.com/Oms2004",
      webapp: "",
    },
    {
      id: 4,
      title: "Algorithm Visualizer",
      description:
        "A project based on shortest path algorithm from start to end point by using BFS ,DFS,Dijikstra,A* algorithms",
      image: algopath,
      tags: ["JavaScript", "PyGame", "HTML", "CSS"],
      github: "https://github.com/Oms2004",
      webapp: "",
    },
    {
      id: 5,
      title: "Online Ticket Booking System",
      description:
        "A online ticket booking system project based on linked list for booking tickets aand selecting seats manually and complete payment and generate bill.",
      image: ticketbook,
      tags: ["HTML", "CSS", "JavaScript", "Linked List"],
      github: "https://github.com/Oms2004",
      webapp: "",
    },
  ];  

   export const volunteering = [
  {
    id: 0,
    img:focl,
    role: "Student Volunteer",
    company: " NGO: Friends Of Children (FOC),Pune",
    date: "Jan 2023 - Present", 
    desc: "Actively contributed to empowering underprivileged students by supporting educational and social initiatives. Engaged in community outreach programs like tree plantations, old age home visits, and career guidance sessions. Personally benefited from FOC’s educational assistance, fostering a deep commitment to giving back.",
    skills: [
      "Mentoring",
      "Open Source",
      "Webinars",
      "React",
      "Community Building",
      "Teamwork",
      "Communication",
      "Leadership",
    ],
  },
  {
    id: 1,
    img: praj,
    role: "Prize Distribution & Reception Commitee Co-Convenor",
    company: "PRAJWALAN'24 -Central India's Biggest TechFest ,GCOEA ",
    date: "Jan 2024 - March 2024",
    desc: "Volunteered in organizing technical fests and coding contests. Managed logistics, registrations, and supported participants with technical setup and doubt resolution during events.",
    skills: [
      "Event Management",
      "Team Coordination",
      "Problem Solving",
      "Communication",
      "Technical Aspects",
    ],
  },
  {
    id: 2,
    img: internshala,
    role: "ISP Program College Ambassador",
    company: "INTERNSHALA",
    date: "September 2024 - May 2025",
    desc: "Volunteered as a mentor to help junior learners with tech concepts. Conducted doubt sessions, reviewed assignments, and motivated learners by sharing learning strategies and resources.",
    skills: [
      "Mentorship",
      "Technical Support",
      "Communication",
      "Empathy",
      "Leadership",
    ]
  },
  {
    id: 3,
    img: engenears,
    role: "IT Department Co-ordinator",
    company: "ENGE-NEARS",
    date: "Jan 2023 - Feb 2024",
    desc: "A consultancy services for college coming students after Engineering entrance exam ,providing support to them with technical aspects also with academic and getting skills for future requirement ",
    skills: [
      "Mentorship",
      "Technical Support",
      "Communication",
      "Leadership",
    ]
  },
];
