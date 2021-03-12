import styled from 'styled-components';
import Messages from './Messages/Messages';

const PhoneRestContainer = styled.div`
    height: 95%;
    overflow-y: scroll;     
    &::-webkit-scrollbar {
        background: transparent;
        width: 0;
    }       
`;

function PhoneMessages() {
    return (
        <PhoneRestContainer>            
            <Messages sent={false} images={true} />
            <Messages sent={true} images={true} />
            <Messages sent={false} images={false} />
        </PhoneRestContainer>
    )
}

export default PhoneMessages;