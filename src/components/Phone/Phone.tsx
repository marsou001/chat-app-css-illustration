import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import avatar from '../../images/avatar.jpg';

const PhoneContainer = styled.div`
    width: 225px;
    height: 470px;
    padding: 12px;
    border-radius: 36px;
    box-shadow: 1px 1px 18px rgba(0, 0, 0 , 0.4);
`;

const PhoneMain = styled.div`
    background-color: hsl(270, 20%, 96%);
    width: 100%;
    height: 100%;
    border-radius: 30px;
`;

const PhoneTop = styled.div`
    background-image: linear-gradient(to right, hsl(264, 100%, 61%), hsl(293, 100%, 63%));
    height: 15%;
    border-radius: inherit;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    svg {
        color: white;
    }
`;


const Topper = styled.div`
    background-color: white;
    width: 45%;
    height: 30px;
    margin: auto;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    transform: translateY(-12px);
`;

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
`;

const ProfileMain = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ProfilePicture = styled.div`
    background-color: white;
    width: 25px;
    height: 25px;
    margin-right: 7px;
    margin-left: 2px;
    padding: 2px;
    border-radius: 50%;
    img {
        width: 100%;
        border-radius: inherit;
    }
`;

const ProfileText = styled.div`
    p:first-child {
        font-size: 0.8rem;
        color: hsl(300, 100%, 94%);        
        margin: 0;
    }
    p:last-child {
        font-size: 0.6rem;
        margin: 0;
        color: hsl(276, 100%, 81%);
    }
`;

function Phone() {
    return (
        <PhoneContainer>
            <PhoneMain>
                <PhoneTop>
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
                </PhoneTop>
            </PhoneMain>
        </PhoneContainer>
    )
}

export default Phone
