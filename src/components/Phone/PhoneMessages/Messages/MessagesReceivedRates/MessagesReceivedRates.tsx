import styled from 'styled-components';
import WalkTimeContainer from './WalkTimeContainer/WalkTimeContainer';
import Circle from './Circle/Circle';
import WalkTime from './WalkTime/WalkTime';
import Rate from './Rate/Rate';

interface IProps {
    sent: boolean
}

const MessagesReceivedRatesContainer = styled.div`
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

function MessagesReceivedRates({ sent }: IProps) {
    return (
        <MessagesReceivedRatesContainer sent={sent}>
            <WalkTimeContainer>
                <Circle />
                <WalkTime>30 minutes walk</WalkTime>
            </WalkTimeContainer>
            <Rate>$29</Rate>
        </MessagesReceivedRatesContainer>
    )
}

export default MessagesReceivedRates;