import { SiExpress, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact, FaNode } from "react-icons/fa";

// Projects data
export const projectList = [
  {
    id: 1,
    title: "Froxx Admin Panel",
    desc: "Froxx admin panel is build using MERN stack. This admin panel can be used to create a guided chatbot for your business. We can manage all users accounts, Faqs and other related details. ",
    img: "/froxx.png",
    tools: [
      <FaReact size={30} />,
      <FaNode size={30} />,
      <SiExpress size={30} />,
      <DiMongodb size={30} />,
    ],
    animate: "fade-up",
    url: "https://froxx-admin-panel.vercel.app/",
    github: "https://github.com/Usman4276/froxx-admin-panel-frontend",
  },
  // {
  //   id: 2,
  //   title: "Project 2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos modi ullam illo id rem beatae accusamus, reprehenderit alias quo similique, culpa libero eligendi? Laborum hic tempora libero veniam possimus.",
  //   img: "/p2.jpg",
  //   tools: [
  //     <FaReact size={30} />,
  //     <FaNode size={30} />,
  //     <SiExpress size={30} />,
  //     <DiMongodb size={30} />,
  //     <SiTypescript size={30} />,
  //   ],
  //   animate: "fade-up",
  // },
  // {
  //   id: 3,
  //   title: "Project 3",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos modi ullam illo id rem beatae accusamus, reprehenderit alias quo similique, culpa libero eligendi? Laborum hic tempora libero veniam possimus.",
  //   img: "/p3.jpg",
  //   tools: [
  //     <FaReact size={30} />,
  //     <FaNode size={30} />,
  //     <SiExpress size={30} />,
  //     <DiMongodb size={30} />,
  //     <SiTypescript size={30} />,
  //   ],
  //   animate: "fade-up",
  // },
  // {
  //   id: 4,
  //   title: "Project 4",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos modi ullam illo id rem beatae accusamus, reprehenderit alias quo similique, culpa libero eligendi? Laborum hic tempora libero veniam possimus.",
  //   img: "/p4.jpg",
  //   tools: [
  //     <FaReact size={30} />,
  //     <FaNode size={30} />,
  //     <SiExpress size={30} />,
  //     <DiMongodb size={30} />,
  //     <SiTypescript size={30} />,
  //   ],
  //   animate: "fade-up",
  // },
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
