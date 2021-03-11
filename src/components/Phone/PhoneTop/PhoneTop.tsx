import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import avatar from '../../../images/avatar.jpg';
import Profile from './Profile/Profile';
import ProfileMain from './ProfileMain/ProfileMain';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ProfileText from './ProfileText/ProfileText';
import Topper from './Topper/Topper';

const PhoneTopContainer = styled.div`
    background-image: linear-gradient(to right, hsl(264, 100%, 61%), hsl(293, 100%, 63%));
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 15%;
    border-radius: inherit;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    svg {
        color: white;
    }
`;

function PhoneTop() {
    return (
        <PhoneTopContainer>
            <Topper />
            <Profile>
                <ProfileMain>
                    <MdKeyboardArrowLeft />
                    <ProfilePicture>
                        <img src={avatar} alt='' />
                    </ProfilePicture>
                    <ProfileText>
                        <p>Samuel Green</p>
                        <p>Available to Walk</p>
                    </ProfileText>
                </ProfileMain>
                <BsThreeDotsVertical />
            </Profile>
        </PhoneTopContainer>
    )
}

export default PhoneTop;