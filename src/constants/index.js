import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import discord from '../assets/company/discord.png';
import capcut from '../assets/capcut.png';
import pin from '../assets/pintrest.png';
import motion from '../assets/motinelite.png';
import videoediting from '../assets/company/videoediting.png';
import thumb from '../assets/company/editizzz.png';
import lyrics from '../assets/company/song-lyrics.png';
import ps from '../assets/photoshop.png';
import film from '../assets/film.png';
import dc from '../assets/dc.jpg';
import thub from '../assets/PAPA.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DC Developer",
    icon: web,
  },
  {
    title: "Video editor",
    icon: mobile,
  },
  {
    title: "ThumbMaker",
    icon: backend,
  },
  {
    title: "Lyrics Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "PS",
    icon: ps,
  },
  {
    name: "CAPCUT",
    icon: capcut,
  },
  {
    name: "MOTION",
    icon: motion,
  },
  {
    name: "LYRICS",
    icon: film,
  },
  {
    name: "fivem",
    icon: pin,
  },
  {
    name: "00001",
    icon: css,
  },
  
];

const experiences = [
  {
    title: "Discord Developer",
    company_name: "Customize",
    icon: discord,
    iconBg: "#fffdf6",
    date: "March 2025 - April 2025",
    points: [
      "Designing and managing advanced Discord servers with custom role systems, permissions, and channel structures.",
      "Creating custom UI elements such as embedded messages, buttons, and dropdowns for an engaging user experience.",
      "Implementing dynamic systems like reaction roles, leveling systems, ticket support, and verification bots.",
      "Ensuring platform compliance with Discord's guidelines and maintaining server security through anti-raid and anti-spam measures.",
    ],
  },
  {
    title: "Video editing",
    company_name: "professional",
    icon: videoediting,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Creating eye-catching intros, outros, and transitions to enhance viewer retention and brand identity.",
      "Color grading and audio mastering to ensure professional polish and consistency across all content.",
      "Designing motion graphics and text animations to emphasize key points and improve viewer engagement.",
      "Meeting tight deadlines while maintaining attention to detail and production quality.",
    ],
  },
  {
    title: "Thumbnail designer",
    company_name: "Customize",
    icon: thumb,
    iconBg: "#21130d",
    date: "Jan 2025 - Jan 2025",
    points: [
      "Designing eye-catching and high-converting thumbnails for YouTube, Twitch, and other platforms that boost click-through rates (CTR).",
      "Using design tools like Photoshop, Canva, or Photopea to create clean, sharp, and brand-consistent visuals.",
      "Creating custom graphics, cutouts, and effects to highlight key subjects and draw viewer attention.",
      "Balancing colors, fonts, and layout for maximum visual impact and readability, even on small screens.",
    ],
  },
  {
    title: "Lyrics editor",
    company_name: "Youtube",
    icon: lyrics,
    iconBg: "#fffdf6",
    date: "Jan 2025 - Present",
    points: [
      "Creating immersive and entertaining content based on GTA 5 and TGRP FiveM roleplay scenarios, stories, and gameplay highlights.",
      "Capturing and editing cinematic gameplay footage to showcase high-quality RP moments, events, and in-game storytelling.",
      "Designing custom thumbnails and video titles optimized for click-through rate in the GTA RP and FiveM niche.",
      "Engaging with the RP community through in-character videos, server collaborations, and audience interactions.",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "DC Development",
    description:
      "Creating advanced server structures with role hierarchies, channel permissions, and automated onboarding flows.",
    tags: [
      {
        name: "advanceed",
        color: "blue-text-gradient",
      },
      {
        name: "customize",
        color: "green-text-gradient",
      },
      {
        name: "benefits",
        color: "pink-text-gradient",
      },
    ],
    image: dc,
    source_code_link: "https://youtu.be/yvROziSwjaU",
  },
  {
    name: "Thumbnail Designer",
    description:
      "Designing eye-catching and high-converting thumbnails for YouTube, Twitch, and other platforms that boost click-through rates for gta 5 game.",
    tags: [
      {
        name: "eye-catching",
        color: "blue-text-gradient",
      },
      {
        name: "Tool",
        color: "green-text-gradient",
      },
      {
        name: "advance",
        color: "pink-text-gradient",
      },
    ],
    image: thub,
    source_code_link: "https://youtu.be/FCzKzX3_FQ8",
    
  },
  
];

export { services, technologies, experiences, testimonials, projects };
