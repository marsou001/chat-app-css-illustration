import styled from 'styled-components';
import Message from './Message/Message';
import im from '../../images/dog-image-1.jpg';

const MessagesContainer = styled.div`
    margin-bottom: 16px;
`;

const ImagesContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 8px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 12px;
`;

function MessagesReceived() {
    return (
        <>
            <ImagesContainer>
                <Image src={im} alt='' />
                <Image src={im} alt='' />
                <Image src={im} alt='' />
            </ImagesContainer>
            <MessagesContainer>
                <Message message={'hhhhhhhhhhh hh hhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh'} />
                <Message message={'hhh hhh hhh hhh hhh hhh hhh'} />
            </MessagesContainer>
        </>
    )
}

export default MessagesReceived;