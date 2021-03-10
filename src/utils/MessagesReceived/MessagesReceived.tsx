import styled from 'styled-components';
import Message from './Message/Message';

const MessagesContainer = styled.div`
    margin-bottom: 16px;
`;

function MessagesReceived() {
    return (
        <MessagesContainer>
            <Message message={'hhhhhhhhhhh hh hhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh'} />
            <Message message={'hhh hhh hhh hhh hhh hhh hhh'} />
        </MessagesContainer>
    )
}

export default MessagesReceived;