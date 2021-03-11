import styled from 'styled-components';
import Messages from './Messages/Messages';

const PhoneRestContainer = styled.div`
    overflow-y: hidden;    
`;

function PhoneRest() {
    return (
        <PhoneRestContainer>            
            <Messages sent={false} />
            <Messages sent={true} />
        </PhoneRestContainer>
    )
}

export default PhoneRest;