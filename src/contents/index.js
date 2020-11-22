import locationSVG from '../assets/svgs/location.svg';

const contents = {
    name: 'Sarath P S',
    designation: 'Software Development Engineer - II',
    contactInfo: [
        {
            id: 'location',
            content: 'Bengaluru, India',
            icon: locationSVG,
            href: 'https://en.wikipedia.org/wiki/Bangalore'
        },
    ],
    additionalInfo: [
        {
            id: 'mail',
            label: 'E-Mail',
            href: 'mailto:sarathps93@gmail.com'
        },
        {
            id: 'resume',
            label: 'Resume',
            href: ''
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
    ] 
};

export default contents;
