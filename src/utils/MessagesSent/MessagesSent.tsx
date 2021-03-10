import styled from 'styled-components';
import Message from './Message/Message';
import im from '../../images/dog-image-1.jpg';

const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 16px;
`;

const ImagesContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 8px;
    border-radius: 12px;
`;

function MessagesSent() {
    return (
        <>
            <ImagesContainer>
                <Image src={im} alt='' />
                <Image src={im} alt='' />
                <Image src={im} alt='' />
            </ImagesContainer>
            <MessagesContainer>
                <Message message={'hhhhhhhhhhh hh hhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh'} />
                <Message message={'hhh hhh'} />
            </MessagesContainer>
        </>
    )
}

export default MessagesSent;