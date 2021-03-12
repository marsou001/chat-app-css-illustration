import Message from './Message/Message';
import Images from './Images/Images';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import MessagesReceivedRates from './MessagesReceivedRates/MessagesReceivedRates';

interface MessageArr {
    id: number,
    message: string
}

interface MessagesProps {
    sent: boolean,
    images: boolean,  
    rate: boolean,
    messages: MessageArr[]
}

function Messages({ sent, images, rate, messages }: MessagesProps) {
    return (
        <>
            <Images sent={sent} images={images} />
            <MessagesContainer sent={sent}>                
                {messages.map((message) => (
                    <>
                        <Message key={message.id} sent={sent} message={message.message} /> 
                        <MessagesReceivedRates time={'30 minutes'} price={29} rate={rate} sent={sent} />
                        <MessagesReceivedRates time={'1 hour'} price={49} rate={rate} sent={sent} />                    
                    </>
                ))}               
            </MessagesContainer>
        </>
    )
}

export default Messages;