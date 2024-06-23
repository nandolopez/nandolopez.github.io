type SocialMedia = {
  alt: string;
  icon: string;
  inFooter: boolean;
  link: string;
  smartlink: string;
};

export const DB_SocialMedia: SocialMedia[] = [
  {
    alt: "Github",
    link: "https://github.com/nandolopez/",
    smartlink: "https://github.com/nandolopez/",
    icon: "/svg_social/Github.svg",
    inFooter: true,
  },
  {
    alt: "Instagram",
    link: "https://www.instagram.com/nandolopez_tech",
    smartlink: "instagram://user?username=nandolopez_tech",
    icon: "/svg_social/Instagram.svg",
    inFooter: true,
  },
  {
    alt: "Linkedin",
    link: "https://www.linkedin.com/in/fernandollm/",
    smartlink: "linkedin://in/fernandollm",
    icon: "/svg_social/Linkedin.svg",
    inFooter: false,
  },
  {
    alt: "Spotify",
    link: "https://open.spotify.com/user/fermaxando",
    smartlink: "spotify:user:fermaxando",
    icon: "/svg_social/Spotify.svg",
    inFooter: false,
  },
  {
    alt: "Tiktok Channel",
    link: "https://www.tiktok.com/@fernanlm88",
    smartlink: "tiktok://tiktok.com/@fernanlm88",
    icon: "/svg_social/Tiktok.svg",
    inFooter: false,
  },
  {
    alt: "Youtube Channel",
    link: "https://www.youtube.com/channel/UCg4pdmmXX07n89Axjm41Gqw",
    smartlink: "vnd.youtube://channel/UCg4pdmmXX07n89Axjm41Gqw",
    icon: "/svg_social/Youtube.svg",
    inFooter: true,
  },

  {
    alt: "X / Twitter",
    link: "https://www.twitter.com",
    smartlink: "twitter://user?screen_name=NandoLopez_Tech",
    icon: "/svg_social/X.svg",
    inFooter: false,
  },
];
