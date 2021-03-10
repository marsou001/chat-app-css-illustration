import styled from 'styled-components';
import Message from './Message/Message';

const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 16px;
`;

function MessagesSent() {
    return (
        <MessagesContainer>
            <Message message={'hhhhhhhhhhh hh hhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh'} />
            <Message message={'hhh hhh'} />
        </MessagesContainer>
    )
}

export default MessagesSent;