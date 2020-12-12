import locationSVG from '../assets/svgs/location.svg';
import sapientImg from '../assets/images/sapient.png';
import wiproImg from '../assets/images/wipro.png';
import universityImg from '../assets/images/university.png';
import tescoSVG from '../assets/svgs/tesco.svg';
import lloydsSVG from '../assets/svgs/lloyds.svg';
import walmartSVG from '../assets/svgs/walmart.svg';
import { age, experience } from '../utils/appUtils';

const contents = {
    name: 'Sarath P S',
    designation: 'Software Development Engineer - II',
    contactInfo: [
        {
            id: 'location',
            content: 'Bengaluru, India',
            icon: locationSVG,
            href: 'https://www.google.com/maps/place/Bengaluru,+Karnataka/'
        },
    ],
    additionalInfo: [
        {
            id: 'mail',
            label: 'E-Mail',
            href: 'mailto:sarathps93@gmail.com'
        },
        {
            id: 'github',
            label: 'GitHub',
            href: 'https://github.com/sarathps93'
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sarathps93'
        },
        {
            id: 'blog',
            label: 'Blog',
            href: 'https://medium.com/@sarathps93'
        },
    ],
    navigation: [
        {
            id: 'Intro',
            label: 'Intro'
        },
        {
            id: 'skills',
            label: 'Skills'
        },
        {
            id: 'career',
            label: 'Career'
        }
    ],
    primarySkills: [
        'JavaScript',
        'NodeJs',
        'TypeScript',
        'HTML5',
        'CSS3',
        'React',
        'Redux',
        'GraphQL',
        'Kubernetes',
        'AWS',
        'Git',
        'Selenium'
    ],
    openSourceContributions: [
        { text: 'Jest', link: 'https://github.com/facebook/jest' },
        { text: 'React', link: 'https://github.com/facebook/react' },
        { text: 'WebdriverIO', link: 'https://github.com/webdriverio/webdriverio' },
        { text: 'VisX', link: 'https://github.com/airbnb/visx' },
    ],
    languages: [
        {
            language: 'English',
            proficiency: 5
        },
        {
            language: 'Malayalam',
            proficiency: 5
        },
        {
            language: 'Tamil',
            proficiency: 4
        },
        {
            language: 'Hindi',
            proficiency: 4
        },
    ],
    aboutMe: `Hi, I am Sarath, a ${age} years old Software Developer having ${experience} years of experience in Software develoment, testing, automation, deployment & maintenance.
            Member of <strong class="profile-feed__strong">WebdriverIO</strong> official project contributors team and also an open source contributor in other projects such as <strong class="profile-feed__strong">VisX</strong>, <strong class="profile-feed__strong">Jest</strong> & <strong class="profile-feed__strong">React</strong>.
            <div class="readmore-aboutme">
            <p>I am currently working with <strong class="profile-feed__strong"><a href="https://www.tesco.com/" class="profile-feed__link" target="__blank" rel="noopener noreferrer">Tesco</a></strong> <span class="reference-text">(through Publicis Sapient)</span> as an SDE-II. I also have got experience in working with clients such as <strong class="profile-feed__strong"><a href="https://www.lloydsbank.com/" class="profile-feed__link" target="__blank" rel="noopener noreferrer">Lloyds Banking Group</a></strong> <span class="reference-text">(3y)</span> & <strong class="profile-feed__strong"><a href="https://www.walmart.com/" class="profile-feed__link" target="__blank" rel="noopener noreferrer">Walmart</a></strong> <span class="reference-text">(1.3y)</span>.
            <p>I specialise in</p>
            <ul class="profile-feed__ul"> 
            <li>Building enterprise level web applications using React - Redux or with plain vanilla JavaScript</li>
            <li>Developing NodeJs server applications along with GraphQL using JavaScript or TypeScript</li>
            <li>Automation of functional and non-functional software testing using NodeJs test frameworks such as WebDriverIO or Selenium</li>
            <li>Kubernetes deployment, scaling, logging & monitoring</li>
            </ul>
            </div>
            </p>
            `,
    experience: [
        {
            name: 'Publicis Sapient',
            href: 'https://www.publicissapient.com/',
            designation: 'Senior Associate',
            dateRange: '04/2020 - present',
            location: 'Bengaluru, India',
            imageUrl: sapientImg,
            readMoreClass: 'readmore_sapient',
            content: `I joined Publicis Sapient as a Senior Associate in April 2020 and by the starting of June I have started working for Tesco full time. I am really grateful that I got a chance to work on some exciting projects right from the beginning. I learnt GraphQL, brushed up my skills on TypeScript and developed a NodeJs GraphQL server for supporting an e-commerce application.
            <div class="readmore_sapient"><p>Started learning more about Amazon Web Services & Kubernetes to up-skill my knowledge about cloud deployment. Got a certification done in AWS and continued exploring further about distributed systems architecture and avoiding single point of failure.</p>
            After joining Tesco I worked (and still working) on some exciting projects, right from building large scale mono repos for both front end(React) & backend(NodeJs + TypeScript) modules, to architecting & developing exciting UI applications using React & Redux. Got hands on exposure in data visualisation using d3 based charting libraries.
            <p>My experience with Tesco has taught me to use engineering skills for the continuous improvement of development practices relates to code quality, code review, test coverage, reduced code duplication and improved code sharing. Thinking in terms of quality & scalability has become a part of my everyday development</p></div>`
        },
        {
            name: 'Wipro Digital',
            href: 'https://wiprodigital.com/',
            designation: 'Software Engineer',
            dateRange: '12/2014 - 04/2020',
            location: 'London, UK & Bengaluru, India',
            imageUrl: wiproImg,
            readMoreClass: 'readmore_wipro',
            content: `I joined Wipro as a part of Campus placement offer I got during the year of 2014. My Wipro training happened in Greater Noida, NCR and my project allocation happened to be in Bengaluru.
            <p>Coming from a non computer science background, I started my career as a manual tester and later moved into the field of automation with Selenium. Inspired by my colleagues from the development team, I started learning JavaScript and slowly moved my way into front end development.</p>
            <div class="readmore_wipro"><p>During my tenure at Wipro, I worked with clients such as Lloyds Banking Group & Walmart full time.</p>
            In Walmart, I learnt about the Retail domain and I contributed to the front end development in React and automation using Selenium. I also got some exposure with MySQL as well.
            <p>Working with Lloyds Banking Group was one of the turning points in my career. I worked closely with them in their office in London, UK for almost 2.4 years. I got a chance to work in their digital transformation journey by migrating legacy applications into newer React - Redux framework  from scratch.</p>
            <p>I also learnt about developing re-usable React component library, worked in the automation of literally everything around testing using NodeJs automation frameworks. Focussing on accessibility, security, browser support & collecting analytics has become an integral part of my day to day development activities. Learnt more about distributed systems, micro services architecture, Kubernetes and Cloud infrastructure.</p></div>`
        }
    ],
    education: [
        {
            name: 'Anna University (Easwari Engineering College)',
            href: 'https://www.annauniv.edu/',
            designation: 'Bachelor of Engineering',
            dateRange: 'Batch of 2014',
            imageUrl: universityImg,
            location: 'Chennai, India',
        }
    ],
    projects: [
        {
            title: 'WebdriverIO TypeScript migration',
            link: 'https://github.com/webdriverio/webdriverio',
            description: 'Contributing to the migration of WebdriverIO mono repo packages into TypeScript.'
        },
        {
            title: 'Adding new Charts in VisX library',
            link: 'https://github.com/airbnb/visx',
            description: 'Adding new chart scales, primitives and a new circular barplot chart in VisX, a d3 based React library'
        },
        {
            title: 'Tasks Board',
            link: 'https://tasks-board-pwa.herokuapp.com/',
            description: 'An offline first serverless progressive web application built using React & Redux which let\'s you add & manage your tasks. It works on utilising browser\'s indexedDb storage'
        },
        {
            title: 'Rick & Morty catalogue',
            link: 'https://rick-morty-catalogue.herokuapp.com/',
            description: 'A server side rendered React application which catalogues the details of all the characters in the famous American cartoon Rick and Morty.'
        }
    ],
    clients: [
        {
            label: 'Tesco',
            src: tescoSVG
        },
        {
            label: 'Lloyds Banking Group',
            src: lloydsSVG
        },
        {
            label: 'Walmart',
            src: walmartSVG
        }
    ]
};

export default contents;
