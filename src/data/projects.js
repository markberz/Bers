import hirelyImage from '../assets/built/Hirely.png'
import ligtasImage from '../assets/design/Ligtas.png'
import carsImage from '../assets/design/Cars.png'
import spaceImage from '../assets/built/SPACE.png'
import techcorpsImage from '../assets/design/techcorps.png'
import capAiImage from '../assets/built/CAP.AI.png'
import ghProfileImage from '../assets/built/GHProfileSearch.png'
import senyasImage from '../assets/built/senyas.png'

const projects = [
  {
    name: 'Hirely - Resume Builder & Ai Cover Letter Generator',
    year: 2026,
    month: 6,
    role: 'Web Developer',
    description: 'A web application that helps users create professional resumes and AI generated cover letters',
    type: 'web',
    technologies: ['React.js', 'Node.js', 'OpenRouter API Integration',],
    image: hirelyImage,
    website: 'https://hirely-ai1.vercel.app/',
    linkLabel: 'VISIT SITE',
  },
  {
    name: 'LIGTAS - Local Integratred Geo-Tracking Alert System',
    year: 2026,
    month: 5,
    role: 'Web Developer',
    description: 'It provides a single-page, real time interface for reporting incidents, accessing emergency services, and managing disaster response.',
    type: 'basket',
    technologies: ['HTML', 'CSS', 'JavaScript',],
    image: ligtasImage,
    website: 'https://ligtas.vercel.app/',
    linkLabel: 'VISIT SITE',
  },
  {
    name: 'Cars - Collection, Appearance, Restoration, Showpieces',
    year: 2026,
    month: 6,
    role: 'Web Developer',
    description: 'A modern dark automation showcase website.',
    type: 'galilei',
    technologies: ['HTML5', 'CSS', 'JavaScript',],
    image: carsImage,
    website: 'https://car-pi-ruddy.vercel.app/',
    linkLabel: 'VISIT SITE',
  },
  {
    name: 'Space - Smart Personal Ai for Calendar & Events',
    year: 2026,
    month: 3,
    role: 'Web Developer',
    description: 'Smart Web-Based scheduling platform powered by Umaru your personal AI Assistant',
    type: 'keepr',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'OpenRouter API Integration'],
    image: spaceImage,
    website: 'https://example.com/space',
    linkLabel: 'VISIT SITE',
  },
  {
    name: 'TechCorps',
    year: 2026,
    month: 5,
    role: 'WebDeveloper',
    description: 'A premium, high-performance e-commerce storefront for next-gen computing hardware.',
    type: 'keepr',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: techcorpsImage,
    website: 'https://techcorps.vercel.app/',
    linkLabel: 'VISIT SITE',
  },
  {
    name: 'CAP.AI - Capstone Assistant Powered by AI',
    year: 2025,
    month: 6,
    role: 'Web Developer',
    description: 'AI-Powered web application that creates personalized capstone project ideas based on your selected industry and project type.',
    type: 'keepr',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'OpenRouter API Integration'],
    image: capAiImage,
    website: 'https://cap-ai-five.vercel.app/',
    linkLabel: 'VISIT SITE',
  },
  {
    name: 'GHProfile Search',
    year: 2025,
    month: 1,
    role: 'Web Developer',
    description: 'Smart Web-Based profile search application for GITHUB users.',
    type: 'keepr',
    technologies: ['HTML', 'CSS', 'JavaScript', 'OpenRouter API Integration'],
    image: ghProfileImage,
    website: 'https://ctrl-bers.github.io/GHProfileSearch/',
    linkLabel: 'VISIT SITE',
  },
  {
    name: 'Senyas: Filipino Sign Language Translation Device and System for Two-Way Communication',
    year: 2024,
    month: 2,
    role: 'Embedded System & Mobile Developer',
    description: 'App that enables two-way communication between deaf/mute individuals and hearing individuals. It allows for real-time translation of speech and text to empower inclusive commnunication.',
    type: 'keepr',
    technologies: ['C++', 'Python', 'Edge Impulse', 'Arduino IDE', 'Kodular'],
    image: senyasImage,
    website: 'https://github.com/ctrl-bers/Senyas',
    linkLabel: 'VISIT SITE',
  },
]

export default projects.sort((a, b) => b.year - a.year || b.month - a.month)
