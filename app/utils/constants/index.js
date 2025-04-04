import { SiCloudinary } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaStackOverflow } from "react-icons/fa";

// Social media links
export const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    icon: <IoLogoLinkedin size={"30px"} color="white" />,
    url: "https://www.linkedin.com/in/usmanmustafa01/",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub size={"30px"} color="white" />,
    url: "https://github.com/Usman4276",
  },
  {
    id: 3,
    name: "Stackoverflow",
    icon: <FaStackOverflow size={"30px"} color="white" />,
    url: "https://stackoverflow.com/users/9480107/muhammad-usman",
  },
];
// Projects data
export const projectList = [
  {
    id: 1,
    title: "Luxury Signage",
    desc: "This custom-built website is designed for a local business specializing in high-impact visual solutions, including outdoor signage, digital displays, indoor signs, and bespoke LED neon designs. The platform provides an easy-to-use interface that allows the business owner to manage their portfolio effortlessly—uploading, organizing, and removing images within categorized galleries. This ensures their services and completed projects are always showcased in a professional and visually engaging way.",
    img: "/luxury_signage_thumbnail.png",
    tools: [
      {
        name: "Next JS",
        icon: <RiNextjsFill size={30} />,
      },
      {
        name: "Cloudinary",
        icon: <SiCloudinary size={30} />,
      },
    ],

    animate: "fade-up",
    url: "https://luxurysignage.vercel.app/",
    github: "",
  },
];

// Services data
export const cards = [
  {
    id: 1,
    title: "Website Development",
    body: "We will provide you exceptional web development services, which will help you to transform your business to fit in with the cross-platform reality.",
    img: "/web.jpg",
    animate: "fade-up",
  },
  {
    id: 2,
    title: "Mobile App Development",
    body: "Mobile app are the need of every business in this era. We offer winning app strategies, stunning app designs, powerful agile app development, and stand-out launch marketing.",
    img: "/mobile.jpeg",
    animate: "fade-up",
  },
  {
    id: 3,
    title: "UI/UX Designing",
    body: "We design world-class digital experiences that meet your branding requirements and help your business to remain one step ahead in the digital world.",
    img: "/uiux.jpeg",
    animate: "fade-up",
  },
  {
    id: 4,
    title: "Server Management",
    body: "We streamline server management, offering peak performance, security. We will handle maintenance and monitoring, so you can focus on your business.",
    img: "/server.jpg",
    animate: "fade-up",
  },
  {
    id: 5,
    title: "Amazon Web Services",
    body: "Experience cloud excellence with our AWS mastery—seamless performance, scalability, and robust security. Elevate your success in the digital era with us",
    img: "/cloud.jpg",
    animate: "fade-up",
  },
  {
    id: 6,
    title: "Desktop App Development",
    body: "Empower your business with our expert desktop app development team. We blend innovation and functionality, delivering tailored solutions with cutting-edge technologies.",
    img: "/desktop.jpeg",
    animate: "fade-up",
  },
];
