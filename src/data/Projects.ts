import type { Project } from "@/types/types";
import ticTacToeImage from "../assets/TicTacToe.jpg";
import DrivUpImage from "../assets/Drivup.png";
import { techSkills } from "./tech";
export const projects: Project[] = [{
    title:"Tic Tac Toe Game",
    description:"A simple Tic Tac Toe game built with React. It features a user-friendly interface and allows two players to compete against each other.",
    image:ticTacToeImage.src,
    linkGit:"https://github.com/JulianAlmario/Tic-Tac-Toe",
    linkDemo:"https://tic-tac-toe-d19j.onrender.com/",
    tech:[techSkills["react"],techSkills["tailwindcss"],techSkills["javascript"]]
},
{
    title:"Drivup",
    description:"DrivUp is a modern web application that facilitates the connection between passengers and drivers for ride-sharing. The platform offers dedicated interfaces for both roles, a real-time messaging system, route visualization through interactive maps, and scheduled trip management — all focused on providing an intuitive and secure user experience.",
    image:DrivUpImage.src,
    linkGit:"https://github.com/somilsdiaz/DrivUp",
    linkDemo:"",
    tech:[techSkills["react"],techSkills["nodejs"],techSkills["postgresql"],techSkills["tailwindcss"]]
},{
  title:"Tic Tac Toe Game",
    description:"A simple Tic Tac Toe game built with React. It features a user-friendly interface and allows two players to compete against each other.",
    image:ticTacToeImage.src,
    linkGit:"https://github.com/JulianAlmario/Tic-Tac-Toe",
    linkDemo:"https://tic-tac-toe-d19j.onrender.com/",
    tech:[techSkills["react"],techSkills["tailwindcss"],techSkills["javascript"]]
},
{
    title:"Drivup",
    description:"DrivUp is a modern web application that facilitates the connection between passengers and drivers for ride-sharing. The platform offers dedicated interfaces for both roles, a real-time messaging system, route visualization through interactive maps, and scheduled trip management — all focused on providing an intuitive and secure user experience.",
    image:DrivUpImage.src,
    linkGit:"https://github.com/somilsdiaz/DrivUp",
    linkDemo:"",
    tech:[techSkills["react"],techSkills["nodejs"],techSkills["postgresql"],techSkills["tailwindcss"]]
}]