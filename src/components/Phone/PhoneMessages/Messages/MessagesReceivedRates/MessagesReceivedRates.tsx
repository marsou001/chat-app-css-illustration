import styled from 'styled-components';
import WalkTimeContainer from './WalkTimeContainer/WalkTimeContainer';
import Circle from './Circle/Circle';
import WalkTime from './WalkTime/WalkTime';
import Rate from './Rate/Rate';

interface StyledProps {    
    sent: boolean,
    rate: boolean
}

interface IProps extends StyledProps {
    time: string,
    price: number,
}

const MessagesReceivedRatesContainer = styled.div`
    background-image: linear-gradient(to right, hsl(293, 100%, 63%), hsl(264, 100%, 61%));
    display: ${(props: StyledProps) => !props.sent && props.rate ? 'flex' : 'none'};
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 10px;
    border-bottom-left-radius: 5px;
`;

function MessagesReceivedRates({ time, price, sent, rate }: IProps) {
    return (
        <MessagesReceivedRatesContainer sent={sent} rate={rate}>
            <WalkTimeContainer>
                <Circle />
                <WalkTime>{time} walk</WalkTime>
            </WalkTimeContainer>
            <Rate>${price}</Rate>
        </MessagesReceivedRatesContainer>
    )
}

export default MessagesReceivedRates;