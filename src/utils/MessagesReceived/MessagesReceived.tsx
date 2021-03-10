import styled from 'styled-components';
import Message from './Message/Message';

const MessagesContainer = styled.div`
    margin-bottom: 8px;
`;

function MessageReceived() {
    return (
        <MessagesContainer>
            <Message message={'hhhhhhhhhhh hh hhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh'} />
            <Message message={'hhh hhh hhh hhh hhh hhh hhh'} />
        </MessagesContainer>
    )
}

export default MessageReceived;