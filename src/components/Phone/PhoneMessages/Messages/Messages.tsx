import Message from './Message/Message';
import Images from './Images/Images';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import MessagesReceivedRates from './MessagesReceivedRates/MessagesReceivedRates';

interface IProps {
    sent: boolean
}

function MessagesSent({ sent }: IProps) {
    return (
        <>
            <Images sent={sent} />
            <MessagesContainer sent={sent}>
                <Message sent={sent} message={'hhhhhhhhhhh hh hhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh'} />
                <Message sent={sent} message={'hhh hhh'} />
                <MessagesReceivedRates sent={sent} />
                <MessagesReceivedRates sent={sent} />
            </MessagesContainer>
        </>
    )
}

export default MessagesSent;