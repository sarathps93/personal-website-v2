import Image from '../../assets/images/photo.jpg';
import contents from '../../contents';

import { safeAnchorInNewTab } from '../../utils/appUtils';
import {
    Container,
    ProfilePhoto,
    Name,
    Designation,
    AnchorButton
} from './styled';
import {
    Card,
    FlexContainer,
    GridContainer,
    SubHeading,
    AlignCenter,
    StyledAnchor
} from '../../styles/styled';

const Profile = () => {
    return (
        <Container>
            <Card>
            <AlignCenter>
                <ProfilePhoto src={Image} />
            </AlignCenter>
            <Name>{contents.name}</Name>
            <Designation>{contents.designation}</Designation>
            <FlexContainer style={{ marginTop: '6px' }}>
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
        </Container>
    )

};

export default Profile;
