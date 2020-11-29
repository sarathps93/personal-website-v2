import { FlexContainer } from '../../styles/common';
import {
    Container,
    ImageContainer,
    Image,
    Description,
    CompanyName,
    Designation,
    Date,
    Location,
    Content
} from './styled';
import contents from '../../contents';
import { safeAnchorInNewTab, createMarkup } from '../../utils/appUtils';
import ReadMoreButton from '../readMore';

const JobSummary = () => (
    <div>
        {contents.experience.map(exp => (
            <Container key={exp.name}>
                <FlexContainer>
                    <ImageContainer>
                        <Image src={exp.imageUrl} alt={exp.name} />
                    </ImageContainer>
                </FlexContainer>
                <Description>
                    <CompanyName
                        href={exp.href}
                        {...safeAnchorInNewTab}
                    >
                        {exp.name}
                    </CompanyName>
                    <Designation>
                        {exp.designation}
                        <Date><em>{exp.dateRange}</em></Date>
                    </Designation>
                    <Location dangerouslySetInnerHTML={createMarkup(exp.location)} />
                    <Content dangerouslySetInnerHTML={createMarkup(exp.content)} />
                    <ReadMoreButton className={exp.readMoreClass} />
                </Description>
        </Container>
        ))}
    </div>
);

export default JobSummary;
