import styled from 'styled-components';
import Messages from './Messages/Messages';
import messages from './messages';

const PhoneRestContainer = styled.div`
    height: 75%;
    padding-top: 34%;
    overflow-y: scroll;     
    &::-webkit-scrollbar {
        background: transparent;
        width: 0;
    }           
    scrollbar-color: transparent transparent;
    scrollbar-width: none;
`;

function PhoneMessages() {
    return (
        <PhoneRestContainer>                        
            {messages.map(({ id, sent, images, rate, messages}) => (
                <Messages key={id} sent={sent} images={images} rate={rate} messages={messages} />
            ))}
        </PhoneRestContainer>
    )
}

export default PhoneMessages;