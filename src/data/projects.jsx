import bugsDiaries from '../assets/images/bugs-diaries.png';
import carrotCalendar from '../assets/images/carrot-calendar.png';
import chronos from '../assets/images/chronos.png';
import noter from '../assets/images/noter.png';
import pawpals from '../assets/images/pawpals.png';
import voyage from '../assets/images/voyage.png';
import finWiz from '../assets/images/finwiz.png';

export const projects = [
    {
        title: "FinWiz",
        description: "Factoring software designed to simplify the management of accounts receivables and payables.",
        repository: "https://github.com/larigens/finwiz",
        link: "https://finwiz.herokuapp.com/",
        tech: "Nodejs, JavaScript, GraphQL, Apollo, JWT, MongoDB, Mongoose, Stripe, ReactJS",
        image: finWiz
    },
    {
        title: "Bugs Diaries",
        description: "Blog that allows writers to publish, edit, and manage their articles.",
        repository: "https://github.com/larigens/bugs-diaries",
        link: "https://bugs-diaries.herokuapp.com/",
        tech: "Nodejs, JavaScript, MySQL, Sequelize, dotenv, ExpressJS, Handlebars",
        image: bugsDiaries
    },
    {  
        title: "Paw Pals",
        description: "Help find loving homes for animals in need.",
        repository: "https://github.com/thebobfather2/pawpals",
        link: "https://pawpals.herokuapp.com/",
        tech: "Nodejs, JavaScript, MySQL, Sequelize, PassportJS, ExpressJS, Handlebars",
        image: pawpals
    },
    {
        title: "Carrot Calendar",
        description: `Perfect tool for connecting community members worldwide. This calendar was created to meet the needs of Bobby Rabbits website.`,
        repository: "https://github.com/thebobfather2/carrotcalendar",
        link: "https://thebobfather2.github.io/carrotcalendar/",
        tech: "HTML, CSS, JavaScript, Bootstrap, Firebase",
        image: carrotCalendar
    },
    {
        title: "Noter",
        description: "PWA that allows you to create notes or code snippets with or without an internet connection.",
        repository: "https://github.com/larigens/noter",
        link: "https://noter-coder.herokuapp.com/",
        tech: "HTML, JavaScript, Nodejs, ExpressJS, Babel, Webpack, Workbox, IndexedDB, PWA",
        image: noter
    },
    {
        title: "Voyage",
        description: "Weather app for travelers who want to keep up with the local weather wherever they are.",
        repository: "https://github.com/larigens/voyage",
        link: "https://larigens.github.io/voyage/",
        tech: "HTML, JavaScript, CSS, API, JQuery, JSON, Bootstrap",
        image: voyage
    },
    {
        title: "Chronos",
        description: "This scheduling tool allows users to track their work schedule, including meetings and personal commitments, as well as view upcoming deadlines.",
        repository: "https://github.com/larigens/chronos",
        link: "https://larigens.github.io/chronos/",
        tech: "HTML, JavaScript, CSS, API, JQuery, Bootstrap",
        image: chronos
    }
]