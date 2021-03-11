import styled from 'styled-components';
import Message from './Message/Message';
import dogImage1 from '../../../../images/dog-image-1.jpg';
import dogImage2 from '../../../../images/dog-image-2.jpg';
import dogImage3 from '../../../../images/dog-image-3.jpg';

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

interface IProps {
    sent: boolean
}

const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-${(props: IProps) => props.sent ? 'end' : 'start'};
    margin-bottom: 16px;
`;

const ImagesContainer = styled.div`
    display: flex;
    justify-content: flex-${(props: IProps) => props.sent ? 'end' : 'start'};
    margin-bottom: 8px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    margin-${(props: IProps) => props.sent ? 'left' : 'right'}: 8px;
    border-radius: 12px;
`;

const MessagesReceivedRates = styled.div`
    background-image: linear-gradient(to right, hsl(293, 100%, 63%), hsl(264, 100%, 61%));
    display: ${(props: IProps) => props.sent ? 'none' : 'flex'};
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