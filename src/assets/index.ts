import babel from "./babel-icon.png";
import bootstrap from "./bootstrap.png";
import css from "./css-icon.png";
import expressJs from "./expressJs-icon.png";
import git from "./git-icon.png";
import html from "./html-icon.png";
import javascript from "./javascript-icon.png";
import jest from "./jest-icon.png";
import materialUi from "./materialUi-icon.png";
import mocha from "./mocha-icon.png";
import nextJs from "./nextJs-icon.png";
import nodeJs from "./nodeJs-icon.png";
import postgreSQL from "./postgreSQL-icon.png";
import react from "./react-icon.png";
import redux from "./redux-icon.png";
import sass from "./sass-icon.png";
import tailwind from "./tailwind-icon.png";
import typescript from "./typescript-icon.png";
import webpack from "./webpack-icon.png";

import photoshop from "./photoshop.png";
import illustrator from "./illustrator.png";
import premiere from "./premiere.png";
import figma from "./figma-icon.png";

import cintia from "./cintia-arce-profile.png";

import cloudy from "./cloudy.png";
import dictionary from "./dictionary.png";
import ecommerce from "./ecommerce-store.png";
import mangaka from "./mangaca-icon.png";
import music from "./music-app.png";

import blob1 from "./svgs/output-onlinepngtools (1).png";
import blob2 from "./svgs/output-onlinepngtools (2).png";
import blob3 from "./svgs/output-onlinepngtools (3).png";
import blob4 from "./svgs/output-onlinepngtools (4).png";
import blob5 from "./svgs/output-onlinepngtools (5).png";
import blob6 from "./svgs/output-onlinepngtools (6).png";
import blob7 from "./svgs/output-onlinepngtools (7).png";
import blob8 from "./svgs/output-onlinepngtools (8).png";

export const blobs = [blob1, blob2, blob3, blob4, blob5, blob6, blob7, blob8];

export const profile = {
  greeting: "Hi, I'm Cintia",
  title: "Building virtual tools, products and experiences",
  subtitle:
    "Skilled in full-stack development and design to create beautiful and powerful digital solutions",
  introduction:
    "I'm an independent IT student with strong passion for development, with proven ability to learn and adapt to new technology and frameworks quickly. Able to identify and correct errors in existing code. Proficient in photography, illustrations, as well as video editing.",
  photo: cintia,
};

export const colors = ["#ffce6d", "#ED5B2D", "#F7B9A1", "#51ABB2"];

export const technologies = {
  style: [
    {
      link: "https:/mui.com",
      logo: materialUi,
      alt: "Material-UI",
    },
    {
      link: "https://sass-lang.com",
      logo: sass,
      alt: "Sass",
    },
    {
      link: "https://getbootstrap.com",
      logo: bootstrap,
      alt: "Bootstrap",
    },
    {
      link: "https://tailwind.com",
      logo: tailwind,
      alt: "Tailwind",
    },
  ],
  design: [
    {
      alt: "Photoshop",
      logo: photoshop,
      link: "https://www.photoshop.com/",
    },
    {
      alt: "Illustrator",
      logo: illustrator,
      link: "https://www.adobe.com/products/illustrator/free-trial-download.html",
    },
    {
      alt: "Premiere",
      logo: premiere,
      link: "https://www.adobe.com/products/premiere.html",
    },
    {
      alt: "Figma",
      logo: figma,
      link: "https://www.figma.com/",
    },
  ],
  development: [
    {
      link: "https://www.w3.org/html/",
      logo: html,
      alt: "HTML5",
    },
    {
      link: "https://www.w3schools.com/css/",
      logo: css,
      alt: "CSS3",
    },
    {
      link: "https://reactjs.org/",
      logo: react,
      alt: "React JS",
    },
    {
      link: "http://reactnative.dev/",
      logo: react,
      alt: "React Native",
    },
    {
      link: "https://redux.js.org/",
      logo: redux,
      alt: "Redux",
    },
    {
      link: "https://www.typescriptlang.org/",
      logo: typescript,
      alt: "Typescript",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: javascript,
      alt: "Javascript",
    },
    {
      link: "https://nextjs.org/",
      logo: nextJs,
      alt: "NextJS",
    },
    {
      link: "https://expressjs.com",
      logo: expressJs,
      alt: "Express",
    },
    {
      link: "https://nodejs.org",
      logo: nodeJs,
      alt: "Nodejs",
    },
    {
      link: "https://jestjs.io",
      logo: jest,
      alt: "Jest",
    },
    {
      link: "https://mochajs.org",
      logo: mocha,
      alt: "Mocha",
    },
    {
      link: "https://www.postgresql.org",
      logo: postgreSQL,
      alt: "PostgreSQL",
    },
    {
      link: "https://git-scm.com/",
      logo: git,
      alt: "Git",
    },
    {
      link: "https://webpack.js.org/",
      logo: webpack,
      alt: "Webpack",
    },
    {
      link: "https://babel.dev/",
      logo: babel,
      alt: "Babel",
    },
  ],
};

export const social = [
  {
    link: "https://linkedin.com/in/cintia-arce-profile",
    alt: "LinkedIn",
  },
  {
    link: "https://github.com/tia-cin",
    alt: "Github",
  },
];

export const projects = [
  {
    link: "https://dashboard-shoppy.vercel.app/",
    logo: react,
    alt: "react-icon",
    title: "Dashboard",
    description: "Organize your team and projects",
  },
  {
    link: "https://deploy-client-kappa.vercel.app/",
    logo: mangaka,
    alt: "mangaka-icon",
    description: "E-Commerse project for mangas/comics chapters with reader",
    title: "Mangaka",
  },
  {
    link: "https://music-app-self.vercel.app",
    title: "Music App",
    description: "Simple song player app made with Vue JS",
    logo: music,
    alt: "music-app-icon",
  },
  {
    link: "https://dictionary-app-omega.vercel.app",
    logo: dictionary,
    alt: "dictionary-app-icon",
    description: "Search any word and find about their definition and more",
    title: "Dictionary App",
  },
  {
    link: "https://ecommerce-store-tia-cin.vercel.app/",
    logo: ecommerce,
    alt: "ecommerce-store-icon",
    description: "Buy tech products in this ecommerce website",
    title: "Ecommerce Store",
  },
  {
    link: "https://nft-langing.vercel.app/",
    logo: react,
    alt: "nft-market-landing",
    description: "Landing Page for NFT Market React Native App",
    title: "ProNef",
  },
];