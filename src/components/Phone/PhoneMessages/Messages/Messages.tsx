import styled from 'styled-components';
import Message from './Message/Message';

const dogImages = [
    {
        id: 1,
        image: dogImage1
    },
    {
        id: 2,
        image: dogImage2
    },
    {
        id: 3,
        image: dogImage3
    },
];

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
    transform: translateY(-1px);
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

function MessagesSent({ sent }: IProps) {
    return (
        <>
            <ImagesContainer sent={sent}>                
                {dogImages.map(dogImage => (
                    <Image key={dogImage.id} src={dogImage.image} sent={sent} alt='' />
                ))}
            </ImagesContainer>
            <MessagesContainer sent={sent}>
                <Message sent={sent} message={'hhhhhhhhhhh hh hhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh'} />
                <Message sent={sent} message={'hhh hhh'} />
                <MessagesReceivedRates sent={sent}>
                    <WalkTimeContainer>
                        <Circle />
                        <WalkTime>30 minutes walk</WalkTime>
                    </WalkTimeContainer>
                    <Rate>$29</Rate>
                </MessagesReceivedRates>
                <MessagesReceivedRates sent={sent}>
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

export default MessagesSent;