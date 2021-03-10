import styled from 'styled-components';
import Message from './Message/Message';
import im from '../../images/dog-image-1.jpg';

const MessagesContainer = styled.div`
    margin-bottom: 16px;
`;

const ImagesContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 8px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 12px;
`;

const MessagesReceivedRates = styled.div`
    background-image: linear-gradient(to right, hsl(293, 100%, 63%), hsl(264, 100%, 61%));
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 10px;
    border-bottom-left-radius: 5px;
`;

const WalkTimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Circle = styled.div`
    background-color: transparent;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
`;

const WalkTime = styled.span`
    font-size: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
`;

const Rate = styled.span`
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
`;

function MessagesReceived() {
    return (
        <>
            <ImagesContainer>
                <Image src={im} alt='' />
                <Image src={im} alt='' />
                <Image src={im} alt='' />
            </ImagesContainer>
            <MessagesContainer>
                <Message message={'hhhhhhhhhhh hh hhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh'} />
                <Message message={'hhh hhh hhh hhh hhh hhh hhh'} />
                <MessagesReceivedRates>
                    <WalkTimeContainer>
                        <Circle />
                        <WalkTime>30 minutes walk</WalkTime>
                    </WalkTimeContainer>
                    <Rate>$29</Rate>
                </MessagesReceivedRates>
                <MessagesReceivedRates>
                    <WalkTimeContainer>
                        <Circle />
                        <WalkTime>30 minutes walk</WalkTime>
                    </WalkTimeContainer>
                    <Rate>$29</Rate>
                </MessagesReceivedRates>
            </MessagesContainer>            
        </>
    )
}

export default MessagesReceived;