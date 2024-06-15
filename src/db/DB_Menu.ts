import HomeIcon from "@/assets/svg/HomeIcon.svg";
import ProjectIcon from "@/assets/svg/ProjectIcon.svg";
import SocialIcon from "@/assets/svg/SocialIcon.svg";
import BlogIcon from "@/assets/svg/BlogIcon.svg";

import type { IMenuItem } from "@/interfaces/IMenuItem";
7;

export const DB_Menu: IMenuItem[] = [
  { link: "Home", href: "/", src: HomeIcon.src, alt: "Blog icon" },
  { link: "Blog", href: "/blog", src: BlogIcon.src, alt: "Social icon" },
  {
    link: "Projects",
    href: "/projects",
    src: ProjectIcon.src,
    alt: "Project icon",
  },
  {
    link: "Social media",
    href: "/contact",
    src: SocialIcon.src,
    alt: "Home icon",
  },
];
