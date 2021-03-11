import styled from 'styled-components';
import MessagesReceived from '../../../utils/MessagesReceived/MessagesReceived';
import MessagesSent from '../../../utils/MessagesSent/MessagesSent';

const PhoneRestContainer = styled.div`
    overflow-y: hidden;    
`;

function PhoneRest() {
    return (
        <PhoneRestContainer>
            <MessagesReceived />
            <MessagesSent /> 
        </PhoneRestContainer>
    )
}

export default PhoneRest;