import PhoneContainer from './PhoneContainer/PhoneContainer';
import PhoneMain from './PhoneMain/PhoneMain';
import PhoneTop from './PhoneTop/PhoneTop';
import PhoneRest from './PhoneRest/PhoneRest';
import SendMessageForm from './SendMessageForm/SendMessageForm';

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
