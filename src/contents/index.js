import locationSVG from '../assets/svgs/location.svg';
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
        'React/Redux',
        'GraphQL',
        'Kubernetes',
        'AWS'
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
    aboutMe: `Hi, I am Sarath, a ${age} year old Software Developer. I have got ${experience} years of experience in Software develoment, testing, automation, deployment & maintenance.
            <div>I am currently working with <strong class="profile-feed__strong"><a href="https://www.tesco.com/" class="profile-feed__link" target="__blank" rel="noopener noreferrer">Tesco Bengaluru</a></strong> <span class="reference-text">(through Publicis Sapient)</span> as an SDE-II. I have got experience in working with some other big clients such as <strong class="profile-feed__strong"><a href="https://www.lloydsbank.com/" class="profile-feed__link" target="__blank" rel="noopener noreferrer">Lloyds Banking Group</a></strong> <span class="reference-text">(3y)</span> & <strong class="profile-feed__strong"><a href="https://www.walmart.com/" class="profile-feed__link" target="__blank" rel="noopener noreferrer">Walmart</a></strong> <span class="reference-text">(1.3y)</span>.</div>
            <div style="margin-top: 1em;">I specialise in</div>
            <ul class="profile-feed__ul"> 
            <li>Building enterprise level web applications using React - Redux or with plain vanilla JavaScript</li>
            <li>Developing NodeJs server applications along with GraphQL using JavaScript or TypeScript</li>
            <li>Automation of functional and non-functional software testing using NodeJs test frameworks such as WebDriverIO or Selenium</li>
            <li>Kubernetes deployment, scaling, logging & monitoring</li>
            </ul>
            <p>I love developing applications which enhances the online experience of users worldwide.
            I am also an open source contributor in <strong class="profile-feed__strong">React</strong>, <strong class="profile-feed__strong">Jest</strong>, <strong class="profile-feed__strong">WebDriverIO</strong> & <strong class="profile-feed__strong">VisX</strong> libraries.</p>
            `
};

export default contents;
