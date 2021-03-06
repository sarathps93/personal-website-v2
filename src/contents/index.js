import locationSVG from '../assets/svgs/location.svg';
import universitySVG from '../assets/svgs/university.svg';
import tescoSVG from '../assets/svgs/tesco.svg';
import lloydsSVG from '../assets/svgs/lloyds.svg';
import walmartSVG from '../assets/svgs/walmart.svg';
import { experience } from '../utils/appUtils';

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
        { text: 'WebdriverIO', link: 'https://github.com/webdriverio/webdriverio' },
        { text: 'VisX', link: 'https://github.com/airbnb/visx' },
        { text: 'Jest', link: 'https://github.com/facebook/jest' },
        { text: 'React', link: 'https://github.com/facebook/react' }
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
    aboutMe: `Hi, I am Sarath, a Software Developer having ${experience} years of experience in Software development, testing, automation, deployment & maintenance. Primarily focussed on Web Application development using JavaScript / NodeJs.<br />
            Member of <strong class="profile-feed__strong">WebdriverIO</strong>'s official project contributors' team and also an open source contributor in other projects such as <strong class="profile-feed__strong">VisX</strong>, <strong class="profile-feed__strong">Jest</strong> & <strong class="profile-feed__strong">React</strong>.
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
            name: 'TESCO PLC',
            via: 'Publicis Sapient',
            href: 'https://www.tesco.com/',
            designation: 'SDE - II',
            dateRange: '05/2020 - present',
            location: 'Bengaluru, India',
            imageUrl: tescoSVG,
            readMoreClass: 'readmore_tesco',
            content: `After joing Publicis Sapient as a Senior Associate in April 2020 I immediately started working with Tesco as an SDE - II. Utilising the free time I got during the onboarding formalities I invested it in learning GraphQL, brushed up my skills on TypeScript and developed a NodeJs GraphQL server for supporting an e-commerce application.
            <div class="readmore_tesco"><p>Started learning more about Amazon Web Services & Kubernetes to up-skill my knowledge about cloud deployment. Got a certification done in AWS and continued exploring further about distributed systems architecture and avoiding single point of failure.</p>
            After joining Tesco I worked (and still working) on some exciting projects, right from building large scale mono repos for both front end(React) & backend(NodeJs + TypeScript) modules, to architecting & developing exciting UI applications using React & Redux. Got hands on exposure in data visualisation using d3 based charting libraries.
            <p>My experience with Tesco has taught me to use engineering skills for the continuous improvement of development practices relates to code quality, code review, test coverage, reduced code duplication and improved code sharing. Thinking in terms of quality & scalability has become a part of my everyday development</p></div>`
        },
        {
            name: 'Lloyds Banking Group',
            via: 'Wipro Digital',
            href: 'https://www.lloydsbankinggroup.com/',
            designation: 'Senior Software Engineer',
            dateRange: '06/2017 - 04/2020',
            location: 'London, UK & Bengaluru, India',
            imageUrl: lloydsSVG,
            readMoreClass: 'readmore_lloyds',
            content: `I joined Lloyds Banking Group in June 2017 as a Software Engineer in Bengaluru. By January 2018, I moved to their client location at London, UK.
            <div class="readmore_lloyds">
            <p>Working with Lloyds Banking Group was one of the turning points in my career. I worked in their London office for almost 2.4 years. I got a chance to be a part of their digital transformation journey. Migrated their legacy applications into newer React - Redux framework from scratch and automated literally everything around testing using NodeJs automation frameworks.</p>
            <p>Learnt more about the best practices around developing re-usable React component library. Focussing on accessibility, security, browser support & collecting analytics has become an integral part of my day to day development activities. Learnt more about distributed systems, micro services architecture, Kubernetes and Cloud infrastructure.</p></div>`
        },
        {
            name: 'Walmart Inc.',
            via: 'Wipro Technologies',
            href: 'https://www.walmart.com/',
            designation: 'Software Engineer',
            dateRange: '01/2016 - 06/2017',
            location: 'Bengaluru, India',
            imageUrl: walmartSVG,
            readMoreClass: 'readmore_walmart',
            content: `I started working with Walmart as a Selenium automation engineer and slowly started my journey towards JavaScript & NodeJs development.
            <div class="readmore_walmart"><p>Coming from a non computer science background, I had to invest a lot of time in learning the coding practices and to prove myself as a developer.</p>
            In Walmart, I learnt about the Retail domain and I contributed to the front end development in React and automation using Selenium. I also got exposure with MySQL as well.`
        }
    ],
    education: [
        {
            name: 'Anna University (Easwari Engineering College)',
            href: 'https://www.annauniv.edu/',
            designation: 'Bachelor of Engineering',
            dateRange: 'Batch of 2014',
            imageUrl: universitySVG,
            location: 'Chennai, India',
        }
    ],
    projects: [
        {
            title: 'WebdriverIO',
            description: 'A NodeJs based automation framework which has more than 700,000 weekly downloads from npm. Refactored and migrated one of their packages into TypeScript and also fixed 2 open defects'
        },
        {
            title: 'VisX',
            description: 'A D3 based React charting library which has more than 15,000 weekly downloads from npm. Currently added new D3 scales and ongoing development of chart axes and a new circular bar plot chart'
        },
        {
            title: 'Jest & React',
            description: 'Fixed 3 major defects in Jest, an open-source unit test framework which has more than 8 million weekly downloads from npm. An approved pull request in React repository for a defect fix'
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
