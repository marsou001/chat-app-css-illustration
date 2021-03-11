import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import SendMessageField from './SendMessageField/SendMessageField';
import SendButton from './SendButton/SendButton';

const SendMessageFormContainer = styled.form`
    position: absolute;
    right: 8px;
    bottom: 8px;    
    left: 8px;    
`;

function SendMessageForm() {
    return (
        <SendMessageFormContainer>
            <SendMessageField type="text" name="message" placeholder='Type a message...' />
            <SendButton>
                <MdKeyboardArrowRight />
            </SendButton>
        </SendMessageFormContainer>
    )
}

export default SendMessageForm;