const teamMembers = [
  {
    Role: "Faculty Advisor",
    Name: "Shailesh Shetty S",
    Email: "shailesh@gmail.com",
    Number: "",
    LInk: "",
    imageUrl: "/team/shailesh.jpg",
  },
  {
    Role: "President",
    Name: "Geddada Nethranand",
    Email: "nethranand1234@gmail.com",
    Number: 9141258313,
    LInk: "https://github.com/Code-Nethranand",
    imageUrl: "/team/gg.jpg",
  },
  {
    Role: "Treasurer",
    Name: "Amshith",
    Email: "amshuakharvi66@gmail.com",
    Number: 9380584073,
    LInk: "https://github.com/Amshith-ai",
    imageUrl: "/team/a.jpg",
  },
  {
    Role: "Web Lead",
    Name: "Nilesh Shetty",
    Email: "nsnileshnavilgone@gmail.com",
    Number: 9110220375,
    LInk: "https://nilesh-shetty.web.app/",
    imageUrl: "/team/Nilesh.jpg",
  },
  {
    Role: "ML Lead",
    Name: "Soumya Manjunath Naik ",
    Email: "naiksanjana2423@gmail.com",
    Number: 9916794022,
    LInk: "https://github.com/Soumya-M-Naik",
    imageUrl: "/team/soumya.jpg",
  },
  {
    Role: "Design Lead",
    Name: "Abhishek ",
    LInk: "https://github.com/ABHISHEK26-24",
    imageUrl: "/team/Abhishek.jpg",
  },
  {
    Role: "Documentation Lead",
    Name: "Pranaw Kumar",
    Email: "pranawkk0@gmail.com",
    LInk: "https://www.github.com/itspranaw",
    imageUrl: "/team/Pranaw.jpg",
  },
  {
    Role: "Media Lead",
    Name: "Snehit Krishna Shastry G",
    Email: "snehtkrishna@gmail.com",
    Number: 9901549753,
    LInk: "https://github.com/skshastry",
    imageUrl: "/team/Snehit.jpg",
  },
  {
    Role: "Community Lead",
    Name: "Nuhayd Ameen Shaik",
    Email: "nuhayd.m.k@gmail.com",
    Number: 8904445302,
    LInk: "https://github.com/Nuhayd12",
    imageUrl: "/team/Nuhayd.jpg",
  },
  {
    Role: "Event Lead",
    Name: "Naaz MN",
    Email: "naazmn23@gmail.com",
    Number: 8050142366,
    LinkedIn: "https:www.linkedin.com/in/naaz-mn-a7426a297",
    LInk: "https://github.com/Naaz-M-N",
    imageUrl: "/team/Naaz.jpg",
  },
  {
    Role: "Sponsorship Lead",
    Name: "Prithuesh P B",
    Email: "prithueshbabu1810@gmail.com ",
    Number: 6362732976,
    LInk: "",
  },
  {
    Role: "Technical Lead",
    Name: "Vinayak V M",
    Email: "vinayakavm22@gmail.com",
    Number: 9632843275,
    LInk: "",
    imageUrl: "/team/Vinayak.jpg",
  },
];

const Events = [
  {
    title: "BUG HUNT",
    description:
      "PARTICIPANTS ARE GIVEN A PIECE OF CODE THAT CONTAINS BUGS. THE CHALLENGE IS TO FIND AND FIX AS MANY BUGS AS POSSIBLE WITHIN A SET TIME LIMIT. THIS CAN BE EXTENDED TO INCLUDE SECURITY VULNERABILITIES AS WELL.",
    imageUrl: "/event/BugHunt.jpg",
    thumbnail: "/event/BugHunt.jpg",
    tag1: "bugHunt",
    tag2: "code",
    slug: "bug-hunt", // Added slug
  },
  {
    title: "REVERSE CODING",
    description:
      "PROVIDE THE PARTICIPANTS WITH THE OUTPUT OF A PROGRAM AND CHALLENGE THEM TO REVERSE-ENGINEER IT TO CREATE THE ORIGINAL PROGRAM THAT PRODUCES THE GIVEN OUTPUT.",
    imageUrl: "/event/coderelay.jpg",
    thumbnail: "/event/coderelay.jpg",
    tag1: "Findthelogic",
    tag2: "Reversecode",
    slug: "reverse-coding", // Added slug
  },
  {
    title: "CODE RELAY",
    description:
      "TEAMS TAKE TURNS CODING IN A RELAY FORMAT. EACH MEMBER GETS 5-10 MINUTES TO CONTRIBUTE TO THE CODE BEFORE PASSING IT TO THE NEXT MEMBER. THE OBJECTIVE IS TO COLLABORATIVELY BUILD A SMALL PROJECT OR SOLVE A PROBLEM.",
    imageUrl: "/event/ReverseCoding.jpg",
    thumbnail: "/event/ReverseCoding.jpg",
    tag1: "Runcode",
    tag2: "Teams",
    slug: "code-relay", // Added slug
  },
  {
    title: "SRINATHON",
    slug: "srinathon",
    description:
      "🌟 Srinathon 2024 was a thrilling 24-hour national-level Hackathon hosted by Srinivas Institute of Technology, Valachil, Mangalore — in association with SSOSC, EDP, and Yuktih Cell. This high-energy event brought together tech enthusiasts and innovators from across India to build impactful solutions in just 24 hours.",
    subtitle:
      "Prize pool up to ₹1 Lakh • ₹400 per participant • 4 members per team • Held on December 10th–11th, 2024",
    imageUrl: "/event/srinathon.jpg",
    thumbnail: "/event/srinathon.jpg",
    // Ensure this is stored in /public/event/srinathon.jpg
    tag1: "HACKATHON",
    tag2: "CODE",
  },
];

export const newEvents = [
 {
  title: "Ideathon",
  slug: "ideathon",
  description:
     "🌟 Ideathon 2024 is a unique event that encourages participants to brainstorm and develop innovative ideas to solve real-world problems. Teams will work together to create prototypes and present their solutions.",
  subtitle:
    "Prize pool up to ₹50,000 • ₹200 per participant • 4 members per team • Held on January 15th–16th, 2024",
  imageUrl: "/event/ideathon.jpg", // Ensure this is stored in /public/event/ideathon.jpg
  tag1: "IDEATION",
  tag2: "INNOVATION",
  date: "2024-12-10"
}
];

export { teamMembers, Events };