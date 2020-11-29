import { Fragment } from 'react';
import Image from '../../assets/images/photo.jpg';
import contents from '../../contents';

import { safeAnchorInNewTab } from '../../utils/appUtils';
import {
    Container,
    ProfilePhoto,
    Name,
    Designation,
    AnchorButton,
    LangContainer,
    Circle,
    Language
} from './styled';
import {
    Card,
    FlexContainer,
    GridContainer,
    SubHeading,
    AlignCenter,
    StyledAnchor
} from '../../styles/common';

const LeftPane = () => {
    const LanguageProficiency = ({ proficiency }) => (
        <Fragment>
            {Array.from({ length: 5 }).map((_, idx) => (
                <Circle key={idx} fill={idx <= proficiency - 1} />
            ))}
        </Fragment>
    );

    return (
        <Container>
            <Card>
            <AlignCenter>
                <ProfilePhoto src={Image} />
            </AlignCenter>
            <Name>{contents.name}</Name>
            <Designation>{contents.designation}</Designation>
            <FlexContainer style={{ marginTop: '12px', marginBottom: '6px' }}>
                {contents.contactInfo.map(item => (
                    <StyledAnchor
                        href={item.href}
                        key={item.id}
                        {...safeAnchorInNewTab}
                    >
                        <img src={item.icon} alt={item.id} />
                        <span>{item.content}</span>
                    </StyledAnchor>
                ))}
            </FlexContainer>
            </Card>
            <Card>
            <SubHeading>Contact me through</SubHeading>
                <GridContainer>
                    {contents.additionalInfo.map(item => (
                        <StyledAnchor
                            key={item.id}
                            href={item.href}
                            {...safeAnchorInNewTab}
                        >
                            <AnchorButton>{item.label}</AnchorButton>
                        </StyledAnchor>
                    ))}
                </GridContainer>
            </Card>
            <Card>
            <SubHeading>I can coversate with you in</SubHeading>
                {contents.languages.map(lang => (
                    <LangContainer key={lang.language}>
                        <Language>{lang.language}</Language>
                        <LanguageProficiency proficiency={lang.proficiency} />
                    </LangContainer>
                ))}
            </Card>
        </Container>
    )
};

export default LeftPane;
