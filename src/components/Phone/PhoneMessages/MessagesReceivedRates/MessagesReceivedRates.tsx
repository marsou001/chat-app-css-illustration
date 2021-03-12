import styled from 'styled-components';

interface IProps {
    sent: boolean
}

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

export default MessagesReceivedRates;