import { FlexContainer } from '../../styles/common';
import {
    Container,
    Image,
    Description,
    Institution,
    Title,
    Date,
    Location,
    Content,
    ImageContainer,
    Via
} from './styled';
import { safeAnchorInNewTab, createMarkup } from '../../utils/appUtils';
import ReadMoreButton from '../readMore';

const JobSummary = ({ content }) => (
    <div>
        {content.map(exp => (
            <Container key={exp.name}>
                <FlexContainer>
                    <ImageContainer>
                        <Image src={exp.imageUrl} alt={exp.name} />
                    </ImageContainer>
                </FlexContainer>
                <Description>
                    <Institution
                        href={exp.href}
                        {...safeAnchorInNewTab}
                    >
                        {exp.name}
                    </Institution>
                    {!!exp.via && <Via>via {exp.via}</Via>}
                    <Title>
                        {exp.designation}
                        <Date><em>{exp.dateRange}</em></Date>
                    </Title>
                    <Location dangerouslySetInnerHTML={createMarkup(exp.location)} />
                    <Content dangerouslySetInnerHTML={createMarkup(exp.content)} />
                    <ReadMoreButton className={exp.readMoreClass} />
                </Description>
        </Container>
        ))}
    </div>
);

export default JobSummary;
