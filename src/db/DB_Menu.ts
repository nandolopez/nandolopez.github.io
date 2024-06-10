import HomeIcon from "@/assets/svg/HomeIcon.svg";
import BlogIcon from "@/assets/svg/BlogIcon.svg";
import ProjectIcon from "@/assets/svg/ProjectIcon.svg";
import SocialIcon from "@/assets/svg/SocialIcon.svg";
import type { IMenuItem } from "@/interfaces/IMenuItem";

export const DB_Menu: IMenuItem[] = [
  { link: "Home", href: "/", src: BlogIcon.src, alt: "Blog icon" },
  { link: "Blog", href: "/blog", src: SocialIcon.src, alt: "Social icon" },
  {
    link: "Projects",
    href: "/projects",
    src: ProjectIcon.src,
    alt: "Project icon",
  },
  {
    link: "Social media",
    href: "/contact",
    src: HomeIcon.src,
    alt: "Home icon",
  },
];
