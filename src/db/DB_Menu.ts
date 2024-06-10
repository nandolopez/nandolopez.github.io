import type { IMenu } from "@/interfaces/IMenu";
import HomeIcon from "@/assets/svg/HomeIcon.svg";
import BlogIcon from "@/assets/svg/BlogIcon.svg";
import ProjectIcon from "@/assets/svg/ProjectIcon.svg";
import SocialIcon from "@/assets/svg/SocialIcon.svg";

export const DB_Menu:IMenu = {
    es: [
      { link: "Inicio", href: "/es" },
      { link: "Blog", href: "/es/blog" },
      { link: "Proyectos", href: "/es/proyectos" },
      { link: "Redes Sociales", href: "/contact" },
    ],
    en: [
      { link: "Home", href: "/" },
      { link: "Blog", href: "/blog" },
      { link: "Projects", href: "/projects" },
      { link: "Social media", href: "/contact" },
    ],
    icons: [
      { src: HomeIcon.src, alt: "Home icon" },
      { src: BlogIcon.src, alt: "Blog icon" },
      { src: ProjectIcon.src, alt: "Project icon" },
      { src: SocialIcon.src, alt: "Social icon" },
    ],
  };
  