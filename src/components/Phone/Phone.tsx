import styled from 'styled-components';
import PhoneMain from './PhoneMain/PhoneMain';
import PhoneTop from './PhoneTop/PhoneTop';
import PhoneRest from './PhoneRest/PhoneRest';
import SendMessageForm from './SendMessageForm/SendMessageForm';

const PhoneContainer = styled.div`
    width: 225px;
    height: 470px;
    margin-bottom: 40px;
    padding: 10px;
    border-radius: 36px;
    box-shadow: 1px 1px 18px rgba(0, 0, 0 , 0.4);
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

function Phone() {
    return (
        <PhoneContainer>
            <PhoneMain>
                <PhoneTop />                     
                <PhoneRest />
                <SendMessageForm />                  
            </PhoneMain>
        </PhoneContainer>
    )
}

export default Phone;
