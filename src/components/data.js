import figma from './images/figma.png'
import simplifai from './images/simplifai.png'
import habifix from './images/habifix.png'
import cpsc210 from './images/cpsc210.png'
import soundmood from './images/soundmood.png'
import chatapp from './images/chatapp.png'
import wikidate from './images/wikidate.png'

const data = [
    { 
        title: "Simplif.ai [Finalist @ HackCamp 2022 🏆]",
        image: simplifai,
        description: "An AI-powered web app that summarizes text from images using image recognition and NLP. It aims to tackle the issue of accessible language and comprehension for all, particularly those with ADHD or who speak English as a second language.",
        technologies: ["React.js", "Express.js", "Node.js", "Google Cloud Vision", "NLP", "JavaScript", "Figma"],
        links: "https://devpost.com/software/simplif-ai-n4u3sr"
    },
    { 
        title: "Recipe Management System",
        image: cpsc210,
        description: "GUI-based recipe manager built using Java that allows users to add, update, upvote, save, and load recipes. Built for UBC CPSC 210 2022S.",
        technologies: ["Java", "Swing", "JUnit"],
        links: "https://github.com/toblrne/recipemanagementsystem"
    },
    { 
        title: "Habifix [3rd @ Hack the 6ix 2021 🏆]",
        image: habifix,
        description: "A web application that analyzes user habits using video action recognition with the aim of reducing unproductive habits and increasing productive ones.",
        technologies: ["React.js", "Flask", "TensorFlow", "OpenCV", "Python", "JavaScript", "Chart.js", "Figma"],
        links: "https://devpost.com/software/habifix"
    },
    {
        title: "This Day in History",
        image: wikidate,
        technologies: ["React.js", "JavaScript", "SCSS"],
        description: "A web application that calls a Wikipedia API and generates a specific event that occured on a user selected day. Also optimized for mobile display.",
        links: "https://wikidate.web.app/"
    },
    { 
        title: "A Sound Mood [2nd @ XdHacks Mini LA 2020 🏆]",
        image: soundmood,
        description: "A Discord bot application that gives song recommendations based on a user's listening habits.",
        technologies: ["Python", "MongoDB", "Heroku", "Discord.py", "Spotipy"],
        links: "https://www.youtube.com/watch?v=DTWPGfeU49o"
    },
    { 
        title: "Personal Website",
        description: "this website!",
        technologies: ["ChakraUI", "React.js", "JavaScript", "HTML/CSS", "Figma"]
    },

]

// {
//     title: "Chat App",
//     image: chatapp,
//     technologies: ["React.js", "JavaScript", "Firebase"],
//     description: "Simple chat app that allows users to send and clear messages. Data persistence implemented using a Firebase Realtime Database.",
//     links: "https://chatapp-893e3.web.app/"
// },

// {
//     title: "Pomo",
//     image: ...,
//     technologies: ["TypeScript", "React.js", "ChakraUI", "Express.js", "Node.js", "MongoDB", "Auth0", "Figma"],
//     description: "Pomodoro google chrome extension with statistics",
//     links: ...
// },

export default data;